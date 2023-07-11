"use client";

import { AnimatedTitle } from "@/animations/AnimatedTitle";
import { ContactForm } from "@/views/Contact/Sections/ContactForm";
import { HorizontalYellowPath, YellowPath } from "@/shared/strokes";
import { useContactDictionary } from "@/views/Contact/dictionaries/useContactDictionary";

export const ContactHero = () => {
  const { title } = useContactDictionary();

  return (
    <section className="flex justify-center items-center w-full lg:h-[850px] px-5 relative bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1100px] z-[2]">
        <div className="flex items-center w-1/2 relative h-[300px] mt-24 lg:mt-0">
          <div className="flex flex-col">
            <AnimatedTitle>
              <h1 className="text-h1">{title}</h1>
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
