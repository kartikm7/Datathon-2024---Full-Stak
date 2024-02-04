import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import talentTrailContext from "./Context/context";
import {Gem} from "lucide-react"
import {Card, CardBody, CardHeader, CardFooter, Button, Divider, Link} from "@nextui-org/react"

const ResumeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const navigate = useNavigate();
  const { resume, setResume } = useContext(talentTrailContext);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const call = await axios.post(
        "http://localhost:5000/resume_skills",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { pdf, response } = call.data;
      localStorage.setItem("pdf", pdf);
      localStorage.setItem("response", JSON.stringify(response));
      setUpload(true);
      console.log("Upload successful:", call.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally{
      setResume(true);
      navigate("/dashboard");
    }
  };

  const divStyle = {
    backgroundColor: "rgb(12, 74, 110)",
    backgroundImage:
      "radial-gradient(at 22% 53%, rgb(139, 92, 246) 0, transparent 81%), radial-gradient(at 48% 98%, rgb(8, 145, 178) 0, transparent 42%), radial-gradient(at 46% 59%, rgb(115, 115, 115) 0, transparent 100%), radial-gradient(at 25% 42%, rgb(88, 28, 135) 0, transparent 95%), radial-gradient(at 24% 71%, rgb(225, 29, 72) 0, transparent 26%), radial-gradient(at 7% 97%, rgb(63, 63, 70) 0, transparent 83%)",
    /* Add other styles as needed */
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" style={divStyle}>
        <div className="flex flex-col justify-center items-center">
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
            <p>Upload your resume!</p>
            <input className="scale-90 mt-5" type="file" accept=".pdf" onChange={handleFileChange} />
            <Button className="w-1/2 mt-5" size="sm" onClick={handleUpload}>Upload Resume</Button>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://localhost:5173/">
              Visit the home page to know more.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResumeUploader;
