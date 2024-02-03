import { Button, Card, CardHeader, Divider, Link } from "@nextui-org/react";
import { Languages, LayoutDashboard, Newspaper, ScanSearch, Sparkles, Twitter } from "lucide-react";
import React from "react";



function Sidebar() {
  return (
  
    <div className="flex flex-col w-1/5 h-full  overflow-scroll ">
      <div className="p-5 text-left">
        <h1 className="font-semibold text-3xl text-secondary" >Dashboard</h1>
        <p className="font-light text-sm">Students</p>
      </div>
      <Divider />
      <div className="p-5">
        <Link href="/dashboard"><Button className="text-md" color="secondary" variant="ghost" startContent={<LayoutDashboard/>}>Home</Button></Link>
      </div>
      <Divider />
      <div className="p-5">
        <p></p>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Sparkles/>}>Standardized Test</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Newspaper/>}>Resume Profile Matcher</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Languages/>}>Mock Test</Button>
        <Link href="/dashboard"><Button className="text-sm mb-5" color="default" variant="flat" startContent={<ScanSearch/>}>Job Inbox</Button></Link>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Twitter  />}>Contact Us</Button>
      </div>
      <Divider className="mt-20"/>
      <p className="absolute bottom-0 font-light text-sm p-5 pb-10 text-left">Powered by Talent Trail</p>
    </div>
  );
}

export default Sidebar;
