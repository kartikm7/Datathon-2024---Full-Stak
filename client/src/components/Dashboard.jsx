import {React} from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardNavbar from "./Dashboard/DashboardNavbar";

export function AllBars() {
  return (
    <div className="w-full h-full flex flex-row bg-background">
      <Sidebar />
      <div className="w-full h-full">
        <DashboardNavbar />
      </div>
    </div>
  );
}



function Dashboard() {
  return (
    <div>
        <AllBars />
    </div>
  );
}

export default Dashboard;
