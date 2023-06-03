"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { logisticsProjects } from "@/views/Industry/logistics-projects";
import Image from "next/image";

export default function Logistics() {
  return (
    <IndustryTemplate
      title="Logistics"
      illustration={
        <Image
          src="/logistics-large.png"
          width={500}
          height={400}
          className='hidden md:flex'
          alt="logistics illustration"
        />
      }
      projects={logisticsProjects}
    />
  );
}
