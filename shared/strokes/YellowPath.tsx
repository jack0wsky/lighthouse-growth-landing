"use client";

import { motion } from "framer-motion";

export const YellowPath = () => {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 120, transition: { delay: 0.8 } }}
        x="-3"
        y="80.9241"
        width="119"
        height="17"
        rx="8.5"
        transform="rotate(-44.8493 -3 80.9241)"
        fill="#F2C524"
      />
    </svg>
  );
};
