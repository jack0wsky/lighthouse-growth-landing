import { Languages } from "@/shared/dictionaries/languages";
import en from "./en.json";
import de from "./de.json";
import lt from "./lt.json";
import lv from "./lv.json";
import ee from "./ee.json";
import fi from "./fi.json";
import se from "./se.json";
import no from "./no.json";
import is from "./is.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  title: string;
  officesSection: {
    title: string;
    cities: {
      gdansk: string;
      warsaw: string;
    };
  };
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    nda: {
      label: string;
      yes: string;
      no: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    cta: string;
    consent: string;
    successTitle: string;
    successDescription: string;
  };
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en,
  de,
  lt,
  lv,
  ee,
  fi,
  se,
  no,
  is,
};

export const useContactDictionary = () => {
  const { lang } = useParams();

  return dictionaries[lang as Languages];
};
