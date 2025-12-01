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
        px-6 py-4 rounded-[100px] text-[18px] leading-6 font-normal
        transition-all duration-300 ease-in-out
        inline-flex items-center justify-center gap-2
        ${
          variant === "primary"
            ? "bg-transparent border-2 border-[#2d4b8c] text-[#223a6b] hover:bg-[#223a6b] hover:text-white"
            : "bg-[#5289ff] text-white hover:bg-[#2d4b8c] shadow-lg hover:shadow-xl"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
