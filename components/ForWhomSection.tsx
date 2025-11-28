"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function ForWhomSection() {
  const t = useTranslations('forWhom');

  const cards = [
    {
      iconPath: "/images/icons/Icon/24/Rocket.svg",
      titleKey: "startup.title",
      descriptionKey: "startup.description"
    },
    {
      iconPath: "/images/icons/Icon/24/Business.svg",
      titleKey: "entrepreneur.title",
      descriptionKey: "entrepreneur.description"
    },
    {
      iconPath: "/images/icons/Icon/24/User.svg",
      titleKey: "freelancer.title",
      descriptionKey: "freelancer.description"
    },
    {
      iconPath: "/images/icons/Icon/24/Team.svg",
      titleKey: "team.title",
      descriptionKey: "team.description"
    }
  ];

  return (
    <section 
      id="for-whom"
      className="relative w-full py-16 md:py-20 lg:py-[84px] max-w-[1280px] mx-auto px-4 overflow-hidden" 
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-[292px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#5289ff] blur-[500px] opacity-60 pointer-events-none z-0 " />

      {/* Decorative Center Image - Desktop only */}
      <div className="absolute top-0 left-0 w-[2400px] h-[1300px] pointer-events-none z-0 hidden md:block">
        <Image
          src="/images/111.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1280px] mx-auto px-0 md:px-4 lg:px-6">
        {/* Title */}
        <h2 className="text-center text-[40px] leading-[48px] md:text-5xl md:leading-[60px] lg:text-[56px] lg:leading-[64px] font-bold text-[#1c1d27] mb-8 md:mb-10 lg:mb-12 px-4 md:px-0">
          {t('title.part1')} <span className="text-[#5289ff]">{t('title.highlight')}</span> {t('title.part2')}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 px-4 md:px-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6
                border border-[#c9daff]
                shadow-[0_1px_4px_rgba(4,14,34,0.05)]
                hover:shadow-[0_4px_12px_rgba(82,137,255,0.15)]
                transition-all duration-300
                flex flex-col gap-4 md:gap-5 lg:gap-6
              "
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#e8f0fc] flex items-center justify-center">
                  <Image
                    src={card.iconPath}
                    alt={t(card.titleKey)}
                    width={28}
                    height={28}
                    className="w-8 h-8"
                  />
                </div>
                
                {/* Title - Mobile */}
                <h3 className="text-2xl leading-8 font-semibold text-[#1c1d27] md:hidden">
                  {t(card.titleKey)}
                </h3>
              </div>

              {/* Title - Tablet/Desktop (moved below icon) */}
              <h3 className="hidden md:block text-2xl leading-8 font-medium text-[#1c1d27] -mt-3 lg:-mt-4">
                {t(card.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-base leading-6 text-[#3c3f54]">
                {t(card.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
