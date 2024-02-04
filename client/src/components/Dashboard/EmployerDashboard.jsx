import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Search } from "lucide-react";
import { getFirestore, collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from "../../controller/firebaseConfig";

// ... other imports

function EmployerDashboard() {
    const [resuscoreInput, setResuscoreInput] = useState("");
    const [candidates, setCandidates] = useState([]);
  
    const handleSearch = async () => {
      const db = getFirestore();
  
      // Create a query to fetch candidates based on resuscore
      const q = query(
        collection(db, 'users'),
        orderBy('resuscore', 'desc'), // Order by resuscore in descending order
        where('resuscore', '>=', resuscoreInput),
      );
  
      try {
        const querySnapshot = await getDocs(q);
  
        // Extract candidate data from the querySnapshot
        const candidateData = querySnapshot.docs.map(doc => doc.data());
        setCandidates(candidateData);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
  
    return (
      <>
        <h1 className="text-4xl text-center p-5">Welcome, Employer</h1>
        <div className="flex flex-col justify-center items-center">
          <Card className="w-3/4 h-[90%]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col"></div>
            </CardHeader>
            <div className="w-full h-full overflow-y-scroll">
              <Table aria-label="Example static collection table" className="h-80 overflow-y-scroll">
                <TableHeader>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Email</TableColumn>
                  <TableColumn>ResuScore</TableColumn>
                  <TableColumn>Gpa</TableColumn>
                  <TableColumn>Skills</TableColumn>
                  <TableColumn>GradDate</TableColumn>
                </TableHeader>
                <TableBody>
                  {candidates.map(candidate => (
                    <TableRow key={candidate.uid}>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.resuscore}</TableCell>
                      <TableCell>{candidate.gpa}</TableCell>
                      <TableCell>{candidate.skill}</TableCell>
                      <TableCell>{candidate.gradYear}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Divider />
            <CardFooter className="p-3">
              <Input
                placeholder="Enter ResuScore requirement"
                size="lg"
                value={resuscoreInput}
                onChange={(e) => setResuscoreInput(e.target.value)}
              />
            </CardFooter>
            <div className="flex self-end p-3">
              <Button
                size="lg"
                color="secondary"
                variant="shadow"
                endContent={<Search />}
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </Card>
        </div>
      </>
    );
  }
  
  export default EmployerDashboard;
  