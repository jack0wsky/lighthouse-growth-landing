"use client";

import { BurgerMenu } from "@/shared/BurgerMenu";
import { ContactUs } from "@/views/Home/Sections";
import { useValuesDictionary } from "@/views/Values/dictionaries/useValuesDictionary";
import { ValuesList } from "@/views/Values/Sections/ValuesList";
import { Gallery } from "@/views/Values/Sections/Gallery";

export const ValuesPage = () => {
  const { title, description } = useValuesDictionary();

  return (
    <>
      <main className="flex w-full flex-col items-center mt-40">
        <section className="w-full">
          <div className="w-full flex justify-center pb-11">
            <div className="layout">
              <h1 className="text-h1">{title}</h1>
              <p className="w-full sm:w-3/4 mt-8">{description}</p>
            </div>
          </div>

          <ValuesList />

          <Gallery />
        </section>

        <ContactUs />
      </main>

      <BurgerMenu />
    </>
  );
};
