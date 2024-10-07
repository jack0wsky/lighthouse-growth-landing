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
  Contact = "/contact",
  Solutions = "/solutions",
  DigitalTransformation = "/solutions/digital-transformation",
  SapCommerce = "/solutions/sap-commerce",
}

export const useNavigation = () => {
  const { language } = usePreferredLanguageContext();

  const navigateTo = (route: Routes | string): string => {
    return `/${language}/${route}`;
  };

  return { navigateTo };
};
