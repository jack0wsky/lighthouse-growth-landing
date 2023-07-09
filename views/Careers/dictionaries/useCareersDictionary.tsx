"use client";

import en from "./en.json";
import de from "./de.json";
import { Languages } from "@/shared/dictionaries/languages";
import { useParams } from "next/navigation";

interface DictionaryModel {
  title: string;
  cta: string;
  back: string;
  recruiterPosition: string;
}

const dictionaries: Record<Languages, DictionaryModel> = {
  en,
  de,
};

export const useCareersDictionary = () => {
  const { lang } = useParams();
  return dictionaries[lang as Languages];
};
