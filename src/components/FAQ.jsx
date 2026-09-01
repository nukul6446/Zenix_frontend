import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqData = [
  {
    question: "What is Zenix (ZNX)?",
    answer:
      "Zenix (ZNX) is a digital utility token designed to support the Zenix ecosystem, including transactions, services, applications, and future integrations.",
  },
  {
    question: "Which network is ZNX built on?",
    answer:
      "ZNX is built on the BNB Smart Chain using the BEP-20 token standard.",
  },
  {
    question: "What is the total supply?",
    answer:
      "The total supply of ZNX is 1,330,000 tokens.",
  },
  {
    question: "Where can I purchase ZNX?",
    answer:
      "ZNX purchasing information and supported platforms will be announced through the official Zenix ecosystem.",
  },
  {
    question: "Is the liquidity locked?",
    answer:
      "Yes. The tokenomics structure indicates that liquidity is locked at launch.",
  },
  {
    question: "Are there minting capabilities?",
    answer:
      "The Zenix token structure is designed according to its smart contract and tokenomics specifications. Additional details can be found in the official documentation.",
  },
  {
    question: "What will the initial listing price be?",
    answer:
      "The planned initial listing price is $0.50 USD.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#07040d] px-5 py-20 text-white sm:px-8 md:py-24"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[100px] h-[400px] w-[400px] rounded-full bg-fuchsia-700/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[820px]">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-[48px] font-bold tracking-tight text-gray-100 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "border-fuchsia-500/40 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.035] hover:border-white/20"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-[24px] font-SemiBold text-gray-200 sm:text-base">
                    {item.question}
                  </span>

                  <FaChevronDown
                    className={`shrink-0 text-xs text-gray-300 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-fuchsia-400" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/5 px-5 py-5 text-sm leading-6 text-gray-400 sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;