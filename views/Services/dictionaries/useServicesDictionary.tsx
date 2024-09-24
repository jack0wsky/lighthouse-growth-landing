import { useParams } from "next/navigation";
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

interface DictionaryModel {
  heading: string;
  button: string;
  title: string;
  aboutUs: {
    title: string;
    descriptions: {
      first: string;
      second: string;
      third: string;
      forth: string;
    };
  };
  services: { title: string; list: string[] }[];
  ventilation: {
    title: string;
    description: string;
    list: string[];
    secondDescription: string;
    thirdDescription: string;
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

export const useServicesDictionary = () => {
  const params = useParams();
  return dictionaries[params.lang as Languages];
};
