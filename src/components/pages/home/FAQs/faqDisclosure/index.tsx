import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface faqDisclosureProps {
  question: string,
  answer: string,
}

const FaqDisclosure = ({ question, answer }: faqDisclosureProps) => {
  return (
    <div className="shadow-3xl py-2 rounded-lg border-2 border-black ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="px-4 py-2 md:py-4 md:px-8 text-left flex justify-between items-center w-full">
              {question}
              <FiChevronDown
                className={
                  open
                    ? "rotate-180 transform duration-75"
                    : "transform duration-75 ease-out"
                }
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform -translate-y-4"
              enterTo="transform translate-y-0"
              leave="transition duration-100 ease-out"
              leaveFrom="transform translate-y-0"
              leaveTo="transform -translate-y-4 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 px-4 py-2 md:py-4 md:px-8">
                {answer}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FaqDisclosure;
