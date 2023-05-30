import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  width: "max" | "full";
  type?: "button" | "submit";
}

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  width,
  type,
}: ButtonProps) => {
  if (onClick || type) {
    return (
      <button
        className={classNames(
          "flex justify-center items-center px-5 py-2.5 rounded-lg font-bold focus:outline-palette-yellow focus:outline-1 focus:outline-offset-4",
          { "bg-palette-black text-white": variant === "primary" },
          { "bg-palette-yellow text-palette-black hover:bg-palette-yellow-light": variant === "secondary" },
          { "w-max": width === "max" },
          { "w-full": width === "full" },
          className
        )}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      className={classNames(
        "flex justify-center items-center px-5 py-2.5 rounded-lg font-bold focus:outline-palette-yellow focus:outline-1 focus:outline-offset-4",
        { "bg-palette-black text-white": variant === "primary" },
        { "bg-palette-yellow text-palette-black hover:bg-palette-yellow-light": variant === "secondary" },
        { "w-max": width === "max" },
        { "w-full": width === "full" },
        className
      )}
      href={href || ""}
    >
      {children}
    </Link>
  );
};
