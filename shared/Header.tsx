"use client";

import { Button } from "@/shared/Button";
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

        <div className="flex items-center gap-x-24">
          <nav className="hidden sm:flex gap-x-24">
            <Link href={Routes.Industries}>Industries</Link>
            <Link href={Routes.Values}>Values</Link>
            <Link href={Routes.Careers}>Careers</Link>
          </nav>
          <Button variant="primary" width="max" href={Routes.Contact}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};
