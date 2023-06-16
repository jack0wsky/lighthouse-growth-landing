import { Project } from "@/views/Industry/types";
import { AngularIcon, Java } from "@/shared/icons/technologies";

export const logisticsProjects: Project[] = [
  {
    title: "Development and refactoring of client's order management system.",
    aboutClient:
      "Swiss-based global transport and logistics company. It provides sea freight and airfreight forwarding, and contract logistics, on a truly global scale.",
    scope: `Complex project goal is to further develop vital order management platform used in multiple countries.
Lighthouse participate in the design, architecture, and delivery of new features.
Back-end and front-end solutions are delivered using: Java, Spring, Spring Boot, Hibernate, PostgreSQL, Docker, Spring Cloud, Angular, TypeScript.`,
    result: `Legacy system code is reviewed and refactored using latest technologies. Engineering team works in an agile team and in close collaboration with the client.`,
    technologies: [AngularIcon, Java],
  },
];
