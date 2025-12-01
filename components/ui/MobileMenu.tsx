"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface MenuItem {
  href: string;
  labelKey: string;
}

const menuItems: MenuItem[] = [
  { labelKey: "aiTools", href: "#ai-tools" },
  { labelKey: "forWhom", href: "#for-whom" },
  { labelKey: "howItWorks", href: "#how-it-works" },
  { labelKey: "faq", href: "#faq" },
  { labelKey: "about", href: "#about" },
  { labelKey: "blog", href: "#blog" },
];

export default function MobileMenu() {
  const t = useTranslations('header.nav');
  const tMenu = useTranslations('mobileMenu');
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
        aria-label={tMenu('menu')}
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
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header - Same as main header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-[#dae2eb] bg-white shadow-[0_1px_4px_rgba(4,14,34,0.05)] flex-shrink-0">
            <div className="flex-shrink-0">
              <Link href="/" className="block w-[153px] h-10 relative">
                <span className="text-2xl font-bold text-[#223a6b]">SYMPLEXY</span>
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 flex items-center justify-center"
              aria-label={tMenu('close')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#1c1d27" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="pt-12 px-4 flex-shrink-0">
            <ul className="w-full max-w-[343px] mx-auto space-y-0">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="
                      flex items-center justify-center
                      h-10 py-[10px] text-[20px] leading-[28px] font-semibold
                      text-[#1c1d27] hover:text-[#5289ff]
                      transition-colors duration-200
                    "
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="mt-12 px-4 pb-8 flex-shrink-0">
            <div className="w-full max-w-[343px] mx-auto">
              <button
                onClick={handleToolsClick}
                className="
                  w-full h-14 px-6 py-4 rounded-[100px] text-[18px] leading-[24px] font-normal
                  bg-[#5289ff] text-white
                  hover:bg-[#2d4b8c]
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                "
              >
                {tMenu('cta')}
              </button>
            </div>
          </div>

          {/* Footer - Messengers */}
          <div className="relative flex-shrink-0">
            <div className="w-full max-w-[343px] px-4 mx-auto flex items-start justify-start relative z-10">
              {/* Messengers */}
              <div className="flex flex-col gap-3">
                <span className="text-[18px] leading-[28px] text-[#1c1d27]">{tMenu('messengers')}</span>
                <div className="flex items-center gap-3">
                  {/* Telegram */}
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors relative z-10">
                    <Image src="/images/social/telegram.svg" alt="Telegram" width={24} height={24} />
                  </a>
                  {/* Viber */}
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors relative z-10">
                    <Image src="/images/social/viber.svg" alt="Viber" width={24} height={24} />
                  </a>
                  {/* WhatsApp */}
                  <a href="#" className="w-12 h-12 rounded-full bg-[#e8f0fc] flex items-center justify-center hover:bg-[#d0e1f9] transition-colors relative z-10">
                    <Image src="/images/social/whatsap.svg" alt="WhatsApp" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Flower Image */}
            {/* <div className="w-full flex justify-center mt-8 pointer-events-none"> */}
              <div className="w-full min-h-[326px] relative">
                <Image
                  src="/images/burger-flower.webp"
                  alt=""
                  fill
                  sizes="326px"
                  className="object-сover"
                />
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
