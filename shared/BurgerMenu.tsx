"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Menu, ArrowDown, XIcon } from "@/shared/icons";
import { Routes, useNavigation } from "@/views/routes";
import { useHeaderDictionary } from "@/shared/dictionaries/useHeaderDictionary";

const IndustriesSubmenu = () => {
  const pathname = usePathname();
  const { industries } = useHeaderDictionary();
  const { navigateTo } = useNavigation();

  return (
    <ul className="ml-4 mb-3">
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.Streaming),
          })}
          href={navigateTo(Routes.Streaming)}
        >
          {industries.streaming}
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.Ecommerce),
          })}
          href={navigateTo(Routes.Ecommerce)}
        >
          {industries.ecommerce}
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.Logistics),
          })}
          href={navigateTo(Routes.Logistics)}
        >
          {industries.logistics}
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.Sap),
          })}
          href={navigateTo(Routes.Sap)}
        >
          {industries.erpSap}
        </Link>
      </li>
    </ul>
  );
};

const SolutionsSubmenu = () => {
  const pathname = usePathname();
  const { solutions } = useHeaderDictionary();
  const { navigateTo } = useNavigation();

  return (
    <ul className="ml-4 mb-3">
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.DigitalTransformation),
          })}
          href={navigateTo(Routes.DigitalTransformation)}
        >
          {solutions.digitalTransformation}
        </Link>
      </li>
      <li>
        <Link
          className={classNames("text-2xl text-white", {
            underline: pathname === navigateTo(Routes.SapCommerce),
          })}
          href={navigateTo(Routes.SapCommerce)}
        >
          {solutions.sapCommerce}
        </Link>
      </li>
    </ul>
  );
};

export const BurgerMenu = () => {
  const pathname = usePathname();
  const { navigateTo } = useNavigation();
  const { mainNavigation, openMenu, closeMenu } = useHeaderDictionary();
  const [open, setOpen] = useState(false);
  const [expandIndustries, setExpandIndustries] = useState(false);
  const [expandSolutions, setExpandSolutions] = useState(false);

  useEffect(() => {
    if (pathname.includes("/industries")) setExpandIndustries(true);
    if (pathname.includes("/solutions")) setExpandSolutions(true);
  }, [pathname]);

  return (
    <div className="block md:hidden w-full fixed bottom-0 h-12 z-50">
      {open && (
        <ul className="flex flex-col w-full absolute bg-palette-black bottom-8 px-4 pt-3 pb-14 h-[370px]">
          <li className="w-full flex justify-between gap-x-4">
            <Link
              className="text-3xl text-white leading-10"
              href={navigateTo(Routes.Industries)}
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
          <li className="w-full flex justify-between gap-x-4">
            <Link
              className="text-3xl text-white leading-10"
              href={navigateTo(Routes.Solutions)}
            >
              {mainNavigation.solutions}
            </Link>
            <button
              className="w-full"
              onClick={() => setExpandSolutions((prevState) => !prevState)}
            >
              <ArrowDown
                className={classNames("text-white h-7 w-7", {
                  "rotate-180": expandSolutions,
                })}
              />
            </button>
          </li>
          {expandSolutions && <SolutionsSubmenu />}
          <Link
            className="text-3xl text-white leading-10"
            href={navigateTo(Routes.Values)}
          >
            {mainNavigation.values}
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={navigateTo(Routes.Careers)}
          >
            {mainNavigation.careers}
          </Link>
          <Link
            className="text-3xl text-white leading-10"
            href={navigateTo(Routes.Contact)}
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
        <p className="text-white">{open ? closeMenu : openMenu}</p>
      </button>
    </div>
  );
};
