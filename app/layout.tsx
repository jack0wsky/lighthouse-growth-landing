import { PropsWithChildren } from "react";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/shared";
import classNames from "classnames";
import { BurgerMenu } from "@/shared/BurgerMenu";

const Satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
});

export const metadata = {
  title: "Lighthouse Growth",
  description: "We are a software house",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={classNames(Satoshi.className, "bg-white")}>
        <main className="min-h-screen flex flex-col items-center relative">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
