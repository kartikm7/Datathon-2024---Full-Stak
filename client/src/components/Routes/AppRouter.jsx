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

function AppRouter() {
  const {userState} = useContext(talentTrailContext)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/who" element={<Who /> } />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/" element={<DashboardHome />}  />
        {/* <Route path='/dashboard/home' element={} /> */}
        <Route path="/dashboard/resume-matcher" element={<JobProfileMatcher />} /> 
      </Route>
      <Route path="/temp" element={<Temp />} />
    </Routes>
  );
}

export default AppRouter;
