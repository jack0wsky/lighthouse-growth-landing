import { Languages } from "@/shared/dictionaries/languages";
import english from "./en.json";
import german from "./de.json";
import lithuanian from "./lt.json";
import latvian from "./lv.json";
import estonian from "./ee.json";
import finnish from "./fi.json";
import swedish from "./se.json";
import norwegian from "./no.json";
import icelandic from "./is.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  hero: { title: string; subtitle: string; cta: string };
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
  lt: lithuanian,
  lv: latvian,
  ee: estonian,
  fi: finnish,
  se: swedish,
  no: norwegian,
  is: icelandic,
};

export const useHomeDictionary = () => {
  const params = useParams();
  return dictionaries[params.lang as Languages];
};
