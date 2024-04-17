import Image from "next/image";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default function Streaming() {
  return (
    <IndustryTemplate
      industry="streaming"
      illustration={
        <Image
          src="/streaming-large.png"
          width={491}
          height={516}
          className="hidden md:flex"
          alt="illustration for streaming projects"
        />
      }
    />
  );
}
