import React from 'react'
import resumePic from "../assets/resumePic.png"
import { Button } from '@nextui-org/react'
import { MoveRight } from 'lucide-react';
import { Gem } from 'lucide-react';
export default function Homepage() {
  return (
     <div className="homepageContainer w-full h-fit flex flex-row flex-wrap gap-10">
      <div class="flex flex-col relative mt-10 left-10">
      <h1 class="text-6xl mb-5">Streamline hiring with <span class="text-purple-500">ease.</span></h1>
      
      <div>
       <Button size="lg" color="secondary" variant='flat' endContent={<MoveRight/>}>
        <p1 class="text-xl">Get Started</p1>
      </Button>
      <h1 class="text-2xl w-90 mt-10">At TalentTrail, we're revolutionizing the way students and employers 
      <br></br>connect by bridging the gap between skills and opportunities.</h1>
      <br></br>
      <h1 class="text-4xl">How it <span class="text-purple-500">Works</span></h1>
      </div>
      </div>
       <img src={resumePic} alt="Resume" class="max-w-4xl flex-auto "/>
       <h1 class="text-2xl w-90 mt-10">Unlock your potential with personalized career development! Upload your resume, and our cutting-edge system analyzes your skills to recommend tailor-made standardized tests and mock interviews. Level up your abilities, gain confidence, and stand out in the competitive job market.</h1>
     </div>
     
  )
}
