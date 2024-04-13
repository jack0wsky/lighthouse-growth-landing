import React from "react";
import { openPositions, OpenPosition } from "@/views/Careers/open-positions";
import Link from "next/link";
import { BurgerMenu } from "@/shared/BurgerMenu";
import { useCareersDictionary } from "@/views/Careers/dictionaries/useCareersDictionary";
import { useNavigation } from "@/views/routes";
import { motion } from "framer-motion";

interface PositionProps {
  position: OpenPosition;
}

const Position = ({ position }: PositionProps) => {
  const { cta } = useCareersDictionary();
  const { navigateTo } = useNavigation();

  return (
    <motion.li
      variants={{
        hide: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1 },
      }}
      whileHover={{
        y: -4,
      }}
      className="w-full p-5 rounded-lg bg-palette-black text-white h-[200px] hover:-translate-y-1.5 active:translate-y-1"
    >
      <Link
        className="w-full h-full flex flex-col justify-between"
        href={navigateTo(`careers/${position.slug}`)}
      >
        <h3 className="font-bold text-lg">{position.name}</h3>

        <div className="flex flex-col gap-y-4">
          <p className="text-palette-black font-bold">16 000 - 20 000 PLN</p>
          <p className="w-max">
            {cta}
            <span className="block w-full h-0.5 bg-palette-yellow" />
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

export const CareersPage = () => {
  const { title } = useCareersDictionary();

  return (
    <>
      <main className="w-full mt-40 flex flex-col items-center">
        <section className="layout">
          <motion.h1
            variants={{
              hide: {},
              show: {
                transition: {
                  bounce: 0,
                  ease: "easeInOut",
                  delay: 1,
                  duration: 1,
                  staggerChildren: 0.05,
                },
              },
            }}
            initial="hide"
            animate="show"
            className="text-h1"
          >
            {title.split("").map((letter, index) => (
              <motion.span
                className={letter === " " ? "" : "inline-block"}
                variants={{
                  hide: {
                    opacity: 0,
                    y: 20,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                key={`${letter}-${index}`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.ul
            initial="hide"
            animate="show"
            variants={{
              hide: {},
              show: {
                transition: {
                  bounce: 0,
                  duration: 2,
                  staggerChildren: 0.1,
                  delayChildren: 1,
                  ease: "easeInOut",
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-7 pt-10 pb-16"
          >
            {openPositions.map((position, index) => (
              <Position key={index} position={position} />
            ))}
          </motion.ul>
        </section>
      </main>

      <BurgerMenu />
    </>
  );
};
