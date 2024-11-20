import Image from "next/image";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default function Ecommerce() {
  return (
    <IndustryTemplate
      title="Ecommerce"
      illustration={
        <Image
          src="/ecommerce-large.png"
          width={500}
          height={500}
          className="hidden md:flex"
          alt="ecommerce illustration"
        />
      }
      projects={[]}
    />
  );
}
