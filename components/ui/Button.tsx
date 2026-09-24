import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#1565D8] hover:bg-[#1B74F5] text-white shadow-lg shadow-blue-900/30 hover:shadow-blue-600/30 border border-blue-400/20 active:scale-[0.98]",
    secondary:
      "bg-[#0E243A] hover:bg-[#153452] text-[#F0F4F8] border border-white/10 hover:border-white/20 active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-white/5 text-[#F0F4F8] border border-white/20 hover:border-white/40 active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-white border border-transparent",
    cyan:
      "bg-[#00D2FF] hover:bg-[#38BDF8] text-[#06101E] font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 active:scale-[0.98]",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

