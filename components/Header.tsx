"use client";

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import Logo from "./ui/Logo";
import NavigationMenu from "./ui/NavigationMenu";
import LanguageSwitch from "./ui/LanguageSwitch";
import CTAButton from "./ui/CTAButton";
import MobileMenu from "./ui/MobileMenu";
import ScrollProgressBar from "./ui/ScrollProgressBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('header');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <header
        className={`
          fixed z-50
          w-full md:w-[calc(100%-48px)] md:max-w-[1236px]
          md:top-6 md:left-1/2 md:-translate-x-1/2
          top-0 left-0
          transition-all duration-300 ease-in-out
          ${isScrolled ? "md:top-3" : "md:top-6"}
        `}
      >
        <div
          className={`
            w-full bg-white
            h-16 md:h-[72px] md:rounded-[100px]
            border-b md:border border-[#dae2eb]
            transition-all duration-300 ease-in-out
            ${
              isScrolled
                ? "shadow-[0_4px_16px_rgba(4,14,34,0.08)]"
                : "shadow-[0_1px_4px_rgba(4,14,34,0.05)]"
            }
          `}
        >
          <div className="h-full px-4 md:px-3 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Center: Navigation Menu (Desktop) */}
            <div className="flex-1 flex items-center justify-center px-4 hidden lg:flex">
              <NavigationMenu />
            </div>

            {/* Right: Language Switch + CTA Button */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Language Switch - visible on all devices */}
              <LanguageSwitch />
              <div className="hidden lg:block">
                <CTAButton 
                  variant="primary"
                  onClick={() => {
                    const target = document.querySelector("#ai-tools");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  {t('cta')}
                </CTAButton>
              </div>
              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
