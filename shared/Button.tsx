import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useNavigation } from "@/views/routes";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  externalLink?: string;
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
  externalLink,
}: ButtonProps) => {
  const { navigateTo } = useNavigation();

  if (externalLink) {
    return (
      <a
        className={classNames(
          "flex justify-center items-center px-5 py-2.5 rounded-lg font-bold focus:outline-palette-yellow focus:outline-1 focus:outline-offset-4",
          { "bg-palette-black text-white hover:bg-gray-800": variant === "primary" },
          {
            "bg-palette-yellow text-palette-black hover:bg-palette-yellow-light":
              variant === "secondary",
          },
          { "w-max": width === "max" },
          { "w-full": width === "full" },
          className
        )}
        href={externalLink}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  if (onClick || type) {
    return (
      <button
        className={classNames(
          "flex justify-center items-center px-5 py-2.5 rounded-lg font-bold focus:outline-palette-yellow focus:outline-1 focus:outline-offset-4",
          { "bg-palette-black text-white hover:bg-gray-700": variant === "primary" },
          {
            "bg-palette-yellow text-palette-black hover:bg-palette-yellow-light":
              variant === "secondary",
          },
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
        { "bg-palette-black text-white hover:bg-gray-700 transition-colors": variant === "primary" },
        {
          "bg-palette-yellow text-palette-black hover:bg-palette-yellow-light":
            variant === "secondary",
        },
        { "w-max": width === "max" },
        { "w-full": width === "full" },
        className
      )}
      href={href ? navigateTo(href) : ""}
    >
      {children}
    </Link>
  );
};
