import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/shared";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>
        <main className="min-h-screen flex flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
