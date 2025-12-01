import Image from "next/image";
import { memo } from "react";

interface ProductCardProps {
  image: string;
  logo: string;
  title: string;
  description: string;
  badge?: string;
  tags: string[];
}

function ProductCard({
  image,
  logo,
  title,
  description,
  badge = "Freemium",
  tags,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-[343px] md:max-w-[342px] lg:max-w-[396px] h-full flex flex-col bg-white border border-[#dae2eb] rounded-2xl md:rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow duration-300 group mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-[192px] lg:h-[222px] flex-shrink-0 ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 343px, (max-width: 1024px) 342px, 396px"
          className="object-cover"
          loading="lazy"
        />
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/30 hidden md:block group-hover:opacity-0 transition-opacity duration-300" />
        
        {/* Logo */}
        <div className="absolute top-4 left-4 w-16 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/80">
          <Image
            src={logo}
            alt={`${title} logo`}
            width={64}
            height={32}
            className="object-contain"
            loading="lazy"
          />
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-[30px] px-3 py-1">
          <span className="text-[14px] leading-[20px] text-[#263e6e] font-normal text-center">
            {badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:px-6 md:pt-6 md:pb-8 flex flex-col flex-grow">
        {/* Headline */}
        <div className="mb-4 md:mb-6 flex-grow">
          <h3 className="text-[24px] leading-[32px] font-medium text-[#1c1d27] mb-1">
            {title}
          </h3>
          <p className="text-[16px] leading-[24px] text-[#3c3f54]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#eef3ff] rounded-lg h-8 flex items-center justify-center px-3 py-1.5 hover:bg-[#dde7ff] transition-colors duration-200"
            >
              <span className="text-[14px] leading-[20px] text-[#54677d] text-center">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
