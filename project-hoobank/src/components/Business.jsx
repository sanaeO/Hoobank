import React from "react";
import styles from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="flex gap-5 mb-5 p-4  card-business-hover cursor-pointer transition ease-in-out duration-500">
      <div className="bg-dimBlue w-[60px] h-[60px] flex justify-center items-center rounded-full">
        <img src={icon} />
      </div>
      <div className="flex-[70%]">
        <p className="text-white font-semibold">{title}</p>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

function Business() {
  return (
    <section
      id="business"
      className="sm:flex items-center justify-between gap-10">
      <div className="flex-[50%] flex flex-col gap-10 mb-10 sm:mb-0">
        <h2 className={`${styles.h2}`}>
          You do the business,<br className="sm:block hidden"></br> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} md:w-[75%]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className="flex-[50%]">
        {features.map((feat, index) => (
          <FeatureCard key={feat.id} {...feat} />
        ))}
      </div>
    </section>
  );
}

export default Business;
