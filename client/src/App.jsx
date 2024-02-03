import React from "react";
import './App.css'
import Navbarr from "./components/Navbarr";
import { Button, Navbar } from "@nextui-org/react";
import Homepage from "./components/Homepage";
function App(){
  return(
    <div>
    <Navbarr/>

   <Homepage/>
   </div>
  )
}

export default App