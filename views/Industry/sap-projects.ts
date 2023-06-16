import { Sap, SpartacusIcon } from "@/shared/icons/technologies";
import { Project } from "@/views/Industry/types";

export const sapProjects: Project[] = [
  {
    title: "Finnish heavy equipment manufacturer",
    aboutClient:
      "Finnish manufacturer of cranes and lifting equipment, for industrial use. Client owns multiple brands and operates in many countries with some significant regionalization",
    scope:
      "Lighthouse works together with local Finnish partner on this complex project, leading on the front end architecture redesign. Existing solution was inefficient and not internally consistent with company identification.  Challenge was the broad scope of the project, including different brands and countries. Security and compliance working with listed company is ensured.",
    result:
      "Redesign and development of new intergrated platform is done in using latest technology - including new SAP Commerce Framework - Spartacus 6.0.",
    technologies: [Sap, SpartacusIcon],
  },
];
