"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { logisticsProjects } from "@/views/Industry/logistics-projects";
import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";

export default function Logistics() {
  const { titles } = useIndustryDictionary();

  return (
    <IndustryTemplate
      title={titles.logistics}
      illustration={
        <Image
          src="/logistics-large.png"
          width={500}
          height={400}
          className="hidden md:flex"
          alt="logistics illustration"
        />
      }
      projects={logisticsProjects}
    />
  );
}
