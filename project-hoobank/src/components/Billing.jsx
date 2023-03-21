import React from "react";
import { apple, bill, google } from "../assets";
import styles from "../style";

function Billing() {
  return (
    <section
      id="billing"
      className="sm:flex gap-10 justify-between items-center">
      <div className="flex-[50%] relative ">
        <img src={bill} className="z-3" />
        <div className="absolute z-0 w-[50%] h-[50%] img-gradient-1 top-0 -left-1/2 rounded-full" />
        <div className="absolute z-1 w-[50%] h-[50%] img-gradient-2  bottom-0 -left-1/2 rounded-full" />
      </div>

      <div className="flex-[50%] flex flex-col gap-10">
        <h2 className={`${styles.h2}`}>
          Easily control your<br className="sm:block hidden"></br> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} `}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-5">
          <img src={apple} className="object-contain cursor-pointer" />
          <img src={google} className="object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
