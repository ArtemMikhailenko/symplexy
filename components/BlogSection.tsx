"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useTranslations } from "next-intl";

interface BlogPost {
  id: number;
  image: string;
  tagsKey: string;
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/news/news-1.webp",
    tagsKey: "posts.choosingAI.tags",
    titleKey: "posts.choosingAI.title",
    descriptionKey: "posts.choosingAI.description",
    dateKey: "posts.choosingAI.date",
  },
  {
    id: 2,
    image: "/images/news/news-2.webp",
    tagsKey: "posts.top5Tools.tags",
    titleKey: "posts.top5Tools.title",
    descriptionKey: "posts.top5Tools.description",
    dateKey: "posts.top5Tools.date",
  },
  {
    id: 3,
    image: "/images/news/news-3.webp",
    tagsKey: "posts.savingMoney.tags",
    titleKey: "posts.savingMoney.title",
    descriptionKey: "posts.savingMoney.description",
    dateKey: "posts.savingMoney.date",
  },
  {
    id: 4,
    image: "/images/news/news-1.webp",
    tagsKey: "posts.savingMoney.tags",
    titleKey: "posts.savingMoney.title",
    descriptionKey: "posts.savingMoney.description",
    dateKey: "posts.savingMoney.date",
  },
  {
    id: 5,
    image: "/images/news/news-2.webp",
    tagsKey: "posts.choosingAI.tags",
    titleKey: "posts.choosingAI.title",
    descriptionKey: "posts.choosingAI.description",
    dateKey: "posts.choosingAI.date",
  },
  {
    id: 6,
    image: "/images/news/news-3.webp",
    tagsKey: "posts.top5Tools.tags",
    titleKey: "posts.top5Tools.title",
    descriptionKey: "posts.top5Tools.description",
    dateKey: "posts.top5Tools.date",
  },
];

export default function BlogSection() {
  const t = useTranslations("blog");

  return (
    <section
      id="blog"
      className="relative w-full min-h-[1878px] bg-[#1c1d27] py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage: "url(/images/blog-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Container with Glass Effect */}
      <div className="relative max-w-[1280px] mx-auto px-0 md:px-4 lg:px-6">
        <div className="relative sm:bg-white/[0.001] sm:backdrop-blur-[4px] sm:rounded-[40px] sm:border sm:border-[#eef3ff] sm:p-8 lg:p-16">
          {/* Glass Morphism Effect */}
          <div className="hidden sm:block absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-12">
            {/* Header */}
            <div className="max-w-[501px]">
              <h2 className="text-white text-[40px] lg:text-[56px] leading-[48px] lg:leading-[64px] font-bold mb-6">
                {t("title")}
              </h2>
              <p className="text-white text-[18px] leading-7 font-normal">
                {t("description")}
              </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => {
                const tags = t(post.tagsKey).split(',');
                return (
                  <BlogCard
                    key={post.id}
                    image={post.image}
                    tags={tags}
                    title={t(post.titleKey)}
                    description={t(post.descriptionKey)}
                    date={t(post.dateKey)}
                  />
                );
              })}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <button className="group flex items-center gap-2 px-6 py-4 bg-[#5289ff] hover:bg-[#2d4b8c] text-white text-[18px] leading-6 font-normal rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>{t("viewAll")}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M13.5 7.5L18 12M18 12L13.5 16.5M18 12H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
