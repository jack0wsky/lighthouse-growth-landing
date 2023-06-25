"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { ecommerceProjects } from "@/views/Industry/ecomerce-projects";
import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";

export default function Ecommerce() {
  const { titles } = useIndustryDictionary();

  return (
    <IndustryTemplate
      title={titles.ecommerce}
      illustration={
        <Image
          src="/ecommerce-large.png"
          width={500}
          height={500}
          className="hidden md:flex"
          alt="ecommerce illustration"
        />
      }
      projects={ecommerceProjects}
    />
  );
}
