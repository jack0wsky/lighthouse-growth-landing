"use client";

import { Button } from "@/shared/Button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-[1100px] w-full flex items-center justify-between h-16 px-5">
      <Link href="/">
        <Image src="/lighthouse-logo.png" width='41' height='56' alt="lighthouse logo" />
      </Link>

      <div className="flex items-center gap-x-24">
        <nav className="hidden sm:flex gap-x-24">
          <Link href="/">Industries</Link>
          <Link href="/">Values</Link>
          <Link href="/">Careers</Link>
        </nav>
        <Button variant="primary" href="/contact">
          Contact
        </Button>
      </div>
    </header>
  );
};
