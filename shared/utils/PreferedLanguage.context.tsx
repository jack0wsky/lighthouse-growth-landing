"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Languages } from "@/shared/dictionaries/languages";

interface PreferredLanguageContextProps {
  language: Languages;
  updateLanguage: (lang: Languages) => void;
}

const PreferredLanguageContext = createContext<PreferredLanguageContextProps>({
  language: "en",
  updateLanguage: () => {},
});

export const PreferredLanguageWrapper = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Languages>("en");

  return (
    <PreferredLanguageContext.Provider
      value={{ language: lang, updateLanguage: (lang) => setLang(lang) }}
    >
      {children}
    </PreferredLanguageContext.Provider>
  );
};

export const usePreferredLanguageContext = () =>
  useContext(PreferredLanguageContext);
