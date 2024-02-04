import { React } from "react";
import Sidebar from "./Dashboard/Sidebar";
import {Button} from "@nextui-org/react"
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import {Outlet} from "react-router-dom"
import {Routes,Route} from "react-router-dom"

export function AllBars() {
  return <div></div>;
}

function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-row bg-background overflow-hidden">
        <Sidebar />
      <div className="w-full h-full">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
}

function DashboardRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Button />} /> */}
      {/* Add more child routes as needed */}
    </Routes>
  );
}

export default Dashboard;
