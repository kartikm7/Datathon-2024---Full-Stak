import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Dashboard from "../Dashboard";
import talentTrailContext from "../Context/context";
import Temp from "../Temp";
import {Button} from "@nextui-org/react"
import Who from "../Who";
import JobProfileMatcher from "../Dashboard/JobProfileMatcher";
import DashboardHome from "../Dashboard/DashboardHome";
import ResumeUploader from "../ResumeUploader";
import StandardTest from "../Dashboard/StandardTest";
import DashboardCompany from "../DashboardCompany";
import EmployerDashboard from "../Dashboard/EmployerDashboard";

function AppRouter() {
  const {userState} = useContext(talentTrailContext)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/who" element={<Who /> } />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/" element={<DashboardHome />}  />
        <Route path='/dashboard/resuscore' element={<StandardTest />} />
        <Route path="/dashboard/job-matcher" element={<JobProfileMatcher />} />
        {/* <Route path="/dashboard/resume-matcher" element={<JobProfileMatcher />} /> */}
      </Route>
      <Route path="/dashboard-company" element={<DashboardCompany />} >
        <Route path="/dashboard-company/" element={<EmployerDashboard />}  />
        <Route path='/dashboard-company/recruit' element={<EmployerDashboard />} />
        {/* <Route path="/dashboard/resume-matcher" element={<JobProfileMatcher />} />  */}
      </Route>
      <Route path="/resume-upload" element={<ResumeUploader/>} />
      <Route path="/temp" element={<Temp />} />
    </Routes>
  );
}

export default AppRouter;
