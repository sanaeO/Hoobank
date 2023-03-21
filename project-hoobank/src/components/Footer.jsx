import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section id="footer" className="">
      <div className="md:flex items-center justify-between gap-10">
        <div className="flex-[1] mb-5 md:mb-0">
          <img src={logo} className="mb-5" />
          <p className={`${styles.paragraph}`}>
            A new way to make the payments <br className="sm:block hidden"></br>
            easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[2] grid sm:grid-cols-3 sm:gap-6 grid-cols-2">
          {footerLinks.map((footLink) => (
            <div className="flex flex-col gap-7">
              <h3 className="text-white leading-[160%] font-medium">
                {footLink.title}
              </h3>
              <ul className="flex flex-col gap-3 mb-7 md:mb-0">
                {footLink.links.map((flink) => (
                  <li key={flink.id}>
                    <a href={flink.link} className="text-base">
                      {flink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright  */}
      <hr className="my-6 border-hr sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:justify-between justify-center items-center">
        <div className="mb-4 sm:mb-0 text-center">
          <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        </div>

        <div className="flex gap-5 justify-center">
          {socialMedia.map((smedia) => (
            <div className="">
              <a href={smedia.link}>
                <img src={smedia.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
