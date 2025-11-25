"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-16 md:py-20 lg:py-[100px] overflow-hidden"
    >
      {/* Background Blur Effect */}
      <div className="absolute left-[1127px] top-[724px] w-[400px] h-[400px] rounded-full bg-[#ba9dff] blur-[600px] opacity-100 pointer-events-none hidden lg:block" />

      {/* Background Cloud */}
      <div className="absolute right-0 top-[788px] w-[1027px] h-[671px] pointer-events-none hidden lg:block">
        <Image
          src="/images/Cloud-about.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Crystal Flower Background - hidden on mobile/tablet */}
      <div className="absolute right-[160px] top-[348px] w-[760px] h-[760px] pointer-events-none hidden lg:block">
        <Image
          src="/images/flover-about.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1236px] px-4 md:px-6 lg:px-0">
        {/* Header - Left aligned on mobile, centered on desktop */}
        <div className="flex flex-col items-start lg:items-center gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-[152px]">
          <h2 className="text-[#223a6b] text-[40px] md:text-[48px] lg:text-[56px] leading-[48px] md:leading-[56px] lg:leading-[64px] font-bold text-left lg:text-center max-w-[343px] md:max-w-[606px]">
            Трохи про нас
          </h2>
          <p className="text-[#1c1d27] text-[18px] leading-[28px] font-normal text-left lg:text-center max-w-[343px] md:max-w-[606px]">
            <span className="font-semibold text-[#5289ff]">Symplexy</span> —
            сервіс, що підбирає{" "}
            <span className="font-semibold text-[#5289ff]">
              ШІ-інструменти для бізнесу
            </span>
            .
            <br className="hidden md:inline" />
            <span className="md:hidden"> </span>
            Ми допомагаємо підприємцям швидко знаходити рішення для
            автоматизації, оптимізації та розвитку.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-[343px] md:max-w-[605px]">
          {/* Mission Statement */}
          <h3 className="text-[#1c1d27] text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-semibold mb-6 md:mb-7 lg:mb-8">
            Наша місія — зробити інтеграцію штучного інтелекту в бізнес{" "}
            <span className="text-[#5289ff]">простішою</span>,{" "}
            <span className="text-[#5289ff]">зрозумілішою</span>
            <br className="hidden md:inline" />
            <span className="md:hidden"> </span>
            <span className="text-[#5289ff]">та кориснішою</span>
          </h3>

          {/* What We Do Section */}
          <div className="mb-8 flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              Що ми робимо
            </h4>
            <ul className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal space-y-0">
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>
                  Добираємо актуальні AI-інструменти під конкретні
                  бізнес-завдання
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>
                  Створюємо добірки для різних напрямів: маркетинг, дизайн,
                  аналітика, управління
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>
                  Ділимось порадами та новинами у сфері штучного інтелекту
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Symplexy Section */}
          <div className="mb-8 flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              Чому обирають Symplexy
            </h4>
            <ul className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal space-y-0">
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">1.</span>
                <span>Зручний каталог, що постійно оновлюється</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">2.</span>
                <span>Простий пошук і фільтри для швидкого вибору</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">3.</span>
                <span>
                  Довіра підприємців, які вже впроваджують AI-рішення у свою
                  роботу
                </span>
              </li>
            </ul>
          </div>

          {/* Our Focus Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              Наш фокус
            </h4>
            <p className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal">
              Ми віримо, що майбутнє бізнесу — за розумною автоматизацією.
              <br className="hidden md:inline" />
              <span className="md:hidden"> </span>
              Symplexy допомагає зробити перший крок до цього майбутнього вже
              сьогодні.
            </p>
          </div>
        </div>

        {/* Crystal Flower Image - mobile/tablet only, at bottom */}
        <div className="lg:hidden relative w-full max-w-[396px] h-[413px] mt-12 md:mt-16 -ml-[10px] md:ml-0">
          <Image
            src="/images/flover-about.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
