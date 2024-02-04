import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { db } from "../../controller/firebaseConfig";
import {addDoc, collection} from "firebase/firestore"
import { useContext } from "react";
import talentTrailContext from "../Context/context";
import {useNavigate} from "react-router-dom"

function StandardTest() {
  const {test, setTest} = useContext(talentTrailContext)
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState("");
  const [correct, setCorrect] = useState([]);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const { name, email, imageURL } = user;
  const response = localStorage.getItem("response")
  const { gpa, gradYear, keywords, skill } = JSON.parse(response)

  useEffect(() => {
    async function postToDb() {
      if (submit) {
        try {
          const user = JSON.parse(localStorage.getItem("user"));
          const { name, email } = user;
          const data = {
            uid: user.uid, // Assuming the user object has a uid property
            email: email,
            name: name,
            gpa: gpa,
            gradYear: gradYear,
            skill: skill,
            resuscore: score
          };
          const add = await addDoc(collection(db, "users"), data);
          console.log(add);
          setTest(true);
        } catch (error) {
          console.log(error);
        } finally {
          if (test) {
            navigate('/dashboard');
          }
        }
      }
    }
    postToDb();
  }, [submit]);
  
  async function handleSubmit() {
    const inputValue = questions + "\n Answers to the above quiz" + input;
    const requestData = { input: inputValue };
    console.log("INPUT DATA" + JSON.stringify(requestData));
    try {
      const response = await axios.post(
        "http://localhost:5000/grade_quiz",
        requestData
      );
      console.log(response);
      const responseData = response.data;
      setScore(responseData.total_score);
      setCorrect(responseData.correctOptions);
      setSubmit(true)
       
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  async function handleClick() {
    const { gpa, gradYear, keywords, skill } = JSON.parse(
      localStorage.getItem("response")
    );
    setStart(true);
    try {
      const data = { keywords, skill };
      const response = await axios.post(
        "http://localhost:5000/create_questions",
        data
      );
      const parsedQuestions =
        JSON.parse(response.data.questions).questions || [];
      setQuestions(parsedQuestions);
      console.log("RESPONSE", response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10">
      <Card className="w-1/2 h-[85%]">
        <CardHeader className="flex gap-3"></CardHeader>
        <CardBody className="max-h-96 overflow-y-scroll">
          <div>
            <ul>
              {Array.isArray(questions) && questions.length > 0 ? (
                questions.map((question, index) => (
                  <div>
                    <li key={index}>{question} </li>
                    <br />
                  </div>
                ))
              ) : (
                <li>Begin the test!</li>
              )}
            </ul>
          </div>
          <Divider />

          <div>
            {correct.length > 1 && <p>The correct answers for reference:</p>}
            <ul>
              {correct.map((option, index) => (
                <div key={index}>
                  <li>
                    {index + 1}. {option}
                  </li>
                  <br />
                </div>
              ))}
            </ul>
          </div>

          <Divider />
          {score && (
            <p className="text-2xl text-secondary">Your ResuScore: {score}</p>
          )}
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-col">
          <Input
            onChange={handleChange}
            placeholder="Enter Answers here"
            size="lg"
          />
          {start ? (
            <Button
              onClick={handleSubmit}
              className="mt-2 self-end"
              size="lg"
              color="secondary"
            >
              Submit for answers
            </Button>
          ) : (
            <Button
              onClick={handleClick}
              className="mt-2 self-end"
              size="lg"
              color="secondary"
            >
              Generate questions
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default StandardTest;
