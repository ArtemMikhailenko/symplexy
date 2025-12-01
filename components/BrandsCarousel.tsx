"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  { name: "Leonardo.Ai", logo: "/images/slider/LEONARDOAI.webp" },
  { name: "Durable", logo: "/images/slider/durable.webp" },
  { name: "HeyGen", logo: "/images/slider/hey-gen.webp" },
  { name: "Descript", logo: "/images/slider/desciptr.webp" },
  { name: "Frase", logo: "/images/slider/Frase.webp" },
  { name: "SocialBee", logo: "/images/slider/social-bee.webp" },
];

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;
      
      // Reset scroll when we've scrolled through one set of brands
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[80px] md:h-[100px] bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden -mt-8 md:-mt-14">
      {/* Gradient Overlays to hide edges */}
      <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[200px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[80px] md:w-[200px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex items-center h-full overflow-hidden"
        style={{
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* First set of brands */}
        <div className="flex items-center gap-[40px] md:gap-[80px] px-[20px] md:px-[40px] shrink-0">
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex items-center justify-center h-[40px] md:h-[60px] min-w-[100px] md:min-w-[150px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                sizes="(max-width: 768px) 100px, 150px"
                loading={index < 3 ? "eager" : "lazy"}
                quality={80}
                className="object-contain w-[100px] md:w-[150px] h-auto"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-[40px] md:gap-[80px] px-[20px] md:px-[40px] shrink-0">
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex items-center justify-center h-[40px] md:h-[60px] min-w-[100px] md:min-w-[150px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                sizes="(max-width: 768px) 100px, 150px"
                loading="lazy"
                quality={80}
                className="object-contain w-[100px] md:w-[150px] h-auto"
              />
            </div>
          ))}
        </div>

        {/* Third set for extra smoothness */}
        <div className="flex items-center gap-[40px] md:gap-[80px] px-[20px] md:px-[40px] shrink-0">
          {brands.map((brand, index) => (
            <div
              key={`brand-3-${index}`}
              className="flex items-center justify-center h-[40px] md:h-[60px] min-w-[100px] md:min-w-[150px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                sizes="(max-width: 768px) 100px, 150px"
                loading="lazy"
                quality={80}
                className="object-contain w-[100px] md:w-[150px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
