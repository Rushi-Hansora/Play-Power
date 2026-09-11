import React from "react";
import { cn } from "../../utils/cn";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white hover:brightness-105 shadow-xs",
    secondary:
      "bg-white border border-[#222222] text-[#222222] hover:bg-gray-50",
    outline:
      "bg-transparent border border-gray-300 text-gray-800 hover:border-gray-900",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100",
    dark:
      "bg-[#222222] text-white hover:bg-black",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-5 py-3 text-sm rounded-lg",
    lg: "px-6 py-3.5 text-base rounded-xl",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function RatingStars({ rating = 5, size = "w-4 h-4", showNumber = true, reviewCount, className = "" }) {
  return (
    <div className={cn("inline-flex items-center gap-1 text-sm font-semibold text-[#222222]", className)}>
      <svg
        className={cn(size, "fill-current text-[#222222]")}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M15.094 1.579l-4.124 8.885-9.783 1.187a1 1 0 0 0-.563 1.734l7.218 6.643-1.921 9.68a1 1 0 0 0 1.472 1.071L16 26.131l8.607 4.648a1 1 0 0 0 1.472-1.071l-1.921-9.68 7.218-6.643a1 1 0 0 0-.563-1.734l-9.783-1.187-4.124-8.885a1 1 0 0 0-1.812 0z" />
      </svg>
      {showNumber && <span>{Number(rating).toFixed(2)}</span>}
      {reviewCount !== undefined && (
        <span className="text-gray-500 font-normal">({reviewCount})</span>
      )}
    </div>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-900 border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }) {
  return <div className={cn("w-full border-b border-gray-200 my-8", className)} />;
}
