"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { sapProjects } from "@/views/Industry/sap-projects";
import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";

export default function Sap() {
  const { titles } = useIndustryDictionary();

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
      projects={sapProjects}
    />
  );
}
