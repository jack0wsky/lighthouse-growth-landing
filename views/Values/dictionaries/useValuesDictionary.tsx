import { Languages } from "@/shared/dictionaries/languages";
import en from "./en.json";
import de from "./de.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  title: string;
  description: string;
  paragraphs: {
    family: {
      title: string;
      content: string;
    };
    adventure: {
      title: string;
      content: string;
    };
    longGame: {
      title: string
      content: string
    }
  };
}

const dictionaries: Record<Languages, DictionaryModel> = {
  de,
  en,
};

export const useValuesDictionary = () => {
  const { lang } = useParams();

  return dictionaries[lang as Languages];
};
