import React from "react";
import { card } from "../assets";
import styles from "../style";
import Button from "./Button";
// import {styles} from '../style'

function CardDeal() {
  return (
    <section
      id="cardDeal"
      className="sm:flex items-center justify-between gap-10">
      <div className="flex-[50%] flex flex-col gap-10">
        <h2 className={`${styles.h2}`}>
          Find a better card deal <br className="sm:block hidden"></br>
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} md:w-[75%]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex-[50%]">
        <img src={card} className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
