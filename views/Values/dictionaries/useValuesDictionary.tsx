import { Languages } from "@/shared/dictionaries/languages";
import en from "./en.json";
import de from "./de.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  title: string;
  description: string;
  paragraphs: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
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
