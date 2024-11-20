"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";

export const AboutUs = () => {
  const { aboutUs } = useServicesDictionary();

  return (
    <section className="w-full flex justify-center bg-palette-grey-200 pt-10 md:pt-[280px] pb-20">
      <div className="layout">
        <h2 className="text-h2">{aboutUs.title}</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
          <p className="w-full font-base">{aboutUs.descriptions.first}</p>
          <p className="w-full font-base">{aboutUs.descriptions.second}</p>
          <p className="w-full font-base">{aboutUs.descriptions.third}</p>
          <p className="w-full font-base">{aboutUs.descriptions.forth}</p>
        </div>
      </div>
    </section>
  );
};
