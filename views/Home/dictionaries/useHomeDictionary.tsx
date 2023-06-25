import { Languages } from "@/shared/dictionaries/languages";
import english from "./en.json";
import german from "./de.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  hero: { title: string[]; subtitle: string; cta: string };
  aboutUs: { title: string; descriptions: string[]; cta: string };
  technologies: {
    title: string;
  };
  industries: {
    title: string;
    cta: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    cta: string;
    position: string;
  };
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en: english,
  de: german,
};

export const useHomeDictionary = () => {
  const params = useParams();
  return dictionaries[params.lang as Languages];
};
