import React from "react";
import faqData from "../../../../data/faqData";
import FaqDisclosure from "./faqDisclosure";
import Section from "../../../app/Section";
const FAQs = () => {
  return (
    <Section className="justify-center items-center gap-10 w-full py-20">
      <h2 className="font-krona text-3xl-krona lg:text-4xl-krona">FAQs</h2>
      <div className="flex flex-col w-full gap-6">
        {faqData.map((faq, index) => (
          <FaqDisclosure
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Section>
    // <div className="flex flex-col gap-8 w-3/4 mx-auto">
    //   <h2 className="font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona">
    //     FAQs
    //   </h2>
    //   {faqData.map((faq, index) => {
    //     return <FaqDisclosure key={index} {...faq} />;
    //   })}
    // </div>
  );
};

export default FAQs;
