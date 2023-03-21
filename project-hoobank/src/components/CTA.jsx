import React from "react";
import styles from "../style";
import Button from "./Button";

function CTA() {
  return (
    <section
      id="cta"
      className="sm:flex  gap-20 items-center card-gradient p-20 rounded-[20px]">
      <div className="flex-1 mb-10 sm:mb-0">
        <h2 className={`${styles.h2} mb-5`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex-1 flex justify-center ">
        <Button />
      </div>
    </section>
  );
}

export default CTA;
