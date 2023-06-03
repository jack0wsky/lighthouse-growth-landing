'use client'

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { sapProjects } from "@/views/Industry/sap-projects";

export default function Sap() {
  return <IndustryTemplate title="ERP / SAP" projects={sapProjects} />;
}
