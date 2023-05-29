import {
  ReactIcon,
  AngularIcon,
  VueIcon,
  Roku,
  Java,
  DotNet,
  Sap,
} from "@/shared/icons/technologies";

export const Technologies = () => {
  return (
    <div className="mt-[100px]">
      <h3 className="text-2xl font-bold">Technologies we use</h3>
      <ul className="flex flex-wrap items-center gap-y-6 gap-x-10 mt-10">
        <li>
          <ReactIcon />
        </li>
        <li>
          <AngularIcon />
        </li>
        <li>
          <VueIcon />
        </li>
        <li>
          <Roku />
        </li>
        <li>
          <Java />
        </li>
        <li>
          <DotNet />
        </li>
        <li>
          <Sap />
        </li>
      </ul>
    </div>
  );
};
