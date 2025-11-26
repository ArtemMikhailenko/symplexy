"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');
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
          src="/images/Cloud-about.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Crystal Flower Background - hidden on mobile/tablet */}
      <div className="absolute right-[160px] top-[398px] w-[760px] h-[760px] pointer-events-none hidden lg:block">
        <Image
          src="/images/flover-about.webp"
          alt=""
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1236px] px-4 md:px-6 lg:px-0">
        {/* Header - Left aligned on mobile, centered on desktop */}
        <div className="flex flex-col items-start lg:items-center gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-[152px]">
          <h2 className="text-[#223a6b] text-[40px] md:text-[48px] lg:text-[56px] leading-[48px] md:leading-[56px] lg:leading-[64px] font-bold text-left lg:text-center max-w-[343px] md:max-w-[606px]">
            {t('title')}
          </h2>
          <p className="text-[#1c1d27] text-[18px] leading-[28px] font-normal text-left lg:text-center max-w-[343px] md:max-w-[606px]">
            <span className="text-[#6b9aff] font-semibold">{t('description.part1')}</span> {t('description.part2')} <span className="text-[#6b9aff] font-semibold">{t('description.highlight')}</span> {t('description.part3')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-[343px] md:max-w-[605px]">
          {/* Mission Section */}
          <div className="mb-8 flex flex-col gap-4">
            <h3 className="text-[#1c1d27] text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-semibold">
              {t('mission.title')}{' '}
              <span className="text-[#5289ff]">{t('mission.part1')}</span>{' '}
              {t('mission.part2')}{' '}
              <span className="text-[#5289ff]">{t('mission.part3')}</span>{' '}
              {t('mission.part4')}
            </h3>
          </div>

          {/* What We Do Section */}
          <div className="mb-8 flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              {t("whatWeDo.title")}
            </h4>
            <ul className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal space-y-2">
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>{t("whatWeDo.item1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>{t("whatWeDo.item2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">•</span>
                <span>{t("whatWeDo.item3")}</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Symplexy Section */}
          <div className="mb-8 flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              {t("whyChoose.title")}
            </h4>
            <ul className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal space-y-0">
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">1.</span>
                <span>{t("whyChoose.item1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">2.</span>
                <span>{t("whyChoose.item2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5289ff] font-bold">3.</span>
                <span>{t("whyChoose.item3")}</span>
              </li>
            </ul>
          </div>

          {/* Our Focus Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
              {t("ourFocus.title")}
            </h4>
            <p className="text-[#2f3141] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal">
              {t("ourFocus.text")}
            </p>
          </div>
        </div>

        {/* Crystal Flower Image - mobile/tablet only, at bottom */}
        <div className="lg:hidden relative w-full max-w-[396px] h-[413px] mt-12 md:mt-16 -ml-[10px] md:ml-0">
          <Image
            src="/images/flover-about.webp"
            alt=""
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
