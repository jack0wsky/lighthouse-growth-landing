"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";

export const AboutUs = () => {
  const { aboutUs } = useServicesDictionary();

  return (
    <section className="w-full flex justify-center bg-palette-grey-200 pt-10 md:pt-[280px] pb-20">
      <div className="layout">
        <h2 className="text-h2">{aboutUs.title}</h2>

        <div className="mt-12 flex flex-wrap gap-x-32 gap-y-10 w-full">
          <p className="w-full md:w-1/3 font-base">{aboutUs.descriptions.first}</p>
          <p className="w-full md:w-1/3 font-base">{aboutUs.descriptions.second}</p>
          <p className='w-full md:w-3/4 font-base'>{aboutUs.descriptions.third}</p>
        </div>
      </div>
    </section>
  );
};
