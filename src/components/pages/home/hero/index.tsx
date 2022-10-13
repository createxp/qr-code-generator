import Link from "next/link";
import React from "react";
import { Button } from "../../../utility";

const Hero = () => {
  return (
    <>
      <div className="bg-black bg-[url('/images/Dots.png')] bg-no-repeat bg-cover p-20">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">
            Create QR codes fast and easy!
          </h2>
          <Link href="/app" passHref>
            <Button
              text="Get started, it's free! "
              variant="white"
              className="font-semibold md:text-lg"
            />
          </Link>
        </div>
      </div>
      <img
        src="./images/qr.png"
        alt="QR-image"
        className="w-full md:w-1/2 -mt-8 mx-auto rounded-lg border-2 shadow-3xl border-black"
      />
    </>
  );
};

export default Hero;
