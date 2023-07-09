import { LocalizedProject } from "@/views/Industry/types";
import { AngularIcon, Java } from "@/shared/icons/technologies";

export const logisticsProjects: LocalizedProject[] = [
  {
    en: {
      title: "Development and refactoring of client's order management system.",
      aboutClient:
        "Swiss-based global transport and logistics company. It provides sea freight and airfreight forwarding, and contract logistics, on a truly global scale.",
      scope: `Complex project goal is to further develop vital order management platform used in multiple countries.
Lighthouse participate in the design, architecture, and delivery of new features.
Back-end and front-end solutions are delivered using: Java, Spring, Spring Boot, Hibernate, PostgreSQL, Docker, Spring Cloud, Angular, TypeScript.`,
      result: `Legacy system code is reviewed and refactored using latest technologies. Engineering team works in an agile team and in close collaboration with the client.`,
      technologies: [AngularIcon, Java],
    },
    de: {
      title:
        "Entwicklung und Refactoring des Bestellmanagementsystems des Kunden.",
      aboutClient:
        "Ein weltweit tätiges Transport- und Logistikunternehmen mit Sitz in der Schweiz. Es bietet weltweite Seefracht- und Luftfrachtförderung sowie Vertragslogistik in großem Maßstab.",
      scope: `Das komplexe Projektziel besteht darin, die wichtige Auftragsverwaltungsplattform, die in mehreren Ländern verwendet wird, weiterzuentwickeln.
Lighthouse beteiligt sich an der Gestaltung, Architektur und Bereitstellung neuer Funktionen.
Back-End- und Front-End-Lösungen werden mit Java, Spring, Spring Boot, Hibernate, PostgreSQL, Docker, Spring Cloud, Angular und TypeScript umgesetzt`,
      result: `Der Legacy-Systemcode wird unter Verwendung neuester Technologien überprüft und refaktorisiert. Das Engineering-Team arbeitet agil und in enger Zusammenarbeit mit dem Kunden.`,
      technologies: [AngularIcon, Java],
    },
  },
];
