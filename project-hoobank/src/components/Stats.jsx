import React from "react";
import { stats } from "../constants";

function Stats() {
  return (
    <section
      id="stats"
      className="ss:flex-column flex flex-wrap items-center justify-between">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex items-center gap-5"
          // ${index === stats.length-1 ? '': 'border-solid border-gray border-r'}
        >
          <div className="font-semibold text-[40px] text-white">
            {stat.value}
          </div>
          <div className="uppercase text-gradient text-xl">{stat.title}</div>
        </div>
      ))}
    </section>
  );
}

export default Stats;
