"use client";

import Image from "next/image";

const brands = [
  { name: "SocialBee", logo: "/images/brands/socialbee.svg" },
  { name: "Frase", logo: "/images/brands/frase.svg" },
  { name: "Leonardo.Ai", logo: "/images/brands/leonardo.svg" },
  { name: "Durable", logo: "/images/brands/durable.svg" },
  { name: "HeyGen", logo: "/images/brands/heygen.svg" },
  { name: "Descript", logo: "/images/brands/descript.svg" },
];

export default function BrandsSection() {
  return (
    <section className="relative w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto px-6">
        {/* Brand Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative h-12 w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
