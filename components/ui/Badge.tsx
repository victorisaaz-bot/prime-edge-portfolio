import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "blue" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center font-semibold rounded-full uppercase tracking-wider transition-colors";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    default: "bg-[#0E243A] text-[#94A3B8] border border-white/10",
    cyan: "bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30",
    blue: "bg-[#1565D8]/15 text-[#38BDF8] border border-[#1565D8]/40",
    amber: "bg-[#F59E0B]/15 text-[#FBBF24] border border-[#F59E0B]/30",
    outline: "bg-transparent text-[#94A3B8] border border-white/20",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

