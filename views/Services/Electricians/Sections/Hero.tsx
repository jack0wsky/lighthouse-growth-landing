"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";
import { Button } from "@/shared";
import Image from "next/image";

export const Hero = () => {
  const { heading, button } = useServicesDictionary();
  return (
    <section className="h-[600px] md:h-[700px] md:py-20 flex flex-col items-center relative px-4">
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center lg:w-4/6 md:w-full mb-10 mt-24">
        {heading}
      </h1>
      <Button width="max">{button}</Button>

      <div className="w-full h-[200px] md:w-[1100px] md:h-[500px] absolute -bottom-0 md:-bottom-[200px] mt-5">
        <Image
          src="/services/electrician-hero.jpg"
          alt="electrician"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};
