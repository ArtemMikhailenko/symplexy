"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import CTAButton from "./ui/CTAButton";
import ChatIcon from "./ui/ChatIcon";
import StarsIcon from "./ui/StarsIcon";

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  
  const steps = [
    {
      id: 1,
      titleKey: "step1.title",
      descriptionKey: "step1.description",
      hasButton: true,
    },
    {
      id: 2,
      titleKey: "step2.title",
      descriptionKey: "step2.description",
      hasButton: false,
    },
    {
      id: 3,
      titleKey: "step3.title",
      descriptionKey: "step3.description",
      hasButton: false,
    },
    {
      id: 4,
      titleKey: "step4.title",
      descriptionKey: "step4.description",
      hasButton: false,
    },
  ];
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden pb-10 lg:pb-10"
      style={{
        background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 24.57%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Desktop Decorative Flower/Crystal Image */}
      <div className="hidden lg:block absolute left-5 top-[192px] w-[1316px] h-[1093px] pb-10">
        <Image
          src="/images/crystal-flower.webp"
          alt="Decorative crystal flower"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[342px] pt-16 md:pt-20 lg:pt-24">
        {/* Top Headline */}
        <div className="text-center mb-12 md:mb-16 lg:mb-[100px]">
          <h2 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#263e6e] mb-4 md:mb-5 lg:mb-6">
            {t('title')}
          </h2>
          <p className="text-[18px] leading-[28px] font-normal text-[#3c3f54] max-w-[343px] md:max-w-full mx-auto">
            Підвищуйте ефективність свого бізнесу за 4 простих кроки
          </p>
        </div>
      </div>

      {/* Mobile/Tablet Decorative Flower - under headline, full screen width */}
      <div className="lg:hidden relative w-screen h-[515px] md:h-[600px] -mb-16 md:-mb-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-0">
          <Image
            src="/images/crystal-flower-mob.webp"
            alt="Decorative crystal flower"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        {/* Gradient overlay for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent via-30% to-white/80 pointer-events-none" />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[342px]">
        {/* Steps Container */}
        <div className="flex items-start gap-8 lg:gap-12 lg:justify-end">
          {/* Timeline Connector - Mobile/Tablet */}
          <div className="lg:hidden relative flex flex-col items-center pt-2 ml-6 md:ml-0">
            {/* Vertical Line */}
            <div className="w-1 h-[560px] md:h-[600px] bg-gradient-to-b from-[#5289ff] via-[#5289ff] to-[#5289ff]" />
            
            {/* Step Dots */}
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="absolute w-3 h-3 bg-[#5289ff] rounded-full"
                style={{
                  top: `${index * 140}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>

          {/* Timeline Connector - Desktop */}
          <div className="hidden lg:flex relative flex-col items-center pt-2">
            {/* Vertical Line */}
            <div className="w-1 h-[654px] bg-gradient-to-b from-[#5289ff] via-[#5289ff] to-[#5289ff]" />
            
            {/* Step Dots */}
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="absolute w-3 h-3 bg-[#5289ff] rounded-full"
                style={{
                  top: `${index * 172}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>

          {/* Steps Content */}
          <div className="flex flex-col gap-12 lg:gap-16 pt-0 flex-1 lg:flex-initial">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col gap-4 lg:gap-6"
                style={{
                  minHeight: step.hasButton ? "196px" : index === 1 || index === 3 ? "108px" : "84px",
                }}
              >
                {/* Text Content */}
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h3 className="text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] font-semibold text-[#1c1d27] max-w-full md:max-w-[400px] lg:w-[463px]">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-[16px] leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px] font-normal text-[#3c3f54] max-w-full md:max-w-[400px] lg:w-[463px]">
                    {t(step.descriptionKey)}
                  </p>
                </div>

                {/* Button for first step */}
                {step.hasButton && (
                  <button className="w-full max-w-[242px] md:max-w-[279px] lg:w-[279px] h-12 md:h-14 lg:h-14 px-5 md:px-6 lg:px-6 py-3 md:py-4 lg:py-4 rounded-[100px] border border-[#2d4b8c] bg-transparent hover:bg-[#eef3ff] active:bg-[#dae2eb] transition-colors duration-200 flex items-center justify-center gap-2">
                    <ChatIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                    <span className="text-[16px] leading-[24px] md:text-[18px] md:leading-[24px] lg:text-[18px] lg:leading-[24px] font-normal text-[#223a6b]">
                      {t('askAssistant')}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button - Desktop only */}
        <div className="hidden lg:flex justify-center mt-20">
          <button className="w-[277px] h-14 px-6 py-4 bg-[#5289ff] text-white rounded-[100px] hover:bg-[#4178ee] active:bg-[#3067dd] transition-colors duration-200 flex items-center justify-center gap-2">
            <StarsIcon className="w-6 h-6" />
            <span className="text-[18px] leading-[24px] font-normal">
              Підібрати інструменти
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
