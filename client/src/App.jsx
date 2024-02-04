import React from "react";
import "./App.css";
import { Button, Navbar } from "@nextui-org/react";
import Homepage from "./components/Homepage";
import TransparentCard from "./components/TransparentCard";
import AppRouter from "./components/Routes/AppRouter";
function App() {
  return (
    <div className="font-inter">
      <AppRouter />
    </div>
  );
}

export default App;
