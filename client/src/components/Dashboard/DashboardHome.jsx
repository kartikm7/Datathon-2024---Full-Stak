import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { CheckCheck, Key, BookCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeUploader from "../ResumeUploader";

function DashboardHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { name, email, imageURL } = user;
  const response = localStorage.getItem("response")
  const { gpa, gradYear, keywords, skill } = JSON.parse(response)
    console.log(gpa);
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl font-semibold m-5">Hello {name}! </h1>
      <div className="flex flex-row gap-5 m-5">
        <Card className="max-w-[400px]">
          <CardHeader>
            <Button
              startContent={<CheckCheck className="" />}
              size="sm"
              color="secondary"
              variant="shadow"
              className="mr-5"
            />
            <div className="flex flex-col">
              <p className="text-md">You.</p>
              <p className="text-small text-default-500">Everything you.</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div>
              <h1>Skills:</h1>
              <p className="font-light ">{skill}</p>
            </div>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="flex flex-row gap-5 font-light ">
              <div>
                <h1>GPA: {gpa}</h1>
              </div>
              <div>
                <h1>Graduation/Expected: {gradYear}</h1>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="max-w-[700px]">
          <CardHeader>
            <Button
              startContent={<Key className="" />}
              size="sm"
              color="secondary"
              variant="shadow"
              className="mr-5"
            />
            <div className="flex flex-col">
              <p className="text-md">Keywords</p>
              <p className="text-small text-default-500">
                Words most prominent from your resume.
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div>
              <h1>Words:</h1>
              <p className="font-light ">{keywords}</p>
            </div>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="flex flex-row gap-5 font-light ">
              <div>
                <h1></h1>
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="m-5">
        <Card className="max-w-[400px]">
          <CardHeader>
            <h1>
              Get your <span className="text-secondary">ResuScore!</span>{" "}
            </h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="font-light">
              Test your skills and get Talent Trailed Verified.
            </p>
            <Link to='/dashboard/resuscore'>
              <Button color="secondary" className="max-w-40 mt-2">
                Standardized test
              </Button>
            </Link>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to="/">
              <p className="text-primary">Visit the home page to know more.</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default DashboardHome;
