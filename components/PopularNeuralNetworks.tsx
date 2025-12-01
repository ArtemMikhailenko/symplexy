"use client";

import ProductCard from "./ui/ProductCard";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/ai/durable.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.durable.title",
    descriptionKey: "products.durable.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
  {
    id: 2,
    image: "/images/ai/HeyGen.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.heygen.title",
    descriptionKey: "products.heygen.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
  {
    id: 3,
    image: "/images/ai/Frase.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.frase.title",
    descriptionKey: "products.frase.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
  {
    id: 4,
    image: "/images/ai/Leonardo.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.leonardo.title",
    descriptionKey: "products.leonardo.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
  {
    id: 5,
    image: "/images/ai/social-bee.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.socialBee.title",
    descriptionKey: "products.socialBee.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
  {
    id: 6,
    image: "/images/ai/Leonardo2.webp",
    logo: "/images/ai/logo.svg",
    titleKey: "products.leonardo2.title",
    descriptionKey: "products.leonardo2.description",
    tagKeys: ["tags.noCode", "tags.onboarding", "tags.marketing", "tags.business"],
  },
];

export default function PopularNeuralNetworks() {
  const t = useTranslations("aiTools");
  const [showChatHint, setShowChatHint] = useState(true);

  const productCards = useMemo(() => 
    products.map((product) => ({
      ...product,
      translatedTags: product.tagKeys.map((key) => t(key))
    })), 
    [t]
  );

  const mobileCards = useMemo(() => productCards.slice(0, 3), [productCards]);
  const desktopCards = useMemo(() => productCards.slice(3), [productCards]);

  return (
    <section
      id="ai-tools"
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ai-bg.webp"
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1220px] mx-auto px-4 md:px-6 lg:px-5">
        {/* Title */}
        <h2 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#263e6e] text-center mb-8 md:mb-16 lg:mb-28">
          {t("title")}
        </h2>

        {/* Cards Grid */}
        <div className="w-full max-w-[343px] md:max-w-[708px] lg:max-w-[1236px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* First 3 cards - visible on all devices */}
          {mobileCards.map((product) => (
            <ProductCard 
              key={product.id} 
              image={product.image}
              logo={product.logo}
              title={t(product.titleKey)}
              description={t(product.descriptionKey)}
              tags={product.translatedTags}
            />
          ))}
          {/* Additional 3 cards - visible only on tablets and desktops */}
          {desktopCards.map((product) => (
            <div key={product.id} className="hidden md:block">
              <ProductCard 
                image={product.image}
                logo={product.logo}
                title={t(product.titleKey)}
                description={t(product.descriptionKey)}
                tags={product.translatedTags}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="w-full max-w-[343px] md:max-w-[708px] lg:max-w-[1236px] mx-auto flex flex-col items-center justify-center gap-6">
          <h3 className="w-full max-w-[343px] md:max-w-[501px] text-[24px] leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] font-normal text-[#1c1d27] text-center">
            {t("cta.text1")}{" "}
            <span className="font-semibold">{t("cta.text2")}</span>
          </h3>
          <button className="w-full max-w-[343px] md:w-auto md:min-w-[241px] h-14 px-6 py-4 bg-[#5289ff] text-white text-[18px] leading-[24px] font-normal rounded-[100px] hover:bg-[#2d4b8c] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl">
            {t("cta.button")}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* AI Chat Widget */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-1">
        {/* Hint - Hide on mobile */}
        {showChatHint && (
          <div className="hidden md:block relative bg-white border border-[#c2c8ef] rounded-[20px] px-4 py-3 shadow-lg">
            <p className="text-[16px] leading-[19px] text-[#182155] text-center">
              {t("chat.hint").split(' ').map((word, i, arr) => (
                i === Math.floor(arr.length / 2) ? (
                  <span key={i}><br />{word} </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              ))}
            </p>
            {/* Arrow */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-white" />
            <div className="absolute -right-[11px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent border-l-[11px] border-l-[#c2c8ef]" />
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setShowChatHint(false)}
          className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-gradient-to-b from-[#a441cb] to-[#5e72f5] shadow-[0_4px_8px_rgba(19,34,64,0.05),0_4px_4px_rgba(4,14,34,0.05)] hover:shadow-[0_6px_12px_rgba(19,34,64,0.1)] transition-all duration-200 flex items-center justify-center"
          aria-label={t("chat.ariaLabel")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 md:w-8 md:h-8"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 18.4166 4.70492 20.6744 5.91836 22.5733L4.28 27.72L9.42667 26.0816C11.3256 27.2951 13.5834 28 16 28Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M12 15H12.01"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 15H16.01"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 15H20.01"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
