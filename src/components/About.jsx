import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="mt-4 text-lg text-slate-700 capitalize tracking-wide">
            I'm a front-end developer with 2 years of experience. I specialize
            in building responsive websites and web applications.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
