import React from "react";
import { Button } from "../../../utility";

const Footer = () => {
  return (
    <div className="bg-black rounded-lg overflow-hidden flex flex-col items-center justify-between gap-8 py-14 relative">
      <h2 className="text-center text-2xl md:text-5xl font-semibold text-white">
        Create your first QR code now
      </h2>
      <Button
        text="Get started, it's free! "
        variant="white"
        className="font-semibold md:text-lg"
      />
      <img
        src="/images/createxpQR.png"
        alt=""
        className="absolute -bottom-1/4 right-0"
      />
    </div>
  );
};

export default Footer;
