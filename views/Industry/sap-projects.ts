import { Sap, SpartacusIcon } from "@/shared/icons/technologies";
import { LocalizedProject } from "@/views/Industry/types";

export const sapProjects: LocalizedProject[] = [
  {
    en: {
      title: "Finnish heavy equipment manufacturer",
      aboutClient:
        "Finnish manufacturer of cranes and lifting equipment, for industrial use. Client owns multiple brands and operates in many countries with some significant regionalization",
      scope:
        "Lighthouse works together with local Finnish partner on this complex project, leading on the front end architecture redesign. Existing solution was inefficient and not internally consistent with company identification.  Challenge was the broad scope of the project, including different brands and countries. Security and compliance working with listed company is ensured.",
      result:
        "Redesign and development of new intergrated platform is done in using latest technology - including new SAP Commerce Framework - Spartacus 6.0.",
      technologies: [Sap, SpartacusIcon],
    },
    de: {
      title: "Finnischer Hersteller von schwerem Gerät",
      aboutClient:
        "Finnischer Hersteller von Kränen und Hebegeräten für den industriellen Einsatz. Der Kunde besitzt mehrere Marken und ist in vielen Ländern tätig, wobei eine deutliche Regionalisierung zu erkennen ist.",
      scope:
        "Lighthouse arbeitet zusammen mit einem lokalen finnischen Partner an diesem komplexen Projekt und führt die Neugestaltung der Front-End-Architektur an. Die bestehende Lösung war ineffizient und nicht intern konsistent mit der Unternehmensidentifikation. Die Herausforderung bestand im umfangreichen Projektumfang, der verschiedene Marken und Länder umfasste. Die Sicherheit und Compliance bei der Zusammenarbeit mit einem börsennotierten Unternehmen ist gewährleistet.",
      result:
        "Das Redesign und die Entwicklung der neuen integrierten Plattform erfolgen unter Verwendung neuester Technologien, einschließlich des neuen SAP Commerce Frameworks - Spartacus 6.0.",
      technologies: [Sap, SpartacusIcon],
    },
  },
];
