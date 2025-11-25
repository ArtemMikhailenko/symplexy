"use client";

import { useState } from "react";

type Language = "Ua" | "En";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState<Language>("Ua");

  return (
    <div className="flex items-center h-12 rounded-full border border-[#88a2c0] overflow-hidden">
      <button
        onClick={() => setLanguage("Ua")}
        className={`
          h-full px-3 py-2 min-w-[46.5px] text-base font-normal
          transition-all duration-200 ease-in-out
          ${
            language === "Ua"
              ? "bg-[#88a2c0] text-white"
              : "bg-transparent text-[#88a2c0]"
          }
        `}
        aria-label="Українська мова"
      >
        Ua
      </button>
      <button
        onClick={() => setLanguage("En")}
        className={`
          h-full px-3 py-2 min-w-[46.5px] text-base font-normal
          transition-all duration-200 ease-in-out
          ${
            language === "En"
              ? "bg-[#88a2c0] text-white"
              : "bg-transparent text-[#88a2c0]"
          }
        `}
        aria-label="English language"
      >
        En
      </button>
    </div>
  );
}
