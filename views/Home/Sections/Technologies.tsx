import {
  ReactIcon,
  AngularIcon,
  VueIcon,
  Roku,
  Java,
  DotNet,
  Sap,
  IOSIcon,
  AndroidIcon,
} from "@/shared/icons/technologies";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";

export const Technologies = () => {
  const { technologies } = useHomeDictionary();

  return (
    <div className="mt-[100px]">
      <h3 className="text-2xl font-bold">{technologies.title}</h3>
      <ul className="w-full flex flex-wrap justify-start md:justify-between items-center gap-y-6 gap-x-10 mt-10">
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
          <IOSIcon />
        </li>
        <li>
          <AndroidIcon />
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
