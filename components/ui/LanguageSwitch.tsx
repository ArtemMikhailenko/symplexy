"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/navigation';
import { type Locale } from '@/i18n';
import { useTransition } from 'react';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      // Use the correct router.replace with locale parameter
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center h-12 rounded-full border border-[#88a2c0] overflow-hidden">
      <button
        onClick={() => switchLocale('uk')}
        disabled={isPending}
        className={`
          h-full px-3 py-2 min-w-[46.5px] text-base font-normal
          transition-all duration-200 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            locale === 'uk'
              ? "bg-[#88a2c0] text-white"
              : "bg-transparent text-[#88a2c0] hover:bg-[#88a2c0]/10"
          }
        `}
        aria-label="Українська мова"
        aria-current={locale === 'uk' ? 'true' : 'false'}
      >
        Ua
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`
          h-full px-3 py-2 min-w-[46.5px] text-base font-normal
          transition-all duration-200 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            locale === 'en'
              ? "bg-[#88a2c0] text-white"
              : "bg-transparent text-[#88a2c0] hover:bg-[#88a2c0]/10"
          }
        `}
        aria-label="English language"
        aria-current={locale === 'en' ? 'true' : 'false'}
      >
        En
      </button>
    </div>
  );
}
