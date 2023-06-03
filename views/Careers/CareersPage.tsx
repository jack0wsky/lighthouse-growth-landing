import React from "react";
import { AnimatedTitle } from "@/animations/AnimatedTitle";
import { openPositions, OpenPosition } from "@/views/Careers/open-positions";
import Link from "next/link";
import {BurgerMenu} from "@/shared/BurgerMenu";

interface PositionProps {
  position: OpenPosition;
}

const Position = ({ position }: PositionProps) => {
  return (
    <li className="w-full p-5 rounded-lg bg-palette-black text-white h-[200px]">
      <Link
        className="w-full h-full flex flex-col justify-between"
        href={`/careers/${position.slug}`}
      >
        <h3 className="font-bold text-lg">{position.name}</h3>

        <div className="flex flex-col gap-y-4">
          <p className="text-palette-black font-bold">16 000 - 20 000 PLN</p>
          <p className="w-max">
            Apply now
            <span className="block w-full h-0.5 bg-palette-yellow" />
          </p>
        </div>
      </Link>
    </li>
  );
};

export const CareersPage = () => {
  return (
    <>
      <main className="w-full mt-40 flex flex-col items-center">
        <section className="layout">
          <AnimatedTitle>
            <h1 className="text-h1">Join our team</h1>
          </AnimatedTitle>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-7 pt-10 pb-16">
            {openPositions.map((position, index) => (
              <Position key={index} position={position} />
            ))}
          </ul>
        </section>
      </main>

      <BurgerMenu />
    </>
  );
};
