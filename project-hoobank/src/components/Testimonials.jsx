import React from "react";
import { quotes } from "../assets";
import { feedback } from "../constants";
import styles from "../style";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="sm:flex items-center justify-between pb-10">
        <div className="flex-[50%]">
          <h2 className={`${styles.h2} mb-5 sm:mb-0`}>
            What people are<br className="sm:block hidden"></br> saying about us
          </h2>
        </div>
        <div className="flex-[50%]">
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      {/* tests */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-10 ">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className="flex-1 p-10 flex flex-col gap-8 hover:card-gradient hover:rounded-[20px]">
            <div>
              <img src={quotes} />
            </div>
            <div>
              <p className={`${styles.paragraph} text-white`}>{feed.content}</p>
            </div>
            <div className="flex items-center gap-5 ">
              <div>
                <img src={feed.img} className="w-[48px] h-[48px] abject-fit" />
              </div>
              <div>
                <p className="text-xl text-white font-normal leading-[32px]">
                  {feed.name}
                </p>
                <p className="text-base opacity-50">{feed.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
