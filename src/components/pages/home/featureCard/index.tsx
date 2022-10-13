import React from "react";
import { Button } from "../../../utility";
import { FeatureCardProps } from "./interface";

const FeatureCard = ({ icon, content }: FeatureCardProps) => {
  return (
    <div className="border-2 border-black rounded-lg py-10 px-5 shadow-4xl relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full border-2 border-black">
        {icon}
        {/* <Button icon={icon} /> */}
        {/* <MdQrCodeScanner className="bg-white" size={24} /> */}
      </div>
      <p className="font-medium text-center">{content}</p>
    </div>
  );
};

export default FeatureCard;
