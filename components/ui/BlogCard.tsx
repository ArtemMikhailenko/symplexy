import Image from "next/image";

interface BlogCardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  readMoreLink?: string;
}

export default function BlogCard({
  image,
  tags,
  title,
  description,
  date,
  readMoreLink = "#",
}: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl md:rounded-[20px] lg:rounded-[24px] overflow-hidden border-0 md:border md:border-[#eef3ff] shadow-[0px_1px_0px_0px_rgba(4,14,34,0.05)] hover:shadow-[0px_4px_12px_0px_rgba(4,14,34,0.08)] transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full h-[216px] overflow-hidden p-2">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-2 md:px-3 lg:px-4 py-4 md:py-5 lg:py-6 flex flex-col h-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-center px-3 py-1.5 bg-[#eef3ff] text-[#54677d] text-[14px] leading-5 font-normal rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1 md:gap-2 mt-4 md:mt-5 lg:mt-6 mb-4 md:mb-5 lg:mb-6 flex-grow">
          <h3 className="text-[#1c1d27] text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-8 font-semibold">
            {title}
          </h3>
          <p className="text-[#3c3f54] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-7 font-normal">
            {description}
          </p>
        </div>

        {/* Date and Read More - Always at bottom */}
        <div className="flex items-center justify-between pt-2 md:pt-3 lg:pt-4 mt-auto border-t border-transparent">
          <span className="text-[#808292] text-[16px] leading-6 font-normal">
            {date}
          </span>
          <a
            href={readMoreLink}
            className="text-[#5289ff] text-[16px] leading-6 font-normal hover:underline transition-all"
          >
            Читати далі
          </a>
        </div>
      </div>
    </article>
  );
}
