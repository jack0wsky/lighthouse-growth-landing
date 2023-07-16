import { AdventureIcon, FamilyIcon, HandShakeIcon } from "@/shared/icons";
import { ReactNode } from "react";
import { useValuesPageContent } from "@/views/Values/api/values.controller";

interface ValueProps {
  icon: ReactNode;
  title: string;
  content: string;
}
const Value = ({ icon, content, title }: ValueProps) => {
  return (
    <li>
      {icon}
      <h3 className="text-xl font-bold mt-5 mb-3.5">{title}</h3>
      <p className="w-full">{content}</p>
    </li>
  );
};

export const ValuesList = () => {
  const { content } = useValuesPageContent();

  return (
    <div className="w-full flex justify-center items-center bg-palette-grey-200">
      <ul className="w-full layout flex flex-wrap md:flex-nowrap mt-12 gap-12 mb-32">
        {content?.values.map((value) => (
          <Value
            key={value.id}
            icon={<FamilyIcon />}
            title={value.title}
            content={value.content}
          />
        ))}
      </ul>
    </div>
  );
};
