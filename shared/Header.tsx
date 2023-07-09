"use client";

import { Button } from "@/shared/Button";
import { ArrowDown } from "@/shared/icons/ArrowDown";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Routes, useNavigation } from "@/views/routes";
import { useParams, usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { useHeaderDictionary } from "@/shared/dictionaries/useHeaderDictionary";
import { usePreferredLanguageContext } from "@/shared/utils/PreferedLanguage.context";

const Submenu = () => {
  const pathname = usePathname();
  const { industries } = useHeaderDictionary();
  const { navigateTo } = useNavigation();

  return (
    <nav className="invisible group-hover:visible absolute w-full bg-palette-black left-0 top-16">
      <div className="py-4 flex gap-x-6 justify-center">
        <div className="h-full">
          <Link
            className={classNames(
              "text-white flex items-center opacity-60 hover:opacity-100 transition-opacity",
              { "opacity-100": pathname.includes(Routes.Streaming) }
            )}
            href={navigateTo(Routes.Streaming)}
          >
            {industries.streaming}
          </Link>
          {pathname.includes(Routes.Streaming) && (
            <span className="block h-0.5 w-full bg-palette-yellow" />
          )}
        </div>
        <div className="h-full">
          <Link
            className={classNames(
              "text-white opacity-60 hover:opacity-100 transition-opacity",
              { "opacity-100": pathname.includes(Routes.Ecommerce) }
            )}
            href={navigateTo(Routes.Ecommerce)}
          >
            {industries.ecommerce}
          </Link>
          {pathname.includes(Routes.Ecommerce) && (
            <span className="block h-0.5 w-full bg-palette-yellow" />
          )}
        </div>
        <div className="h-full">
          <Link
            className={classNames(
              "text-white opacity-60 hover:opacity-100 transition-opacity",
              { "opacity-100": pathname.includes(Routes.Logistics) }
            )}
            href={navigateTo(Routes.Logistics)}
          >
            {industries.logistics}
          </Link>
          {pathname.includes(Routes.Logistics) && (
            <span className="block h-0.5 w-full bg-palette-yellow" />
          )}
        </div>
        <div className="h-full">
          <Link
            className={classNames(
              "text-white opacity-60 hover:opacity-100 transition-opacity",
              { "opacity-100": pathname.includes(Routes.Sap) }
            )}
            href={navigateTo(Routes.Sap)}
          >
            {industries.erpSap}
          </Link>
          {pathname.includes(Routes.Sap) && (
            <span className="block h-0.5 w-full bg-palette-yellow" />
          )}
        </div>
      </div>
    </nav>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useParams();
  const { mainNavigation } = useHeaderDictionary();

  const { navigateTo } = useNavigation();

  const { language, updateLanguage } = usePreferredLanguageContext();

  useEffect(() => {
    updateLanguage(lang);
  }, [lang]);

  return (
    <header className="w-full flex items-center justify-center h-16 px-5 fixed z-50 bg-white/90 backdrop-blur-md">
      <div className="layout flex items-center justify-between h-full">
        <Link href={navigateTo(Routes.Home)}>
          <Image
            src="/lighthouse-logo.png"
            width="41"
            height="56"
            alt="lighthouse logo"
          />
        </Link>

        <div className="flex items-center gap-x-24 h-full">
          <nav className="hidden sm:flex items-center gap-x-20 h-full">
            <div className="group h-full">
              <div className="h-full">
                <Link
                  className="px-4 h-full flex items-center gap-x-2"
                  href={navigateTo(Routes.Industries)}
                >
                  {mainNavigation.industries}
                  <ArrowDown className="group-hover:rotate-180 transition-transform" />
                </Link>
                {pathname.includes("/industries") && (
                  <span className="block h-0.5 w-full bg-palette-yellow" />
                )}
              </div>
              <Submenu />
            </div>
            <div className="h-full">
              <Link
                className="px-4 h-full flex items-center"
                href={navigateTo(Routes.Values)}
              >
                {mainNavigation.values}
              </Link>
              {pathname === "/values" && (
                <span className="block h-0.5 w-full bg-palette-yellow" />
              )}
            </div>

            <div className="h-full">
              <Link
                className="px-4 h-full flex items-center"
                href={navigateTo(Routes.Careers)}
              >
                {mainNavigation.careers}
              </Link>
              {pathname === "/careers" && (
                <span className="block h-0.5 w-full bg-palette-yellow" />
              )}
            </div>
          </nav>
          <div className="flex items-center gap-x-4">
            <Button
              variant="primary"
              width="max"
              href={Routes.Contact}
            >
              {mainNavigation.contact}
            </Button>

            <div className="flex items-center gap-x-3">
              <button
                className={classNames({ "font-bold": language === "en" })}
                onClick={() => {
                  updateLanguage("en");
                  router.push(pathname.replace("de", "en"));
                }}
              >
                EN
              </button>
              <button
                className={classNames({ "font-bold": language === "de" })}
                onClick={() => {
                  updateLanguage("de");
                  router.push(pathname.replace("en", "de"));
                }}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
