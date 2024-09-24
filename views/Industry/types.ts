import { JSX } from "react";

export interface LocalizedProject {
  en: Project;
  de: Project;
  lt: Project;
  lv: Project;
  ee: Project;
  fi: Project;
  se: Project;
  no: Project;
  is: Project;
}

export interface Project {
  title: string;
  aboutClient: string;
  scope: string;
  technologies: (() => JSX.Element)[];
  result: string;
}
