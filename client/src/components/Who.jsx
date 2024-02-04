import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Gem } from "lucide-react";
import { useState } from "react";
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import talentTrailContext from "./Context/context"; 

function Who() {
  const {resume, setResume} = useContext(talentTrailContext)
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const divStyle = {
    backgroundColor: "rgb(12, 74, 110)",
    backgroundImage:
      "radial-gradient(at 22% 53%, rgb(139, 92, 246) 0, transparent 81%), radial-gradient(at 48% 98%, rgb(8, 145, 178) 0, transparent 42%), radial-gradient(at 46% 59%, rgb(115, 115, 115) 0, transparent 100%), radial-gradient(at 25% 42%, rgb(88, 28, 135) 0, transparent 95%), radial-gradient(at 24% 71%, rgb(225, 29, 72) 0, transparent 26%), radial-gradient(at 7% 97%, rgb(63, 63, 70) 0, transparent 83%)",
    /* Add other styles as needed */
  };

  function handleChange(event) {
    const value = event.target.value;
    console.log(value);
    setValue(value);
  }

  function handleClick() {
    localStorage.setItem("type", value);
    const check = localStorage.getItem("pdf")

    if(check){
      navigate(value == "student" ? '/dashboard' : '/dashboard-company')
    }else{
      navigate('/resume-upload')
    }
  }

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={divStyle}
    >
      <div className="flex flex-col justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Button
              startContent={<Gem className="" />}
              size="sm"
              color="secondary"
              variant="shadow"
            />
            <div className="flex flex-col">
              <p className="text-md">Talent Trail</p>
              <p className="text-small text-default-500">talent-trail.ai</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="">
            <p>Who are you?</p>
            <div>
              <RadioGroup
                onChange={handleChange}
                label="Select your tribe"
                orientation="horizontal"
              >
                <Radio value="student">Student</Radio>
                <Radio value="company">Company</Radio>
                <Button onClick={handleClick} variant="ghost">
                  Go ahead
                </Button>
              </RadioGroup>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to='/'><p>Visit the home page to know more.</p></Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Who;
