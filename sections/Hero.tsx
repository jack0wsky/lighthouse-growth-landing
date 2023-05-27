import { PropsWithChildren, Children } from "react";
import Image from "next/image";
import { useTrail, a } from "@react-spring/web";
import { Button } from "@/shared";

const HeroTitle = ({ children }: PropsWithChildren<any>) => {
  const trail = useTrail(Children.toArray(children).length, {
    config: { mass: 2, tension: 2000, friction: 600, duration: 200 },
    opacity: 1,
    x: 0,
    height: 80,
    delay: 200,
    from: { opacity: 0, x: 10, height: 80 },
  });

  return (
    <div style={{ height: "200px" }}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className="" style={style}>
          <a.div style={{ height: "80px" }}>
            {Children.toArray(children)[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="max-w-[1100px] px-5 w-full flex justify-between items-center h-[80vh] relative">
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl font-bold sm:leading-tight">
          <HeroTitle>
            <span>We’ll guide you</span>
            <span>in software</span>
          </HeroTitle>
        </h1>
        <p className="max-w-[450px] w-full mt-4 mb-9">
          Lighthouse Growth is a Poland-based product development agency, with
          own engineering team and strong network in the industry.
        </p>
        <Button variant="primary" href="/contact">
          Let's talk
        </Button>
      </div>

      <div className="hidden md:flex justify-end h-full w-3/5 right-10 items-end">
        <Image src="/lantern-hero.png" alt="Latern hero image" width={561} height={663} />
      </div>
    </section>
  );
};
