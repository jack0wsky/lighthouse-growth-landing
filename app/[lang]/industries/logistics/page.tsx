"use client";

import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import { useListProjects } from "@/views/Industry/api/projects.controller";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";

export default function Logistics() {
  const { titles } = useIndustryDictionary();

  const { projects } = useListProjects("logistics");

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
      projects={projects}
    />
  );
}
