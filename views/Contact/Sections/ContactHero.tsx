"use client";

import { AnimatedTitle } from "@/animations/AnimatedTitle";
import { ContactForm } from "@/views/Contact/Sections/ContactForm";
import { useSpring, animated, easings } from "@react-spring/web";

const YellowPath = () => {
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

const HorizontalYellowPath = () => {
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

export const ContactHero = () => {
  return (
    <section className="flex justify-center items-center w-full lg:h-[90vh] px-5 relative bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1100px] z-[2]">
        <div className="flex items-center w-1/2 relative h-[300px] mt-24 lg:mt-0">
          <div className="flex flex-col">
            <AnimatedTitle>
              <h1 className="text-h1">Contact us</h1>
            </AnimatedTitle>
            <div className="mt-7.5">
              <HorizontalYellowPath />
            </div>
          </div>

          <div className="absolute right-0 top-0">
            <YellowPath />
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="w-full absolute h-[300px] bg-palette-grey-200 left-0 bottom-0" />
    </section>
  );
};
