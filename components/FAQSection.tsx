"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey?: string;
}

const faqItems: FAQItem[] = [
  { id: 1, questionKey: "assistant", answerKey: "assistantAnswer" },
  { id: 2, questionKey: "catalog", answerKey: "catalogAnswer" },
  { id: 3, questionKey: "technical", answerKey: "technicalAnswer" },
  { id: 4, questionKey: "cost", answerKey: "costAnswer" },
  { id: 5, questionKey: "help", answerKey: "helpAnswer" },
  { id: 6, questionKey: "choose", answerKey: "chooseAnswer" },
  { id: 7, questionKey: "safe", answerKey: "safeAnswer" },
  { id: 8, questionKey: "add", answerKey: "addAnswer" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default
  const t = useTranslations('faq');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-60 md:opacity-80 lg:opacity-100">
        <Image
          src="/images/faq-bg.webp"
          alt="FAQ background decoration"
          fill
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[342px] py-16 md:py-20 lg:py-24">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[48px] md:leading-[56px] lg:leading-[64px] font-bold text-[#263e6e] text-center mb-8 md:mb-12 lg:mb-16">
          {t('title')}
        </h2>

        {/* FAQ Items */}
        <div className="w-full max-w-[343px] md:max-w-[744px] lg:max-w-[1026px] mx-auto flex flex-col">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`w-full transition-all duration-300 ${
                openIndex === index
                  ? "border-b-2 border-[#4b7de8]"
                  : "border-b border-[#c4c5cc]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 flex items-start justify-between gap-6 text-left"
              >
                {/* Question and Answer */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3
                    className={`text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-[32px] font-semibold transition-colors duration-200 ${
                      openIndex === index ? "text-[#4b7de8]" : "text-[#1c1d27]"
                    }`}
                  >
                    {t(`items.${item.questionKey}.question`)}
                  </h3>
                  
                  {/* Answer - only show if open and answer exists */}
                  {openIndex === index && item.answerKey && (
                    <p className="text-[18px] md:text-[19px] lg:text-[20px] leading-[28px] md:leading-[30px] lg:leading-[32px] font-normal text-[#2f3141] animate-fadeIn mt-2">
                      {t(`items.${item.questionKey}.answer`)}
                    </p>
                  )}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M10 15L20 25L30 15"
                      stroke={openIndex === index ? "#4b7de8" : "#1c1d27"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
