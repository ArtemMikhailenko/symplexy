"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full pt-16 lg:pt-24 pb-16 lg:pb-6 ">
      {/* Background Decorative Lines */}
      <div className="absolute left-0 bottom-40 w-[500px] h-[642px] pointer-events-none opacity-30 lg:opacity-100">
        <Image
          src="/images/footer-line-left.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 w-[1000px] h-[302px] pointer-events-none opacity-30 lg:opacity-100">
        <Image
          src="/images/footer-line-right.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1236px] px-4 lg:px-0">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Logo - Mobile */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[343px] h-[96px]">
              <Image
                src="/images/Logo-footer.svg"
                alt="SYMPLEXY"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Newsletter Form - Mobile */}
          <div className="w-full max-w-[343px] mx-auto">
            <div className="bg-[#15202e] border border-[#525c71] rounded-2xl p-6">
              <div className="mb-8">
                <h3 className="text-[#eceefc] text-[24px] leading-8 font-semibold text-center mb-2">
                  {t("newsletter.title")}
                </h3>
                <p className="text-[#d7daeb] text-[16px] leading-6 text-center">
                  {t("newsletter.description")}
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Електронна пошта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 py-3 bg-[#eef3ff] border border-[#afc9ff] rounded-xl text-[#3c3f54] text-[16px] leading-6 placeholder:text-[#3c3f54] focus:outline-none focus:border-[#5289ff] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full h-12 px-5 py-3 bg-[#5289ff] hover:bg-[#2d4b8c] text-white text-[16px] leading-6 font-normal rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t("newsletter.subscribe")}
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Menu - Mobile */}
          <nav className="w-full max-w-[343px] mx-auto">
            <ul className="flex flex-col">
              <li className="h-12 flex items-center justify-center">
                <a href="#catalog" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  {t("menu.catalog")}
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#assistant" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  {t("menu.assistant")}
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#how-it-works" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  {t("menu.howItWorks")}
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#about" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  {t("menu.about")}
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#blog" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  {t("menu.blog")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Social & Messengers - Mobile */}
          <div className="w-full max-w-[343px] mx-auto flex flex-col gap-8">
            {/* Social Networks */}
            <div>
              <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal text-center mb-4">
                {t("social.title")}
              </h4>
              <div className="flex gap-3 justify-center">
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14 2H11V13.5C11 14.88 9.88 16 8.5 16C7.12 16 6 14.88 6 13.5C6 12.12 7.12 11 8.5 11C8.73 11 8.95 11.04 9.16 11.11V8.07C8.96 8.04 8.74 8 8.5 8C5.46 8 3 10.46 3 13.5C3 16.54 5.46 19 8.5 19C11.54 19 14 16.54 14 13.5V7.69C15.4 8.74 17.13 9.5 19 9.5V6.5C16.24 6.5 14 4.26 14 2Z" fill="#eef3ff"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="4" stroke="#eef3ff" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="3.5" stroke="#eef3ff" strokeWidth="1.5"/>
                    <circle cx="15" cy="5" r="1" fill="#eef3ff"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M19.6 2.8C19.4 2 18.8 1.4 18 1.2C16.4 0.8 10 0.8 10 0.8C10 0.8 3.6 0.8 2 1.2C1.2 1.4 0.6 2 0.4 2.8C0 4.4 0 8 0 8C0 8 0 11.6 0.4 13.2C0.6 14 1.2 14.6 2 14.8C3.6 15.2 10 15.2 10 15.2C10 15.2 16.4 15.2 18 14.8C18.8 14.6 19.4 14 19.6 13.2C20 11.6 20 8 20 8C20 8 20 4.4 19.6 2.8Z" fill="#eef3ff"/>
                    <path d="M8 11.2V4.8L13.2 8L8 11.2Z" fill="#08142c"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Messengers */}
            <div>
              <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal text-center mb-4">
                {t("messengers.title")}
              </h4>
              <div className="flex gap-3 justify-center">
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Telegram">
                  <Image
                    src="/images/social/telegram.svg"
                    alt="Telegram"
                    width={23}
                    height={21}
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp">
                  <Image
                    src="/images/social/whatsap.svg"
                    alt="WhatsApp"
                    width={26}
                    height={26}
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Viber">
                  <Image
                    src="/images/social/viber.svg"
                    alt="Viber"
                    width={26}
                    height={28}
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Section - Mobile */}
          <div className="w-full max-w-[343px] mx-auto pt-10 border-t border-[#42455c]">
            <div className="flex flex-col items-center gap-4 text-[#686a7d] text-[14px] leading-5">
              <p className="text-center">{t("copyright")}</p>
              <a href="#" className="hover:text-[#5289ff] transition-colors">{t("legal.terms")}</a>
              <a href="#" className="hover:text-[#5289ff] transition-colors">{t("legal.privacy")}</a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col gap-8 mb-16">
          {/* Left Side - Logo & Newsletter */}
          <div className="w-full lg:w-[562px]">
            {/* Logo & Tagline */}
           
              <div className="flex flex-col gap-3">
                <Image
                  src="/images/Logo-footer.svg"
                  alt="SYMPLEXY"
                  width={373}
                  height={112}
                  className="h-auto w-auto max-w-[373px]"
                />
              </div>
  

           
          
          </div>
          <div className="flex gap-[68px] justify-between">
            <div className="bg-[#15202e] border border-[#525c71] rounded-[24px] p-6 max-h-[230px]">
              <div className="mb-6">
                <h3 className="text-[#eceefc] text-[24px] leading-8 font-medium mb-2">
                  {t("newsletter.title")}
                </h3>
                <p className="text-[#d7daeb] text-[18px] leading-7 font-normal">
                  {t("newsletter.description")}
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t("newsletter.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:w-[340px] h-[56px] px-5 py-4 bg-[#eef3ff] border border-[#afc9ff] rounded-2xl text-[#3c3f54] text-[16px] leading-6 placeholder:text-[#3c3f54] focus:outline-none focus:border-[#5289ff] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-[158px] h-[56px] px-6 py-4 bg-[#5289ff] hover:bg-[#2d4b8c] text-white text-[18px] leading-6 font-normal rounded-full transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
                >
                  {t("newsletter.subscribe")}
                </button>
              </form>
            </div>
          {/* Right Side - Navigation & Social */}
          <div className="w-full  flex flex-col gap-8">
            <div className="w-full lg:w-[606px] flex flex-col sm:flex-row gap-8 lg:gap-[170px]">
                {/* Navigation Menu */}

            <nav className="w-full sm:w-[250px]">
              <ul className="flex flex-col">
                <li className="pb-2">
                  <a
                    href="#catalog"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    {t("menu.catalog")}
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#assistant"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    {t("menu.assistant")}
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#how-it-works"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    {t("menu.howItWorks")}
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#about"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    {t("menu.about")}
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#blog"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    {t("menu.blog")}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social & Messengers */}
            <div className="w-full sm:w-[186px] flex flex-col gap-6">
              {/* Social Networks */}
              <div>
                <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal mb-3">
                  {t("social.title")}
                </h4>
                <div className="flex gap-3">
                  {/* TikTok */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="TikTok"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H11V13.5C11 14.88 9.88 16 8.5 16C7.12 16 6 14.88 6 13.5C6 12.12 7.12 11 8.5 11C8.73 11 8.95 11.04 9.16 11.11V8.07C8.96 8.04 8.74 8 8.5 8C5.46 8 3 10.46 3 13.5C3 16.54 5.46 19 8.5 19C11.54 19 14 16.54 14 13.5V7.69C15.4 8.74 17.13 9.5 19 9.5V6.5C16.24 6.5 14 4.26 14 2Z"
                        fill="#eef3ff"
                      />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="16"
                        height="16"
                        rx="4"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="3.5"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                      />
                      <circle cx="15" cy="5" r="1" fill="#eef3ff" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6 2.8C19.4 2 18.8 1.4 18 1.2C16.4 0.8 10 0.8 10 0.8C10 0.8 3.6 0.8 2 1.2C1.2 1.4 0.6 2 0.4 2.8C0 4.4 0 8 0 8C0 8 0 11.6 0.4 13.2C0.6 14 1.2 14.6 2 14.8C3.6 15.2 10 15.2 10 15.2C10 15.2 16.4 15.2 18 14.8C18.8 14.6 19.4 14 19.6 13.2C20 11.6 20 8 20 8C20 8 20 4.4 19.6 2.8Z"
                        fill="#eef3ff"
                      />
                      <path d="M8 11.2V4.8L13.2 8L8 11.2Z" fill="#08142c" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Messengers */}
              <div>
                <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal mb-3">
                  {t("messengers.title")}
                </h4>
                <div className="flex gap-3">
                  {/* Telegram */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Telegram"
                  >
                    <Image
                      src="/images/social/telegram.svg"
                      alt="Telegram"
                      width={23}
                      height={21}
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <Image
                      src="/images/social/whatsap.svg"
                      alt="WhatsApp"
                      width={26}
                      height={26}
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>
                  {/* Viber */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Viber"
                  >
                    <Image
                      src="/images/social/viber.svg"
                      alt="Viber"
                      width={26}
                      height={28}
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>
                </div>
              </div>
            </div>
            </div>
            {/* Bottom Legal Section */}
        <div className="pt-6 border-t border-[#42455c]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[#686a7d] text-[14px] leading-5">
            <a href="#" className="hover:text-[#5289ff] transition-colors">
              {t("legal.terms")}
            </a>
            <a href="#" className="hover:text-[#5289ff] transition-colors">
              {t("legal.privacy")}
            </a>
            <p>{t("copyright")}</p>
          </div>
        </div>
          </div>
        </div>
            
    </div>

        
      </div>
    </footer>
  );
}
