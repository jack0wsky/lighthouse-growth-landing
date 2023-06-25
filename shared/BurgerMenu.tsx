"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowDown, XIcon } from "@/shared/icons";
import { Routes } from "@/views/routes";
import classNames from "classnames";
import { useHeaderDictionary } from "@/shared/dictionaries/useHeaderDictionary";

const IndustriesSubmenu = () => {
  const pathname = usePathname();
  return (
    <ul className="ml-4 mb-3">
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === Routes.Streaming,
          })}
          href={Routes.Streaming}
        >
          Streaming & Telecoms
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === Routes.Ecommerce,
          })}
          href={Routes.Ecommerce}
        >
          eCommerce
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === Routes.Logistics,
          })}
          href={Routes.Logistics}
        >
          Logistics
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === Routes.Sap,
          })}
          href={Routes.Sap}
        >
          ERP / SAP
        </Link>
      </li>
    </ul>
  );
};

export const BurgerMenu = () => {
  const pathname = usePathname();
  const { mainNavigation } = useHeaderDictionary();
  const [open, setOpen] = useState(false);
  const [expandIndustries, setExpandIndustries] = useState(false);

  useEffect(() => {
    if (pathname.includes("/industries")) setExpandIndustries(true);
  }, [pathname]);

  return (
    <div className="block md:hidden w-full fixed bottom-0 h-12 z-50">
      {open && (
        <ul className="flex flex-col w-full absolute bg-palette-black bottom-8 px-4 pt-3 pb-14 h-[370px]">
          <li className="w-full flex justify-between gap-x-4">
            <Link
              className="text-3xl text-white leading-10"
              href={Routes.Industries}
            >
              {mainNavigation.industries}
            </Link>
            <button
              className="w-full"
              onClick={() => setExpandIndustries((prevState) => !prevState)}
            >
              <ArrowDown
                className={classNames("text-white h-7 w-7", {
                  "rotate-180": expandIndustries,
                })}
              />
            </button>
          </li>
          {expandIndustries && <IndustriesSubmenu />}
          <Link className="text-3xl text-white leading-10" href={Routes.Values}>
            {mainNavigation.values}
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={Routes.Careers}
          >
            {mainNavigation.careers}
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={Routes.Contact}
          >
            {mainNavigation.contact}
          </Link>
        </ul>
      )}
      <button
        className="w-full h-full bg-palette-black flex items-center px-4 gap-x-3"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {open ? (
          <XIcon className="text-white h-6 w-6" />
        ) : (
          <Menu className="text-white h-6 w-6" />
        )}
        <p className="text-white">{open ? "Close" : "Menu"}</p>
      </button>
    </div>
  );
};
