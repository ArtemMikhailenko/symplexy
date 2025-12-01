"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function NumbersSection() {
  const t = useTranslations('numbers');
  
  const stats = [
    {
      id: 1,
      percentage: "60%",
      description: t('stats.time'),
      color: "#5289ff",
    },
    {
      id: 2,
      percentage: "45%",
      description: t('stats.costs'),
      color: "#5289ff",
    },
    {
      id: 3,
      percentage: "26%",
      description: t('stats.conversion'),
      color: "#5289ff",
    },
  ];
  return (
    <section className="relative w-full min-h-screen md:min-h-[800px] lg:h-[896px] bg-[#1c1d27] overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Lines Pattern */}
      <div className="absolute inset-0 w-full h-full lg:h-[904px] lg:-top-2">
        <Image
          src="/images/purple-bg.webp"
          alt="Background pattern"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Blurred Purple Ellipse */}
      <div
        className="absolute -left-5 -top-52 w-[300px] h-[300px] md:-left-[200px] md:-top-[400px] md:w-[600px] md:h-[600px] lg:-left-[365px] lg:-top-[1024px] lg:w-[1169px] lg:h-[1169px] rounded-full"
        style={{
          background: "rgba(124, 87, 255, 1)",
          filter: "blur(400px)",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-[1276px] mx-auto px-4 md:px-6 lg:px-5">
        {/* Top Headline */}
        <div className="mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-white mb-4 md:mb-5 lg:mb-6 text-left md:text-center">
            {t('mainTitle')}{" "}
            <span className="text-[#5289ff]">{t('mainTitleHighlight')}</span>
          </h2>
          <p className="text-[18px] leading-[28px] font-normal text-white max-w-full md:max-w-[606px] md:mx-auto text-left md:text-center">
            {t('mainDescription')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-[1236px] mx-auto">
          {/* Section Title */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12">
            <h3 className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] font-bold text-white max-w-full lg:max-w-[711px] mb-6 lg:mb-0">
              {t('title')}{" "}
              <span className="text-[#5289ff]">{t('titleHighlight')}</span>
            </h3>
          </div>

          {/* Stats Cards Container */}
          <div
            className="relative w-full rounded-2xl lg:rounded-[24px] p-6 lg:p-6"
            style={{
              background: "rgba(2, 5, 28, 0.6)",
              border: "1px solid #686a7d",
              backdropFilter: "blur(6px)",
            }}
          >
            {/* Mobile & Tablet: Vertical Stack */}
            <div className="flex flex-col lg:hidden gap-6">
              {stats.map((stat, index) => (
                <div key={stat.id}>
                  {/* Stat Card */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[72px] leading-[84px] font-bold text-white">
                      {stat.percentage}
                    </h4>
                    <p className="text-[16px] leading-[24px] font-normal text-white">
                      {stat.description.split(" ").map((word, i) => {
                        // Highlight specific keywords with color
                        const keywords = ["Економія", "Збільшення"];
                        const isKeyword = keywords.some(kw => word.startsWith(kw));
                        return isKeyword ? (
                          <span key={i} className="text-[#5289ff]">{word} </span>
                        ) : (
                          <span key={i}>{word} </span>
                        );
                      })}
                    </p>
                  </div>

                  {/* Divider */}
                  {index < stats.length - 1 && (
                    <div className="w-full h-[1px] bg-[#42455c] mt-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {stats.map((stat, index) => (
                <div key={stat.id} className="flex items-center">
                  {/* Stat Card */}
                  <div className="w-[360px] h-[224px] rounded-[24px] p-6 flex flex-col gap-2">
                    <h4 className="text-[72px] leading-[84px] font-bold text-white">
                      {stat.percentage}
                    </h4>
                    <p className="text-[18px] leading-[28px] font-normal text-white">
                      {stat.description.split(" ").map((word, i) => {
                        // Highlight specific keywords with color
                        const keywords = ["Економія", "Збільшення"];
                        const isKeyword = keywords.some(kw => word.startsWith(kw));
                        return isKeyword ? (
                          <span key={i} className="text-[#5289ff]">{word} </span>
                        ) : (
                          <span key={i}>{word} </span>
                        );
                      })}
                    </p>
                  </div>

                  {/* Divider */}
                  {index < stats.length - 1 && (
                    <div className="w-[1px] h-[100px] bg-[#808292] mx-[25px]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Source Attribution - Mobile & Tablet */}
          <p className="lg:hidden text-[16px] leading-[24px] font-normal text-white text-left mt-6">
            за аналітикою McKinsey 2024
          </p>

          {/* Source Attribution - Desktop (inline with title) */}
          <p className="hidden lg:block text-[16px] leading-[24px] font-normal text-white text-center absolute top-[340px] right-5">
            за аналітикою McKinsey 2024
          </p>
        </div>
      </div>
    </section>
  );
}
