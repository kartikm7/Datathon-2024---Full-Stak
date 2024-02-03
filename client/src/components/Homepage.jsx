import React from 'react'
import resumePic from "../assets/resumePic.png"
import { Button } from '@nextui-org/react'
import { MoveRight } from 'lucide-react';
import Navbarr from './Navbarr';
import studentGraphic from "../assets/studentGraphic.png"
import { Upload } from 'lucide-react';
export default function Homepage() {
  return (
    <>
      <Navbarr/>
     <div className="homepageContainer w-full h-fit flex flex-row flex-wrap gap-10">
      <div class="flex flex-col relative mt-10 left-10 flex-1">
      <h1 class="text-6xl mb-5">Streamline hiring with <span class="text-purple-500">ease.</span></h1>
      
      <div>
       <Button size="lg" color="secondary" variant='flat' endContent={<MoveRight/>}>
        <p1 class="text-xl">Get Started</p1>
      </Button>
      <h1 class="text-2xl w-90 mt-10">At TalentTrail, we're revolutionizing the way students and employers 
      <br></br>connect by bridging the gap between skills and opportunities.</h1>
      <br></br>
      <h1 class="text-4xl mb-10">How it <span class="text-purple-500">Works</span></h1>
      </div>
      <h1 class="text-3xl text-purple-500">For Students:</h1>
      <h1 class="text-2xl mt-10">Unlock your potential with personalized career development! Upload your resume, and our cutting-edge system analyzes your skills to recommend tailor-made standardized tests and mock interviews. Level up your abilities, gain confidence, and stand out in the competitive job market</h1>
      </div>
       <img src={resumePic} alt="Resume" class="max-w-xl flex-1 "/>
     </div>
     <div class="flex flex-row mt-10">
      <img src={studentGraphic} alt="Graphic" class="size-[10%] ml-5"  />
      <div class="w-[70%] ml-5">
      <h1 class="text-3xl text-purple-500">For Employers:</h1>
      <h1 class="text-2xl mt-10">Discover the perfect match for your team effortlessly. Specify the skills you're looking for, and let our intelligent matching algorithm present you with a curated list of talented individuals. Say goodbye to endless resumes; find the right fit with precision and speed.</h1>
      
      </div>
     </div>
     </>
  )
}
