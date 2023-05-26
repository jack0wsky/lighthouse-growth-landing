import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: string;
  variant: "primary" | "secondary" | "text";
}

export const Button = ({ children, variant, href, onClick }: ButtonProps) => {
  if (onClick) {
    return (
      <button
        className="px-5 py-2.5 bg-palette-black text-white rounded-lg"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Link className="px-5 py-2.5 bg-palette-black text-white rounded-lg font-bold" href={href || ""}>
      {children}
    </Link>
  );
};
