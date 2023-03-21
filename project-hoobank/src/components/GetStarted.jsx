import React from 'react'
import { arrowUp } from '../assets'

function GetStarted() {
  return (
    <div className="bg-secondary fit-content p-[2px] rounded-full w-[140px] h-[140px] cursor-pointer">
      <div className="bg-primary rounded-full w-[100%] h-[100%] flex items-center justify-center">
        <div className="text-gradient font-medium leading-[130%]">
               <p className="flex">Get <img src={arrowUp} /></p>
               Started
        </div>
    
   
    </div>
      </div>
     
  )
}

export default GetStarted