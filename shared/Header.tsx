"use client";

import { Button } from "@/shared/Button";
import { ArrowDown } from "@/shared/icons/ArrowDown";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/views/routes";

export const Header = () => {
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
              <Link
                className="px-4 h-full flex items-center gap-x-2"
                href={Routes.Industries}
              >
                Industries
                <ArrowDown className='group-hover:rotate-180 transition-transform' />
              </Link>
              <nav className="invisible group-hover:visible absolute w-full bg-palette-black left-0 top-16">
                <div className="py-4 flex gap-x-6 justify-center">
                  <Link
                    className="text-white opacity-60 hover:opacity-100 transition-opacity"
                    href={Routes.Streaming}
                  >
                    Streaming & Telecoms
                  </Link>
                  <Link
                    className="text-white opacity-60 hover:opacity-100 transition-opacity"
                    href={Routes.Ecommerce}
                  >
                    eCommerce
                  </Link>
                  <Link
                    className="text-white opacity-60 hover:opacity-100 transition-opacity"
                    href={Routes.Logistics}
                  >
                    Logistics
                  </Link>
                  <Link
                    className="text-white opacity-60 hover:opacity-100 transition-opacity"
                    href={Routes.Sap}
                  >
                    ERP / SAP
                  </Link>
                </div>
              </nav>
            </div>
            <Link className="px-4" href={Routes.Values}>
              Values
            </Link>
            <Link className="px-4" href={Routes.Careers}>
              Careers
            </Link>
          </nav>
          <Button variant="primary" width="max" href={Routes.Contact}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};
