import { React } from "react";
import SidebarCompany from "./Dashboard/SidebarCompany";
import {Button} from "@nextui-org/react"
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import {Outlet} from "react-router-dom"
import {Routes,Route} from "react-router-dom"

export function AllBars() {
  return <div></div>;
}

function DashboardCompany() {
  return (
    <div className="w-full h-screen flex flex-row bg-background overflow-hidden">
        <SidebarCompany />
      <div className="w-full h-full">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardCompany;
