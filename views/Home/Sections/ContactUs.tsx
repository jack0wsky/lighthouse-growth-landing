"use client";

import Image from "next/image";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";
import { Button } from "@/shared";
import { Routes } from "@/views/routes";

const ContactContainer = () => {
  const { contact } = useHomeDictionary();

  return (
    <div className="md:max-w-[350px] flex flex-col w-full p-5 rounded-2xl bg-palette-black mt-5 md:mt-0 z-10">
      <div className="flex items-center gap-x-4 mb-9">
        <Image
          src="/jakub-szudejko.png"
          alt="Image of Jakub Szudejko - COO"
          width={68}
          height={68}
        />
        <div className="flex flex-col gap-x-1">
          <p className="font-bold text-white">Jakub Szudejko</p>
          <p className="text-xs opacity-60 text-white">{contact.position}</p>
        </div>
      </div>

      <Button width="full" variant="secondary" href={Routes.Contact}>
        {contact.cta}
      </Button>
    </div>
  );
};
export const ContactUs = () => {
  const { contact } = useHomeDictionary();

  return (
    <section className="layout flex flex-col items-start md:flex-row justify-center md:items-center gap-x-12 py-[140px]">
      <div>
        <h3
          className="text-h2 md:text-right leading-normal"
          dangerouslySetInnerHTML={{ __html: contact.title }}
        />
      </div>

      <ContactContainer />

      <div className="absolute md:block hidden">
        <Image
          src="/strokes-contact.png"
          alt="abstract strokes"
          height={505}
          width={435}
        />
      </div>
    </section>
  );
};
