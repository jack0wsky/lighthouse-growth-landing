"use client";

import { Children, PropsWithChildren } from "react";
import { a, useTrail } from "@react-spring/web";

export const AnimatedTitle = ({ children }: PropsWithChildren) => {
  const trail = useTrail(Children.toArray(children).length, {
    config: { mass: 2, tension: 2000, friction: 200, duration: 400 },
    opacity: 1,
    x: 0,
    y: 0,
    delay: 200,
    from: { opacity: 0, y: 30, height: 80 },
  });

  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={{ opacity: style.opacity }}>
          <a.div>{Children.toArray(children)[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
