"use client";
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
  mainNavigation: {
    industries: string;
    solutions: string;
    values: string;
    careers: string;
    blog: string;
    contact: string;
  };
  industries: {
    streaming: string;
    ecommerce: string;
    logistics: string;
    erpSap: string;
  };
  solutions: {
    digitalTransformation: string;
    sapCommerce: string;
  };
  openMenu: string;
  closeMenu: string;
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

export const useHeaderDictionary = () => {
  const { lang } = useParams();
  return dictionaries[lang as Languages];
};
