import Image from "next/image";
import { Button } from "@/shared";
import { AnimatedTitle } from "@/animations/AnimatedTitle";
import {Routes} from "@/views/routes";

export const Hero = () => {
  return (
    <section className="layout flex justify-between items-center h-[75vh] relative">
      <div className="flex flex-col">
        <h1 className="text-h1">
          <AnimatedTitle>
            <span>We’ll guide you</span>
            <span>in software</span>
          </AnimatedTitle>
        </h1>
        <p className="max-w-[450px] w-full mt-4 mb-9 text-xl">
          Lighthouse Growth is a Poland-based product development agency, with
          own engineering team and strong network in the industry.
        </p>
        <Button width="max" variant="primary" href={Routes.Contact}>
          Let's talk
        </Button>
      </div>

      <div className='h-full hidden md:flex items-end'>
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
