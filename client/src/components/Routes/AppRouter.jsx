import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Dashboard from "../Dashboard";
import context from "../Context/context";

function AppRouter() {
  const {userState} = useContext(context)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;
