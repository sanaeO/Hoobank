import React from 'react'
import { discount, robot } from '../assets'
import styles from '../style'
import GetStarted from './GetStarted'

function Hero() {
  return (
    <section className="sm:flex items-center">
{/* Text */}
    <div className="flex-1 flex flex-col gap-10">

        <div className="discount-gardient flex items-center w-fit rounded-[10px] px-3" id="hero">
            <img src={discount}/>
            <p className={`${styles.paragraph}`}>
            <span className="tetx-white">20%</span> { " "}
            DISCOUNT FOR {" "}
            <span className="tetx-white">1 MONTH</span>{ " "}
             ACCOUNT
            </p>
        </div>
         <div>
              <div className="flex">
            <h1 className="font-semibold  leading-[125%] md:leading-[140%] text-5xl md:text-7xl text-white">
            {/* <h1 className="font-semibold text-4xl md:text-7xl  text-white"> */}

            The Next <br></br>
            <span className="text-gradient">Generation</span>
            </h1>
            {/* Get Started */}
            <div className="sm:block hidden">
               <GetStarted/> 
            </div>
            
        </div> 
         <h2 className="font-semibold leading-[125%] md:leading-[140%] text-5xl md:text-7xl text-white ">Payement Method.</h2>
         </div>
     
       
        <p className="sm:max-w-[70%]">
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br></br>
We examine annual percentage rates, annual fees.
        </p>

    </div>
{/* img  */}
        <div className="flex-1 relative">
             <img src={robot} className="z-[5] w-[100%] h-[100%] relative"/>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 img-gradient-1" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full img-gradient-2 bottom-40" />
        <div className="absolute z-[0] w-[76%] h-[50%] right-20 bottom-20 img-gradient-3" />
        {/* gradient end */}
          </div>

          {/* Get started Mobile */}
          <div className="block sm:hidden m-auto w-fit">
            <GetStarted/>
          </div>
    </section>
  )
}

export default Hero