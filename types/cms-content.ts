import { Languages } from "@/shared/dictionaries/languages";

export interface JobOffer {
  title: string;
  description: string;
  requirements: string;
  locale: Languages;
  responsibilities?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Testimonial {
  author: string;
  content: string;
  position: string;
  company: string;
}

export type Technology =
  | "react"
  | "vue"
  | "angular"
  | "android"
  | "ios"
  | "java"
  | "dotnet"
  | "roku"
  | "sap"
  | "spartacus";

export interface ProjectModel {
  id: number;
  attributes: Project;
}

export type Industry = "streaming" | "ecommerce" | "logistics" | "erp-sap";

export interface Media {
  id: number;
  attributes: { url: string };
}

export interface Project {
  title: string;
  aboutClient: string;
  industry: string;
  locale: Languages;
  result: string;
  scope: string;
  technologies: {
    data: {
      id: number;
      attributes: {
        name: Technology;
      };
    }[];
  };
}

export interface CompanyValue {
  id: number;
  title: string;
  content: string;
}

export interface ValuesPage {
  title: string;
  introduction: string;
  values: CompanyValue[];
  images: {
    data: Media[];
  };
}

export interface SEO {
  title: string;
  description: string;
}

export interface HomePage {
  heading: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}
