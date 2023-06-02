import { JSX } from "react";

interface ProjectTemplateProps {
  title: string;
  aboutClient: string;
  technologies: (() => JSX.Element)[];
  scope: string;
  result: string;
}
export const ProjectTemplate = ({
  title,
  aboutClient,
  technologies,
  scope,
  result,
}: ProjectTemplateProps) => {
  return (
    <main className="mt-14 bg-palette-grey-200 p-6 rounded-xl">
      <h2 className="text-4xl font-medium w-full md:w-1/3">{title}</h2>

      <div className="mt-[90px] w-full flex flex-col md:flex-row items-start gap-x-32">
        <div className="w-full md:w-1/2">
          <p className="font-bold text-xl">About client</p>
          <p className="mt-2">{aboutClient}</p>
        </div>

        <div className="w-full md:w-1/2 mt-16 md:mt-0">
          <p className="font-bold text-xl">Scope</p>
          <ul className="flex items-center gap-x-6 mt-4">
            {technologies.map((Technology, index) => {
              return <li key={index}>{<Technology />}</li>;
            })}
          </ul>
          <p className="mt-8">{scope}</p>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-bold text-xl">Result</p>
        <p className="w-full md:w-1/2 mt-4">{result}</p>
      </div>
    </main>
  );
};
