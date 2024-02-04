import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider,Link,Image,Input,Button} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Search } from "lucide-react";
function EmployerDashboard(){

    return(
    <>   <h1 class="text-4xl text-center p-5">Welcome,Employer</h1>
        <div className="pageContainer" class="w-full h-screen flex flex-col justify-center items-center">
            <Card className="w-1/3 h-[70%]" >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
            
        </div>
      </CardHeader>
      <div class="w-full h-full overflow-y-scroll">
         <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>ResuScore</TableColumn>
        <TableColumn>Gpa</TableColumn>
        <TableColumn>Skills</TableColumn>
        <TableColumn>GradDate</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>tony@hello.com</TableCell>
          <TableCell>7</TableCell>
          <TableCell>3.4</TableCell>
          <TableCell>React Js, FLASK, firebase, ollama</TableCell>
          <TableCell>2025</TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </div>
      <Divider/>
      <CardFooter class="p-3">
       <Input placeholder="Enter skill and gpa requirements" size="lg"/>
      </CardFooter>
      <div class="flex self-end p-3">
      <Button size="lg" color="secondary" variant="shadow" endContent={<Search/>}>Search</Button></div>
    </Card>
        </div>
        </>
);
}
export default EmployerDashboard
