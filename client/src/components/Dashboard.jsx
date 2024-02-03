import {React} from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardNavbar from "./Dashboard/DashboardNavbar";

export function allBars() {
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
        <allBars />
    </div>
  );
}

export default Dashboard;
