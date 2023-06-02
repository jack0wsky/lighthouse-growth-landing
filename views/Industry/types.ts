import { JSX } from "react";

export interface Project {
  title: string;
  aboutClient: string;
  scope: string;
  technologies: (() => JSX.Element)[];
  result: string;
}