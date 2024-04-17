import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import {
  HomePage,
  Industry,
  JobOffer,
  Media,
  Project,
  SEO,
  Testimonial,
  ValuesPage,
} from "@/types/cms-content";
import { Languages } from "@/shared/dictionaries/languages";

export const queryClient = new QueryClient();

interface IndustryEntry {
  title: string;
  illustration: { data: Media };
}

interface Metadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface DataWrapper<TData> {
  id: number;
  attributes: TData;
}

export interface SingleType<TData> {
  data: DataWrapper<TData>;
  meta: Metadata;
}

export interface CollectionTypeResponse<TData> {
  data: DataWrapper<TData>[];
  meta: Metadata;
}

export const apiClient = axios.create({
  baseURL: `${
    process.env.LOCAL_API_URL || process.env.NEXT_PUBLIC_LOCAL_API_URL
  }/api`,
  headers: {
    Authorization: `Bearer ${
      process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_TOKEN
    }`,
  },
});

export class CmsApiClient {
  async listOpenPositions(lang: Languages) {
    const response = await apiClient.get<CollectionTypeResponse<JobOffer>>(
      "/jobs",
      {
        params: {
          locale: lang,
        },
      }
    );

    return response.data.data;
  }
  async listTestimonials() {
    const response = await apiClient.get<CollectionTypeResponse<Testimonial>>(
      "/testimonials"
    );

    return response.data.data;
  }
  async listProjects(industry: Industry, lang: Languages) {
    const response = await apiClient.get<CollectionTypeResponse<Project>>(
      "/projects",
      {
        params: {
          locale: lang,
          "populate[0]": "technologies",
          "filters[industry][$eq]": industry,
        },
      }
    );

    return response.data.data;
  }

  async listIndustries(lang: Languages) {
    const response = await apiClient.get<CollectionTypeResponse<IndustryEntry>>(
      "/industries",
      {
        params: {
          locale: lang,
          populate: "illustration",
        },
      }
    );

    return response.data.data;
  }

  async getHomePageContent(locale: Languages) {
    try {
      const { data } = await apiClient.get<SingleType<HomePage>>("/home-page", {
        params: { locale },
      });

      return data.data.attributes;
    } catch (error) {}
  }
  async getValuesContent(locale: Languages): Promise<ValuesPage> {
    const response = await apiClient.get<SingleType<ValuesPage>>(
      `/values-page`,
      {
        params: {
          locale,
          "populate[values]": "*",
          "populate[images]": "*",
        },
      }
    );

    return response.data.data.attributes;
  }

  async getMetadata(locale: Languages) {
    const response = await apiClient.get<SingleType<SEO>>("/seo", {
      params: { locale },
    });

    return response.data.data.attributes;
  }
}
