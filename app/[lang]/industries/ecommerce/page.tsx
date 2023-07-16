"use client";

import Image from "next/image";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import { useListProjects } from "@/views/Industry/api/projects.controller";

export default function Ecommerce() {
  const { titles } = useIndustryDictionary();

  const { projects } = useListProjects("ecommerce");

  return (
    <IndustryTemplate
      title={titles.ecommerce}
      projects={projects}
      illustration={
        <Image
          src="/ecommerce-large.png"
          width={500}
          height={500}
          className="hidden md:flex"
          alt="ecommerce illustration"
        />
      }
    />
  );
}
