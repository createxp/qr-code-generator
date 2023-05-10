import React from "react";
import { Button } from "../../../utility";
import Section from "../../../app/Section";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <Section
      className={[
        "gap-16 w-full lg:min-h-screen text-neutral-50 bg-dots bg-cover bg-center bg-no-repeat items-center lg:pt-40 py-20",
      ].join(" ")}
    >
      <h1 className="hidden">QR Code Generator by createxp</h1>
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona">
          Create, Customize, and Track Your QR Codes Easily{" "}
        </h2>
        <p className="text-lg text-center">
          From tracking to customization, our online tool has everything you
          need{" "}
        </p>
        <Button
          variant="white"
          text={"Get Started, it's free!"}
          onClick={() => router.push("/app")}
        />
      </div>
      <div className="lg:w-full md:w-[90%] w-full">
        <img src="/images/heroPage.png" className="rounded-lg" alt="QR img" />
      </div>
    </Section>
  );
};

export default Hero;
