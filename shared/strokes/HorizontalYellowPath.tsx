"use client";

import { motion } from "framer-motion";

export const HorizontalYellowPath = () => {
  return (
    <svg
      width="119"
      height="17"
      viewBox="0 0 119 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 120, transition: { delay: 0.5 } }}
        height="17"
        rx="8.5"
        fill="#F2C524"
      />
    </svg>
  );
};
