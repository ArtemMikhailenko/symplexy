"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-3 rounded-[100px] text-base font-normal
        transition-all duration-200 ease-in-out
        inline-flex items-center justify-center gap-2
        ${
          variant === "primary"
            ? "bg-transparent border border-[#2d4b8c] text-[#223a6b] hover:bg-[#223a6b] hover:text-white active:bg-[#1a2d52]"
            : "bg-[#223a6b] text-white hover:bg-[#2d4b8c] active:bg-[#1a2d52]"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
