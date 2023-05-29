import { IconProps } from "@/shared/icons/IconProps";

export const Menu = ({ className }: IconProps) => (
  <svg
    width="1em"
    height="1em"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000000"
    className={className}
  >
    <path
      d="M3 5h18M3 12h18M3 19h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
