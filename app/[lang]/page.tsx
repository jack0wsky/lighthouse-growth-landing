import { HomePage } from "@/views/Home/HomePage";
import { CmsApiClient } from "@/api-client";
import { Languages } from "@/shared/dictionaries/languages";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

const getData = async (lang: Languages) => {
  const api = new CmsApiClient();
  const response = await api.getHomePageContent(lang || "en");
  return {
    heading: response?.heading || "",
    description: response?.description || "",
  };
};

export default async function Home({
  params,
}: {
  params: { lang: Languages };
}) {
  const { heading, description } = await getData(params.lang);

  // @ts-ignore
  return <HomePage title={heading} description={description} />;
}
