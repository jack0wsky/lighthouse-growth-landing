"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { sapProjects } from "@/views/Industry/sap-projects";
import Image from "next/image";

export default function Sap() {
  return (
    <IndustryTemplate
      title="ERP / SAP"
      illustration={
        <Image
          src="/sap-large.png"
          width={500}
          height={500}
          className='hidden md:flex'
          alt="sap / erp illustration"
        />
      }
      projects={sapProjects}
    />
  );
}
