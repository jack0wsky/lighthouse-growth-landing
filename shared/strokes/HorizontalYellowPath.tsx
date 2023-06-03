'use client'

import { animated, useSpring } from "@react-spring/web";

export const HorizontalYellowPath = () => {
  const props = useSpring({
    delay: 500,
    config: {
      duration: 600,
    },
    from: { width: 0 },
    to: { width: 119 },
  });

  return (
    <svg
      width="119"
      height="17"
      viewBox="0 0 119 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect style={props} height="17" rx="8.5" fill="#F2C524" />
    </svg>
  );
};
