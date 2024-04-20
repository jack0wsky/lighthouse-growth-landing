import Image from "next/image";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default function Sap() {
  return (
    <IndustryTemplate
      industry="erp-sap"
      illustration={
        <Image
          src="/sap-large.png"
          width={500}
          height={500}
          className="hidden md:flex"
          alt="sap / erp illustration"
        />
      }
    />
  );
}
