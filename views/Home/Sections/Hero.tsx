import Image from "next/image";
import { Button } from "@/shared";
import { AnimatedTitle } from "@/animations/AnimatedTitle";
import { Routes } from "@/views/routes";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";

export const Hero = () => {
  const { hero } = useHomeDictionary();

  return (
    <section className="layout flex justify-between items-center h-[85vh] relative">
      <div className="flex flex-col w-full md:w-3/5">
        <h1 className="text-h1">
          <AnimatedTitle>
            {hero.title.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </AnimatedTitle>
        </h1>
        <p className="max-w-[450px] w-full mt-4 mb-9 text-xl">
          {hero.subtitle}
        </p>
        <Button width="max" variant="primary" href={Routes.Contact}>
          {hero.cta}
        </Button>
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
