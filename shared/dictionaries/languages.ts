export type Languages =
  | "en"
  | "de"
  | "lt"
  | "lv"
  | "ee"
  | "fi"
  | "se"
  | "no"
  | "is";

export const languages: Record<Languages, string> = {
  en: "English",
  de: "Deutsch",
  lt: "Lietuvių",
  lv: "Latviešu",
  ee: "Eesti",
  fi: "Suomi",
  se: "Svenska",
  no: "Norsk",
  is: "Íslenska",
};
