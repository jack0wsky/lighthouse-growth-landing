"use client";

import Link from "next/link";
import Image from "next/image";
import { useHeaderDictionary } from "@/shared/dictionaries/useHeaderDictionary";
import { Routes, useNavigation } from "@/views/routes";

export const Footer = () => {
  const { mainNavigation, industries } = useHeaderDictionary();

  const { navigateTo } = useNavigation();

  return (
    <footer className="w-full bg-palette-black flex justify-center items-start text-white pt-12 pb-20">
      <div className="layout flex gap-x-20">
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

        <div>
          <ul className="text-sm flex flex-col gap-y-2.5">
            <li className="opacity-80 hover:opacity-100">
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

            <li className="opacity-80 hover:opacity-100">
              <a
                href="https://clutch.co/profile/lighthouse-growth-sp-z-oo#highlights"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-x-2"
              >
                <p>Clutch</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
