"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "@/shared/icons/Menu";
import { Routes } from "@/views/routes";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden w-full fixed bottom-0 h-12 z-50">
      {open && (
        <ul className="flex flex-col w-full absolute bg-palette-black bottom-8 px-4 pt-3 pb-14">
          <Link
            className="text-3xl text-white leading-10"
            href={Routes.Industries}
          >
            Industries
          </Link>
          <Link className="text-3xl text-white leading-10" href={Routes.Values}>
            Values
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={Routes.Careers}
          >
            Careers
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={Routes.Contact}
          >
            Contact
          </Link>
        </ul>
      )}
      <button
        className="w-full h-full bg-palette-black flex items-center px-4 gap-x-3"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <Menu className="text-white h-6 w-6" />
        <p className="text-white">Menu</p>
      </button>
    </div>
  );
};
