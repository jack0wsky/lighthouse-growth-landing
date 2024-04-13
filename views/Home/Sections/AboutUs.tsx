"use client";

import { Button } from "@/shared";
import { Routes } from "@/views/routes";
import { Technologies } from "@/views/Home/Sections/Technologies";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const { aboutUs } = useHomeDictionary();

  return (
    <section className="w-full flex justify-center bg-palette-grey-200 pt-11 pb-[150px]">
      <div className="layout">
        <motion.h2
          initial="hide"
          animate="show"
          variants={{
            hide: {},
            show: {
              transition: {
                bounce: 0,
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.03,
                delayChildren: 2.5,
              },
            },
          }}
          className="text-h2"
        >
          {aboutUs.title.split("").map((character, index) => (
            <motion.span
              variants={{
                hide: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className={character === " " ? "" : "inline-block"}
              key={`${character}-${index}`}
            >
              {character}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial="hide"
          animate="show"
          variants={{
            hide: {},
            show: {
              transition: {
                bounce: 0,
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 3,
              },
            },
          }}
          className="mt-12 flex flex-wrap gap-x-32 gap-y-10 w-full pb-12"
        >
          {aboutUs.descriptions.map((text, index) => (
            <motion.p
              key={index}
              variants={{
                hide: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="w-[450px] text-xl"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <Button width="max" href={Routes.Contact}>
          {aboutUs.cta}
        </Button>

        <Technologies />
      </div>
    </section>
  );
};
