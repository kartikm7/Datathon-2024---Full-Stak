import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
function Temp(){
    return( <>
        
        <div className="pageContainer" class="w-full h-screen flex flex-col justify-center items-center">
            <Card className="w-1/3 h-[70%]" >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        </div>
      </CardHeader>
      <Divider/>
      <div class="w-[70%] h-[70%]"></div>
      <Divider/>
      <CardFooter>
       <Input placeholder="Enter Answers here" size="lg"/>
      </CardFooter>
    </Card>
        </div>
        </>
    )
}

export default Temp
