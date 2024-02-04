import React, { useEffect } from "react";
import axios from "axios";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Input,
    Button,
  } from "@nextui-org/react";

function JobProfileMatcher() {
  useEffect(() => {
    const resume = localStorage.getItem("pdf");
    const jd = "Full Stack";
    const data = {
      resume: resume,
      job_description: jd,
    };

    let a , b, c;

    async function job() {
      try {
        const response = await axios.post("http://localhost:5000/at_system", data);
        const result = response.data;

        console.log("JD Match:", result["JD Match"]);
        console.log("Missing Keywords:", result["MissingKeywords"]);
        console.log("What Can Be Improved?:", result["What Can Be Improved?"]);
        a = result["JD Match"]
        b = result["MissingKeywords"]
        c = result["What Can Be Improved?"]
    } catch (error) {
        console.log(error);
      }
    }

    // Call the job function when the component mounts
    job();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10">
      {/* Customize the card and UI according to your requirements */}
      <Card className="w-1/2 h-[85%]">
        <CardHeader className="flex gap-3">
          {/* CardHeader content */}
        </CardHeader>
        <CardBody className="max-h-96 overflow-y-scroll">
          {/* Display JD Match, Missing Keywords, and What Can Be Improved */}
          <p>JD Match: {/* JD Match percentage */}</p>
          <p>Missing Keywords: {JSON.stringify(/* Missing Keywords array */)}</p>
          <p>What Can Be Improved?: {/* Improvement suggestions */}</p>
        </CardBody>
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

export default JobProfileMatcher;
