'use client'

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { logisticsProjects } from "@/views/Industry/logistics-projects";

export default function Logistics() {
  return <IndustryTemplate title="Logistics" projects={logisticsProjects} />;
}
