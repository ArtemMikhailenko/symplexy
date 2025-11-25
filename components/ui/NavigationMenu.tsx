"use client";

import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "ШІ-інструменти", href: "#ai-tools" },
  { label: "Для кого?", href: "#for-whom" },
  { label: "Як це працює?", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Про нас", href: "#about" },
  { label: "Блог", href: "#blog" },
];

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState<string>("");

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
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`
            px-4 py-3 rounded-[50px] text-base font-normal
            transition-all duration-200 ease-in-out
            hover:bg-gray-100 active:bg-gray-200
            ${activeItem === item.href ? "bg-gray-100" : ""}
            text-[#1c1d27]
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
