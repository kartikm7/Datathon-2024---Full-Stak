// TransparentCard.jsx
import React from 'react';
import {Card, CardBody, Button} from "@nextui-org/react";
export default function App() {
  
  return (
    <Card style={{
      borderWidth: '0.2px',
      width: '400px',
      height: '450px', // Increased height to accommodate the vertical spacing
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      boxSizing: 'border-box',
      background: 'linear-gradient(to bottom, rgba(74, 28, 122, 0.2), rgba(128, 0, 128, 0.6))', // Purple gradient background
    }}>
      <CardBody>
        <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '80px' }}>Please Select to Continue</h1>
        <Button style={{ marginBottom: '20px', backgroundColor:' #9f7aea;', color: 'black' , borderRadius: '18', fontSize:'17px', height:'50px'}} onClick={() => console.log("Student clicked")}>Student</Button>
        <Button style={{  backgroundColor: ' #9f7aea;', color: 'black' , borderRadius: '20', fontSize:'17px', height:'50px'}} onClick={() => console.log("Organization clicked")}>Organization</Button>
      </CardBody>
    </Card>
  );
};


  






