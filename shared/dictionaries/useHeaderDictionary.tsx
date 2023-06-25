import { Languages } from "@/shared/dictionaries/languages";
import en from "./en.json";
import de from "./de.json";
import { useParams } from "next/navigation";

interface DictionaryModel {
  mainNavigation: {
    industries: string;
    values: string;
    careers: string;
    contact: string;
  };
  industries: {
    streaming: string;
    ecommerce: string;
    logistics: string;
    erpSap: string;
  };
  openMenu: string
  closeMenu: string
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en,
  de,
};

export const useHeaderDictionary = () => {
  const { lang } = useParams();
  return dictionaries[lang as Languages];
};
