"use client";

import Link from "next/link";
import Image from "next/image";
import { useHeaderDictionary } from "@/shared/dictionaries/useHeaderDictionary";
import { Routes, useNavigation } from "@/views/routes";
import { BuyDRM } from "@/shared/icons";

export const Footer = () => {
  const { mainNavigation, industries } = useHeaderDictionary();

  const { navigateTo } = useNavigation();

  return (
    <footer className="w-full bg-palette-black flex justify-center items-start text-white pt-12 pb-20">
      <div className="layout flex flex-wrap gap-x-20">
        <div>
          <p>Industries</p>

          <ul className="text-sm mt-4 flex flex-col gap-y-2.5">
            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Streaming)}>
                {industries.streaming}
              </Link>
            </li>

            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Ecommerce)}>
                {industries.ecommerce}
              </Link>
            </li>

            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Logistics)}>
                {industries.logistics}
              </Link>
            </li>

            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Sap)}>{industries.erpSap}</Link>
            </li>
          </ul>
        </div>

        <div>
          <p>Company</p>

          <ul className="text-sm mt-4 flex flex-col gap-y-2.5">
            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Values)}>
                {mainNavigation.values}
              </Link>
            </li>

            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Careers)}>
                {mainNavigation.careers}
              </Link>
            </li>

            <li className="opacity-80 hover:opacity-100">
              <Link href={navigateTo(Routes.Contact)}>
                {mainNavigation.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <ul className="text-sm flex flex-col gap-y-2.5 mt-8 sm:mt-0">
            <li className="opacity-80 hover:opacity-100 flex items-center h-8 sm:h-auto">
              <a
                href="https://www.linkedin.com/company/lighthouse-growth/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-x-2"
              >
                <Image
                  src="/linkedin.svg"
                  width={20}
                  height={20}
                  alt="linkedin logo"
                />
                <p>LinkedIn</p>
              </a>
            </li>

            <li className="opacity-80 hover:opacity-100 flex items-center h-8 sm:h-auto">
              <a
                href="https://clutch.co/profile/lighthouse-growth-sp-z-oo#highlights"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-x-2"
              >
                <Image
                  src="/clutch.png"
                  width={20}
                  height={20}
                  alt="clutch logo"
                />
                <p>Clutch</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 sm:mt-0">
          <p>Partners</p>

          <ul className="text-sm mt-4 flex flex-col gap-y-2.5">
            <li>
              <a href="https://buydrm.com/" rel="noreferrer" target="_blank">
                <BuyDRM />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
