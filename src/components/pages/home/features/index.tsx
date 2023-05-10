import React from "react";
import Section from "../../../app/Section";
import { features } from "../../../../data";

const Features = () => {
  return (
    <Section className="justify-center items-center lg:gap-20 md:gap-16 gap-8 py-10">
      <h2 className="font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona">
        Features you'll Love
      </h2>
      <div className="flex flex-col lg:gap-20 md:gap-16 gap-12 justify-center items-center w-full">
        {features.map((feature, index) => (
          <div
            className={[
              "flex gap-4 md:gap-8 justify-center items-center w-full flex-col md:flex-row",
              index % 2 !== 0 ? "md:flex-row-reverse" : "flex-row",
            ].join(" ")}
            key={index}
          >
            <div className="w-full relative">
              <img src={feature.img} alt={feature.title} width={"100%"} />
              {/* {feature.pill && <Pill label={feature.pill} color='success' className="absolute -top-4 left-1/2 -translate-x-1/2" />} */}
            </div>
            <div className="flex flex-col justify-center gap-3 w-full">
              <h3 className="font-krona text-xl">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
