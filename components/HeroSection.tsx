"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleToolsClick = () => {
    const target = document.querySelector("#ai-tools");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[958px] md:min-h-[800px] lg:min-h-[914px] bg-white overflow-hidden"
    >
      {/* Background Clouds - Mobile */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        {/* Cloud 2 - Top Mobile */}
        <div className="absolute -left-[19px] top-0 w-[375px] h-[265px] opacity-50">
          <Image
            src="/images/hero-cloude.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Cloud - Bottom Mobile */}
        <div className="absolute left-[117px] top-[643px] w-[303px] h-[198px] opacity-50">
          <Image
            src="/images/hero-cloude.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Background Bubbles - Desktop & Tablet */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 bottom-0 w-full md:w-[900px] lg:w-[1110px] h-[550px] md:h-[700px] lg:h-[833px] pointer-events-none">
        <Image
          src="/images/hero.png"
          alt="AI Assistant"
          fill
          className="object-contain object-bottom md:object-right"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="pt-[144px] md:pt-48 lg:pt-[236px] max-w-full md:max-w-[603px]">
          {/* Headline */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-[44px] leading-[52px] md:text-5xl md:leading-[60px] lg:text-[72px] lg:leading-[84px] font-bold text-[#1c1d27] mb-4 md:mb-6">
              Сервіс підбору{" "}
              <span className="text-[#5289ff]">ШІ-рішень</span> для вашого бізнесу
            </h1>
            <p className="text-[18px] leading-[28px] md:text-lg md:leading-7 text-[#1c1d27]">
              Знаходьте, порівнюйте та застосовуйте найкращі нейромережі для зростання Вашого бізнесу
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <button
              onClick={handleToolsClick}
              className="
                w-full md:w-auto
                px-6 py-4 rounded-[100px] text-[18px] leading-[24px] font-normal
                bg-[#5289ff] text-white
                hover:bg-[#4278ef] active:bg-[#3267de]
                transition-all duration-200 ease-in-out
                shadow-sm hover:shadow-md
              "
            >
              Підібрати інструменти
            </button>
            <button
              className="
                w-full md:w-auto
                px-6 py-4 rounded-[100px] text-[18px] leading-[24px] font-normal
                bg-transparent border border-[#2d4b8c] text-[#223a6b]
                hover:bg-[#223a6b] hover:text-white
                active:bg-[#1a2d52]
                transition-all duration-200 ease-in-out
              "
            >
              Cпитати ШІ-асистента
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
