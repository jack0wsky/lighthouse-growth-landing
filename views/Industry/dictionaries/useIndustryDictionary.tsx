import { Languages } from "@/shared/dictionaries/languages";
import en from "./en.json";
import de from "./de.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  titles: {
    streaming: string;
    ecommerce: string;
    logistics: string;
    erpSap: string;
  };
  projectsTitle: string;
  scope: string;
  aboutClient: string;
  result: string;
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en,
  de,
};
export const useIndustryDictionary = () => {
  const { lang } = useParams();
  return dictionaries[lang as Languages];
};
