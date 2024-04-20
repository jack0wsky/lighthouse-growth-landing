import { usePreferredLanguageContext } from "@/shared/utils/PreferedLanguage.context";

export enum Routes {
  Home = "/",
  Industries = "/industries",
  Streaming = "/industries/streaming",
  Ecommerce = "/industries/ecommerce",
  Logistics = "/industries/logistics",
  Sap = "/industries/sap",
  Values = "/values",
  Careers = "/careers",
  Blog = '/blog',
  Contact = "/contact",
}

export const useNavigation = () => {
  const { language } = usePreferredLanguageContext();

  const navigateTo = (route: Routes | string): string => {
    return `/${language}/${route}`;
  };

  return { navigateTo };
};
