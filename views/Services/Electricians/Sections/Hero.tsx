"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";
import { Button } from "@/shared";
import Image from "next/image";

export const Hero = () => {
  const { heading } = useServicesDictionary();
  return (
    <section className="h-[80vh] md:h-[55vh] py-20 flex flex-col items-center relative">
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center w-5/6 md:w-2/3 mb-10 mt-24">
        {heading}
      </h1>
      <Button width="max">Sprawdź usługi</Button>

      <Image
        src="/services/electrician-hero.png"
        alt="electrician"
        width={1100}
        height={300}
        className="absolute rounded-2xl -bottom-0 md:-bottom-[200px]"
      />
    </section>
  );
};
