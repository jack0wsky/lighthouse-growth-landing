import { Languages } from "@/shared/dictionaries/languages";

export interface JobOffer {
  id: number;
  attributes: {
    title: string;
    requirements: string;
    locale: Languages;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
}
