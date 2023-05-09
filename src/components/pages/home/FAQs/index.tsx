import React from "react";
import faqData from "../../../../data/faqData";
import FaqDisclosure from "./faqDisclosure";
const FAQs = () => {
  return (
    <div className="flex flex-col gap-8 w-3/4 mx-auto">
      <h2 className="text-center text-2xl md:text-5xl font-semibold">FAQs</h2>
      {faqData.map((faq, index) => {
        return <FaqDisclosure key={index} {...faq} />;
      })}
    </div>
  );
};

export default FAQs;
