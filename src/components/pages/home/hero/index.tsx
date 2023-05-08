import Link from "next/link";
import React from "react";
import { Button } from "../../../utility";
import Section from "../../../app/Section";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  // return (
  //   <>
  //     <div className="bg-black bg-[url('/images/Dots.png')] bg-no-repeat bg-cover p-20">
  //       <div className="flex flex-col items-center gap-8">
  //         <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">
  //           Create QR codes fast and easy!
  //         </h2>
  //         <Link href="/app" passHref>
  //           <Button
  //             text="Get started, it's free! "
  //             variant="white"
  //             className="font-semibold md:text-lg"
  //           />
  //         </Link>
  //       </div>
  //     </div>
  //     <img
  //       src="./images/qr.png"
  //       alt="QR-image"
  //       className="w-full md:w-1/2 -mt-8 mx-auto rounded-lg border-2 shadow-3xl border-black"
  //     />
  //   </>
  return (
    <Section
      className={[
        "gap-16 w-full lg:min-h-screen text-neutral-50 bg-dots bg-cover bg-center bg-no-repeat items-center lg:pt-40 py-20",
      ].join(" ")}
    >
      <h1 className="hidden">QR Code Generator by createxp</h1>
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona">
          Create QR codes fast and easy!
        </h2>
        <p className="text-lg text-center">
          Simplify the process of creating QR codes for your business.
        </p>
        <Button
          variant="white"
          text={"Get Started, it's free!"}
          onClick={() => router.push("/app")}
        />
      </div>
      <div className="lg:w-full md:w-[90%] w-full">
        <img src="/images/qr.png" className="rounded-lg" alt="QR img" />
      </div>
    </Section>
  );
};

export default Hero;
