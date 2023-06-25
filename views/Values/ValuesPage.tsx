"use client";

import { BurgerMenu } from "@/shared/BurgerMenu";
import { ContactUs } from "@/views/Home/Sections";
import { useValuesDictionary } from "@/views/Values/dictionaries/useValuesDictionary";

export const ValuesPage = () => {
  const { title, description, paragraphs } = useValuesDictionary();

  return (
    <>
      <main className="flex w-full flex-col items-center mt-40">
        <section className="layout w-full flex flex-col">
          <h1 className="text-h1">{title}</h1>
          <p className="w-3/4 mt-8">{description}</p>

          <div className="w-full flex flex-wrap mt-16 gap-12 mb-32">
            <p className="w-full md:w-2/5">{paragraphs.paragraph1}</p>

            <p className="w-full md:w-2/5">{paragraphs.paragraph2}</p>

            <p className="w-full md:w-2/5">{paragraphs.paragraph3}</p>

            <p className="w-full md:w-2/5">{paragraphs.paragraph4}</p>

            <p className="w-full md:w-2/5">{paragraphs.paragraph5}</p>

            <p className="w-full md:w-2/5">{paragraphs.paragraph6}</p>
          </div>
        </section>

        <ContactUs />
      </main>

      <BurgerMenu />
    </>
  );
};
