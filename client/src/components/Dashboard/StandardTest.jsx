import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
function Temp(){
    return( <>
        <div className="pageContainer" class="w-full h-screen flex flex-col justify-center items-center">
            <Card className="w-1/3 h-[70%]" >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        </div>
      </CardHeader>
      <div class="w-[70%] h-[70%]"></div>
      <Divider/>
      <CardFooter>
       <Input placeholder="Enter Answers here" size="lg"/>
      </CardFooter>
      <div class="absolute right-0 bottom-0 m-2">
      <Button size="lg" color="secondary">Submit for Checking</Button></div>
    </Card>
        </div>
        </>
    )
}

export default Temp