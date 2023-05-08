import React from "react";
import Navbar from "../Navbar";
import { Toaster } from "react-hot-toast";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={["lg:px-40 md:px-12 px-6 flex flex-col", className].join(" ")}
    >
      {children}
    </div>
  );
};

export default Section;
