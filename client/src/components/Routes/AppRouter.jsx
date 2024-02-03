import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Dashboard from "../Dashboard";
import talentTrailContext from "../Context/context";
import Temp from "../Temp";
import {Button} from "@nextui-org/react"

function AppRouter() {
  const {userState} = useContext(talentTrailContext)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/" element={<Button />}  />
        <Route path="/dashboard/resume-matcher" element={<></>} /> 
      </Route>
      <Route path="/temp" element={<Temp />} />
    </Routes>
  );
}

export default AppRouter;
