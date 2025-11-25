"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import Image from "next/image";

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const handleToolsClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector("#ai-tools");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative w-12 h-12 flex items-center justify-center"
        aria-label="Меню"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#1c1d27" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1c1d27" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Full Screen */}
      <div
        className={`
          fixed inset-0 bg-white z-50 lg:hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header - Same as main header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-[#dae2eb] bg-white shadow-[0_1px_4px_rgba(4,14,34,0.05)]">
            <div className="flex-shrink-0">
              <Link href="/" className="block w-[153px] h-10 relative">
                <span className="text-2xl font-bold text-[#223a6b]">SYMPLEXY</span>
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 flex items-center justify-center"
              aria-label="Закрити меню"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#1c1d27" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="pt-12 px-4">
            <ul className="w-full max-w-[343px] mx-auto space-y-0">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="
                      flex items-center justify-center
                      h-12 py-[10px] text-[20px] leading-[28px] font-semibold
                      text-[#1c1d27] hover:text-[#5289ff]
                      transition-colors duration-200
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="mt-12 px-4">
            <div className="w-full max-w-[343px] mx-auto">
              <button
                onClick={handleToolsClick}
                className="
                  w-full h-14 px-6 py-4 rounded-[100px] text-[18px] leading-[24px] font-normal
                  bg-[#5289ff] text-white
                  hover:bg-[#4278ef] active:bg-[#3267de]
                  transition-all duration-200
                "
              >
                Підібрати інструменти
              </button>
            </div>
          </div>

          {/* Footer - Messengers & Language */}
          <div className="mt-auto pb-8 px-4">
            <div className="w-full max-w-[343px] mx-auto flex items-start justify-between">
              {/* Messengers */}
              <div className="flex flex-col gap-3">
                <span className="text-[18px] leading-[28px] text-[#1c1d27]">Месенджери</span>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5289ff"/>
                      <path d="M2 17L12 22L22 17" stroke="#5289ff" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17.5 8.5C17.5 8.5 17.5 12 12 16.5" stroke="#5289ff" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="#5289ff" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Language Switch */}
              <div className="flex flex-col gap-3">
                <span className="text-[18px] leading-[28px] text-[#1c1d27]">Мова</span>
                <LanguageSwitch />
              </div>
            </div>

            {/* Decorative Image */}
            <div className="mt-8 w-full flex justify-center opacity-60">
              <div className="w-[296px] h-[168px] relative">
                {/* Placeholder for decorative flower image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-blue-300 to-cyan-300 rounded-full blur-3xl opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
