import React from "react";
import { MdQrCodeScanner } from "react-icons/md";
import { features } from "../../../../data";
import FeatureCard from "../featureCard";
const Features = () => {
  return (
    <div className="flex flex-col my-16 max-w-xs mx-auto md:max-w-3xl md:mx-auto lg:max-w-5xl xl:max-w-7xl">
      <h2 className="text-center text-2xl md:text-5xl font-semibold">
        Your all in one QR solution
      </h2>
      <div className="flex flex-col md:flex-row gap-12 mt-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
