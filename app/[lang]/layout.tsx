import { PropsWithChildren } from "react";
import Script from "next/script";
import "../globals.css";
import localFont from "next/font/local";
import Head from "next/head";
import { Header } from "@/shared";
import classNames from "classnames";
import { Languages } from "@/shared/dictionaries/languages";
import { PreferredLanguageWrapper } from "@/shared/utils/PreferedLanguage.context";
import { Footer } from "@/shared/Footer";

const Satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
});

export const metadata = {
  title: "Lighthouse Growth",
  description: "We are a software house",
};

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: { lang: Languages } }>) {
  return (
    <html lang={params.lang}>
      <Head>
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.lighthouse-growth.com/en/"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.lighthouse-growth.com/de/"
        />
        <link
          rel="alternate"
          hrefLang="lt"
          href="https://www.lighthouse-growth.com/lt/"
        />
        <link
          rel="alternate"
          hrefLang="lv"
          href="https://www.lighthouse-growth.com/lv/"
        />
        <link
          rel="alternate"
          hrefLang="ee"
          href="https://www.lighthouse-growth.com/ee/"
        />
        <link
          rel="alternate"
          hrefLang="fi"
          href="https://www.lighthouse-growth.com/fi/"
        />
        <link
          rel="alternate"
          hrefLang="sv"
          href="https://www.lighthouse-growth.com/sv/"
        />
        <link
          rel="alternate"
          hrefLang="no"
          href="https://www.lighthouse-growth.com/no/"
        />
        <link
          rel="alternate"
          hrefLang="is"
          href="https://www.lighthouse-growth.com/is/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.lighthouse-growth.com/"
        />
      </Head>
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
      <body className={classNames(Satoshi.className, "bg-white")}>
        <main className="min-h-screen flex flex-col items-center relative">
          <PreferredLanguageWrapper>
            <Header />
            {children}
            <Script
              src="https://widget.clutch.co/static/js/widget.js"
              strategy="afterInteractive"
              type="text/javascript"
            />
            <Footer />
          </PreferredLanguageWrapper>
        </main>
      </body>
    </html>
  );
}
