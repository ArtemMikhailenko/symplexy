"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActiveItem(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    menuItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
            transition-all duration-300 ease-in-out
            hover:bg-[#eef3ff] hover:text-[#5289ff] hover:scale-105
            active:bg-[#dae2eb] active:scale-100
            cursor-pointer
            ${activeItem === item.href ? "bg-[#eef3ff] text-[#5289ff]" : "text-[#1c1d27]"}
          `}
        >
          {t(item.labelKey)}
        </a>
      ))}
    </nav>
  );
}
