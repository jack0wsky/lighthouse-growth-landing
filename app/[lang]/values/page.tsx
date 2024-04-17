import { ValuesPage } from "@/views/Values/ValuesPage";
import { Languages } from "@/shared/dictionaries/languages";
import { CmsApiClient } from "@/api-client";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

const getData = async (lang: Languages) => {
  const api = new CmsApiClient();

  return await api.getValuesContent(lang);
};

export default async function Page({
  params,
}: {
  params: { lang: Languages };
}) {
  const data = await getData(params.lang);

  return (
    <ValuesPage
      title={data.title}
      introduction={data.introduction}
      images={data.images.data}
    />
  );
}
