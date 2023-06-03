"use client";

import { Button } from "@/shared/Button";
import { ArrowDown } from "@/shared/icons/ArrowDown";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/views/routes";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Submenu = () => {
  const pathname = usePathname();

  return (
    <nav className="invisible group-hover:visible absolute w-full bg-palette-black left-0 top-16">
      <div className="py-4 flex gap-x-6 justify-center">
        <div className="h-full">
          <Link
            className={classNames(
              "text-white flex items-center opacity-60 hover:opacity-100 transition-opacity",
              { "opacity-100": pathname.includes(Routes.Streaming) }
            )}
            href={Routes.Streaming}
          >
            Streaming & Telecoms
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
            href={Routes.Ecommerce}
          >
            eCommerce
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
            href={Routes.Logistics}
          >
            Logistics
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
            href={Routes.Sap}
          >
            ERP / SAP
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

  return (
    <header className="w-full flex items-center justify-center h-16 px-5 fixed z-50 bg-white/90 backdrop-blur-md">
      <div className="layout flex items-center justify-between h-full">
        <Link href={Routes.Home}>
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
                  href={Routes.Industries}
                >
                  Industries
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
                href={Routes.Values}
              >
                Values
              </Link>
              {pathname === "/values" && (
                <span className="block h-0.5 w-full bg-palette-yellow" />
              )}
            </div>

            <div className="h-full">
              <Link
                className="px-4 h-full flex items-center"
                href={Routes.Careers}
              >
                Careers
              </Link>
              {pathname === "/careers" && (
                <span className="block h-0.5 w-full bg-palette-yellow" />
              )}
            </div>
          </nav>
          <Button variant="primary" width="max" href={Routes.Contact}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};
