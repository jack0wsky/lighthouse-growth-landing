import Image from "next/image";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default function Logistics() {
  return (
    <IndustryTemplate
      illustration={
        <Image
          src="/logistics-large.png"
          width={500}
          height={400}
          className="hidden md:flex"
          alt="logistics illustration"
        />
      }
      industry="logistics"
    />
  );
}
