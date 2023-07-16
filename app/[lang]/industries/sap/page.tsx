"use client";

import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { useListProjects } from "@/views/Industry/api/projects.controller";

export default function Sap() {
  const { titles } = useIndustryDictionary();

  const { projects } = useListProjects("erp-sap");

  return (
    <IndustryTemplate
      title={titles.erpSap}
      illustration={
        <Image
          src="/sap-large.png"
          width={500}
          height={500}
          className="hidden md:flex"
          alt="sap / erp illustration"
        />
      }
      projects={projects}
    />
  );
}
