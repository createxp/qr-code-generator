import Link from "next/link";
import React from "react";
import { Button } from "../../../utility";

const Footer = () => {
  return (
    <div className="bg-black rounded-lg overflow-hidden flex flex-col items-center justify-between gap-8 py-14 mx-auto max-w-lg md:max-w-3xl md:mx-auto lg:max-w-5xl xl:max-w-7xl relative">
      <h2 className="text-center text-2xl md:text-5xl font-semibold text-white">
        Create your first QR code now
      </h2>
      <Link href="/app" passHref>
        <Button
          text="Get started, it's free! "
          variant="white"
          className="font-semibold md:text-lg"
        />
      </Link>
      <img
        src="/images/createxpQR.png"
        alt=""
        className="absolute md:-bottom-1/4 md:right-0 -bottom-1/2 -right-10"
      />
    </div>
  );
};

export default Footer;
