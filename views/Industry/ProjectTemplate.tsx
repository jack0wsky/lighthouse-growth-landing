"use client";

import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import type { Project, Technology } from "@/types/cms-content";
import {
  ReactIcon,
  IOSIcon,
  SpartacusIcon,
  AngularIcon,
  AndroidIcon,
  Sap,
  Java,
  VueIcon,
  Roku,
  DotNet,
} from "@/shared/icons/technologies";

const TechnologyRender = ({ name }: { name: Technology }) => {
  if (name === "react") return <ReactIcon />;
  if (name === "ios") return <IOSIcon />;
  if (name === "android") return <AndroidIcon />;
  if (name === "spartacus") return <SpartacusIcon />;
  if (name === "vue") return <VueIcon />;
  if (name === "java") return <Java />;
  if (name === "sap") return <Sap />;
  if (name === "angular") return <AngularIcon />;
  if (name === "roku") return <Roku />;
  if (name === "dotnet") return <DotNet />;

  return null;
};

interface ProjectTemplateProps {
  project: Project;
}
export const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  const {
    aboutClient: aboutClientText,
    result: resultTest,
    scope: scopeText,
  } = useIndustryDictionary();

  return (
    <main className="mt-14 bg-palette-grey-200 p-6 rounded-xl">
      <h2 className="text-4xl font-medium w-full">{project.title}</h2>

      <div className="mt-[90px] w-full flex flex-col md:flex-row items-start gap-x-32">
        <div className="w-full md:w-1/2">
          <p className="font-bold text-xl">{aboutClientText}</p>
          <p className="mt-2">{project.aboutClient}</p>
        </div>

        <div className="w-full md:w-1/2 mt-16 md:mt-0">
          <p className="font-bold text-xl">{scopeText}</p>
          {project.technologies.data.length > 0 && (
            <ul className="flex items-center gap-x-6 mt-4 mb-8">
              {project.technologies.data.map((technology) => (
                <li key={technology.id}>
                  <TechnologyRender name={technology.attributes.name} />
                </li>
              ))}
            </ul>
          )}
          <p className="mt-2">{project.scope}</p>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-bold text-xl">{resultTest}</p>
        <p className="w-full md:w-1/2 mt-4">{project.result}</p>
      </div>
    </main>
  );
};
