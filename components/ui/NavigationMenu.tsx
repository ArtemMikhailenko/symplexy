"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';

interface MenuItem {
  labelKey: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { labelKey: "aiTools", href: "#ai-tools" },
  { labelKey: "howItWorks", href: "#how-it-works" },
  { labelKey: "blog", href: "#blog" },
  { labelKey: "about", href: "#about" },
];

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState<string>("");
  const t = useTranslations('header.nav');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveItem(href);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-0">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`
            px-4 py-3 rounded-[50px] text-base font-normal
            transition-all duration-200 ease-in-out
            hover:bg-gray-100 active:bg-gray-200 cursor-pointer
            ${activeItem === item.href ? "bg-gray-100" : ""}
            text-[#1c1d27]
          `}
        >
          {t(item.labelKey)}
        </a>
      ))}
    </nav>
  );
}
