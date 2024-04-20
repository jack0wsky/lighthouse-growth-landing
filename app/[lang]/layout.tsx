import type { Metadata } from "next";

import { PropsWithChildren } from "react";
import Script from "next/script";
import "../globals.css";
import localFont from "next/font/local";
import { Header } from "@/shared";
import classNames from "classnames";
import { Languages } from "@/shared/dictionaries/languages";
import { PreferredLanguageWrapper } from "@/shared/utils/PreferedLanguage.context";
import { QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "@/shared/Footer";
import { queryClient } from "@/api-client";
import { Inter } from "next/font/google";

const Satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lighthouse Growth",
  description: "We are a software house",
};

const supportedLanguages = [
  { code: "en", url: "https://www.lighthouse-growth.com/en/" },
  { code: "de", url: "https://www.lighthouse-growth.com/de/" },
  { code: "lt", url: "https://www.lighthouse-growth.com/lt/" },
  { code: "lv", url: "https://www.lighthouse-growth.com/lv/" },
  { code: "ee", url: "https://www.lighthouse-growth.com/ee/" },
  { code: "fi", url: "https://www.lighthouse-growth.com/fi/" },
  { code: "sv", url: "https://www.lighthouse-growth.com/sv/" },
  { code: "no", url: "https://www.lighthouse-growth.com/no/" },
  { code: "is", url: "https://www.lighthouse-growth.com/is/" },
];


export default function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: { lang: Languages } }>) {
  return (
    <html lang={params.lang}>
      <head>
        {supportedLanguages.map(({ code, url }) => (
          <link key={code} rel="alternate" hrefLang={code} href={url} />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.lighthouse-growth.com/"
        />
      </head>
      <body className={classNames(Satoshi.className, "bg-white")}>
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JKTRGML2VR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JKTRGML2VR');`,
          }}
        />
        <main className="min-h-screen flex flex-col items-center relative">
          <PreferredLanguageWrapper>
            <QueryClientProvider client={queryClient}>
              <Header />
              {children}
              <Script
                src="https://widget.clutch.co/static/js/widget.js"
                strategy="afterInteractive"
                type="text/javascript"
              />
              <Footer />
            </QueryClientProvider>
          </PreferredLanguageWrapper>
        </main>
      </body>
    </html>
  );
}
