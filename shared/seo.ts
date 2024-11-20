import { CmsApiClient } from "@/api-client";
import { Metadata } from "next";

export const generateSEOMetadata = async (): Promise<Metadata> => {
  const api = new CmsApiClient();

  const { title, description } = await api.getMetadata("en");

  return {
    title,
    description,
  };
};
