import { useParams } from "next/navigation";
import { Languages } from "@/shared/dictionaries/languages";
import english from "./en.json";
import german from "./de.json";

interface DictionaryModel {
  heading: string;
  title: string;
  aboutUs: {
    title: string;
    descriptions: {
      first: string;
      second: string;
      third: string;
    };
  };
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en: english,
  de: german,
};

export const useServicesDictionary = () => {
  const params = useParams();
  return dictionaries[params.lang as Languages];
};
