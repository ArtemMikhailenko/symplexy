"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    topic: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-[130px] overflow-hidden"
    >
      {/* Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-[985px] opacity-30">
          <svg
            width="1920"
            height="985"
            viewBox="0 0 1920 985"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 0L1920 985"
              stroke="url(#gradient1)"
              strokeWidth="1"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="1920" y2="985">
                <stop offset="0%" stopColor="#5289ff" stopOpacity="0" />
                <stop offset="50%" stopColor="#5289ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#5289ff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1236px] px-4 lg:px-0">
        {/* Glass Container */}
        <div className="relative bg-black/60 backdrop-blur-[20px] rounded-[24px] border border-[#a7b0f1] py-20 px-8 lg:px-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start lg:items-center">
            {/* Left Side - Heading */}
            <div className="flex-1 max-w-[472px]">
              <h2 className="text-white text-[40px] lg:text-[56px] leading-[48px] lg:leading-[64px] font-bold mb-6">
                Залишилися питання, <span className="text-[#6b9aff]">або</span>
                <br />
                <span className="text-[#6b9aff]">є пропозиції?</span>
              </h2>
              <p className="text-white text-[18px] leading-7 font-normal">
                Напишіть нам. Ми з радістю відповімо на будь-яке питання, або
                розглянемо вашу пропозицію.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-[380px]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email Input */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Електронна пошта"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[56px] px-5 py-4 bg-[#eef3ff] border border-[#afc9ff] rounded-2xl text-[#3c3f54] text-[16px] leading-6 placeholder:text-[#3c3f54] focus:outline-none focus:border-[#5289ff] transition-colors"
                    required
                  />
                </div>

                {/* Topic Dropdown */}
                <div className="w-full">
                  <select
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full h-[56px] px-5 py-4 bg-[#eef3ff] border border-[#afc9ff] rounded-2xl text-[#3c3f54] text-[16px] leading-6 focus:outline-none focus:border-[#5289ff] transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23223a6b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 20px center",
                      backgroundSize: "24px 24px",
                    }}
                    required
                  >
                    <option value="">Тематика звернення</option>
                    <option value="general">Загальне питання</option>
                    <option value="partnership">Партнерство</option>
                    <option value="support">Підтримка</option>
                    <option value="other">Інше</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="w-full">
                  <textarea
                    placeholder="Опишіть ваше питання чи пропозицію"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full min-h-[100px] px-5 py-4 bg-[#eef3ff] border border-[#afc9ff] rounded-2xl text-[#3c3f54] text-[16px] leading-6 placeholder:text-[#3c3f54] focus:outline-none focus:border-[#5289ff] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-2">
                  <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={(e) =>
                        setFormData({ ...formData, privacy: e.target.checked })
                      }
                      className="peer w-6 h-6 rounded border-2 border-[#a8a9b4] bg-transparent appearance-none cursor-pointer checked:bg-[#5289ff] checked:border-[#5289ff] focus:outline-none focus:ring-2 focus:ring-[#5289ff] focus:ring-offset-2 focus:ring-offset-transparent"
                      required
                    />
                    <svg
                      className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3337 4L6.00033 11.3333L2.66699 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <label
                    htmlFor="privacy"
                    className="text-[#a8a9b4] text-[14px] leading-5 cursor-pointer"
                  >
                    Я погоджуюся з політикою конфіденційності веб-сайту та
                    обробкою даних
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[56px] mt-2 px-6 py-4 bg-[#5289ff] hover:bg-[#2d4b8c] text-white text-[18px] leading-6 font-normal rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Надіслати</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
