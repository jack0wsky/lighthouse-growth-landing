"use client";

import Image from "next/image";
import { Button } from "@/shared";
import { Routes } from "@/views/routes";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";
import { motion } from "framer-motion";

export const Hero = () => {
  const { hero } = useHomeDictionary();

  return (
    <section className="layout flex justify-between items-center h-[700px] sm:h-[800px] relative">
      <div className="flex flex-col w-full md:w-3/5">
        <motion.h1
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
              },
            },
          }}
          className="text-h1 inline-block"
          aria-hidden
        >
          {hero.title.split("").map((character, index) => (
            <motion.span
              variants={{
                hide: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className={character === " " ? "" : "inline-block"}
              key={`${character}-${index}`}
            >
              {character}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.5 },
          }}
          className="max-w-[450px] w-full mt-4 mb-9 text-xl"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
            },
          }}
        >
          <Button width="max" variant="primary" href={Routes.Contact}>
            {hero.cta}
          </Button>
        </motion.div>
      </div>

      <div className="h-full absolute hidden md:flex items-end right-0">
        <Image
          src="/lantern-hero.png"
          alt="Latern hero image"
          width={616}
          height={728}
        />
      </div>
    </section>
  );
};
