"use client";

import { ContactForm } from "@/views/Contact/Sections/ContactForm";
import { HorizontalYellowPath, YellowPath } from "@/shared/strokes";
import { useContactDictionary } from "@/views/Contact/dictionaries/useContactDictionary";
import { motion } from "framer-motion";

export const ContactHero = () => {
  const { title } = useContactDictionary();

  return (
    <section className="flex justify-center items-center w-full lg:h-[850px] px-5 relative bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1100px] z-[2]">
        <div className="flex items-center w-1/2 relative h-[300px] mt-24 lg:mt-0">
          <div className="flex flex-col">
            <div className="h-14 overflow-hidden">
              <motion.h1
                className="text-h1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.03, bounce: 0 } },
                }}
              >
                {title.split("").map((letter, index) => (
                  <motion.span
                    variants={{
                      hidden: { y: 100 },
                      visible: { y: 0, transition: { bounce: 0 } },
                    }}
                    key={`${letter}-${index}`}
                    className={letter === " " ? "" : "inline-block"}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
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
