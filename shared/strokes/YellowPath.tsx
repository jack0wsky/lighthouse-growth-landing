'use client'

import { animated, easings, useSpring } from "@react-spring/web";

export const YellowPath = () => {
  const props = useSpring({
    delay: 800,
    config: {
      duration: 500,
      easing: easings.easeInOutCirc,
    },
    from: { width: 0 },
    to: { width: 119 },
  });

  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect
        style={props}
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
