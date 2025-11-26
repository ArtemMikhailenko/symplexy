"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full pt-16 lg:pt-24 pb-16 lg:pb-6 overflow-x-hidden">
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
                  Залишайтеся з нами
                </h3>
                <p className="text-[#d7daeb] text-[16px] leading-6 text-center">
                  Щотижневі підбірки нових AI‑інструментів та новини про
                  Simplexy. Обіцяємо не спамити)
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
                  className="w-full h-12 px-5 py-3 bg-[#5289ff] hover:bg-[#4278ef] text-white text-[16px] leading-6 font-normal rounded-full transition-all duration-200"
                >
                  Підписатися
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Menu - Mobile */}
          <nav className="w-full max-w-[343px] mx-auto">
            <ul className="flex flex-col">
              <li className="h-12 flex items-center justify-center">
                <a href="#catalog" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  Каталог нейромереж
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#assistant" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  Бізнес-асистент
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#how-it-works" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  Як це працює
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#about" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  Про нас
                </a>
              </li>
              <li className="h-12 flex items-center justify-center">
                <a href="#blog" className="text-[#eef3ff] text-[20px] leading-7 font-semibold hover:text-[#5289ff] transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </nav>

          {/* Social & Messengers - Mobile */}
          <div className="w-full max-w-[343px] mx-auto flex flex-col gap-8">
            {/* Social Networks */}
            <div>
              <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal text-center mb-4">
                Соціальні мережі
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
                Месенджери
              </h4>
              <div className="flex gap-3 justify-center">
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Telegram">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M19 1L9 11M19 1L13 17L9 11M19 1L1 7L9 11" stroke="#eef3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 9.5C17.0028 10.6199 16.7386 11.7219 16.2294 12.7156C15.7202 13.7094 14.9811 14.5665 14.0753 15.2145C13.1694 15.8625 12.1234 16.2823 11.0242 16.4395C9.92499 16.5967 8.80571 16.4871 7.76 16.12L2 18L3.88 12.24C3.51289 11.1943 3.40326 10.075 3.56048 8.97578C3.71769 7.87659 4.13747 6.83056 4.78551 5.92472C5.43354 5.01888 6.29068 4.27979 7.28439 3.77058C8.27811 3.26136 9.38011 2.99716 10.5 3H11C12.6832 3.0921 14.284 3.78378 15.4854 4.98521C16.6868 6.18664 17.3985 7.81677 17.5 9.5Z" stroke="#eef3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Viber">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C5.58 2 2 5.58 2 10C2 11.85 2.63 13.55 3.68 14.93L2.63 17.63L5.46 16.61C6.77 17.53 8.34 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2Z" stroke="#eef3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 8C14 7.47 13.79 6.96 13.41 6.59C13.04 6.21 12.53 6 12 6" stroke="#eef3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 8V11L12 9" stroke="#eef3ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Section - Mobile */}
          <div className="w-full max-w-[343px] mx-auto pt-10 border-t border-[#42455c]">
            <div className="flex flex-col items-center gap-4 text-[#686a7d] text-[14px] leading-5">
              <p className="text-center">© 2025 Simplexy. Усі права захищено</p>
              <a href="#" className="hover:text-[#5289ff] transition-colors">Договір оферти</a>
              <a href="#" className="hover:text-[#5289ff] transition-colors">Політика конфіденційності</a>
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
                  Залишайтеся з нами
                </h3>
                <p className="text-[#d7daeb] text-[18px] leading-7 font-normal">
                  Щотижневі підбірки нових AI‑інструментів та новини про
                  Simplexy. Обіцяємо не спамити)
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Електронна пошта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:w-[340px] h-[56px] px-5 py-4 bg-[#eef3ff] border border-[#afc9ff] rounded-2xl text-[#3c3f54] text-[16px] leading-6 placeholder:text-[#3c3f54] focus:outline-none focus:border-[#5289ff] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-[158px] h-[56px] px-6 py-4 bg-[#5289ff] hover:bg-[#2d4b8c] text-white text-[18px] leading-6 font-normal rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  Підписатися
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
                    Каталог нейромереж
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#assistant"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    Бізнес-асистент
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#how-it-works"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    Як це працює
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#about"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    Про нас
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#blog"
                    className="block text-[#eef3ff] text-[24px] leading-8 font-medium hover:text-[#5289ff] transition-colors"
                  >
                    Блог
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social & Messengers */}
            <div className="w-full sm:w-[186px] flex flex-col gap-6">
              {/* Social Networks */}
              <div>
                <h4 className="text-[#eef3ff] text-[18px] leading-7 font-normal mb-3">
                  Соціальні мережі
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
                  Месенджери
                </h4>
                <div className="flex gap-3">
                  {/* Telegram */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Telegram"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 1L9 11M19 1L13 17L9 11M19 1L1 7L9 11"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9.5C17.0028 10.6199 16.7386 11.7219 16.2294 12.7156C15.7202 13.7094 14.9811 14.5665 14.0753 15.2145C13.1694 15.8625 12.1234 16.2823 11.0242 16.4395C9.92499 16.5967 8.80571 16.4871 7.76 16.12L2 18L3.88 12.24C3.51289 11.1943 3.40326 10.075 3.56048 8.97578C3.71769 7.87659 4.13747 6.83056 4.78551 5.92472C5.43354 5.01888 6.29068 4.27979 7.28439 3.77058C8.27811 3.26136 9.38011 2.99716 10.5 3H11C12.6832 3.0921 14.284 3.78378 15.4854 4.98521C16.6868 6.18664 17.3985 7.81677 17.5 9.5Z"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* Viber */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#313c4a] hover:bg-[#5289ff] rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Viber"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2C5.58 2 2 5.58 2 10C2 11.85 2.63 13.55 3.68 14.93L2.63 17.63L5.46 16.61C6.77 17.53 8.34 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2Z"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 8C14 7.47 13.79 6.96 13.41 6.59C13.04 6.21 12.53 6 12 6"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 8V11L12 9"
                        stroke="#eef3ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
            {/* Bottom Legal Section */}
        <div className="pt-6 border-t border-[#42455c]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[#686a7d] text-[14px] leading-5">
            <a href="#" className="hover:text-[#5289ff] transition-colors">
              Договір оферти
            </a>
            <a href="#" className="hover:text-[#5289ff] transition-colors">
              Політика конфіденційності
            </a>
            <p>© 2025 Simplexy. Усі права захищено</p>
          </div>
        </div>
          </div>
        </div>
            
    </div>

        
      </div>
    </footer>
  );
}
