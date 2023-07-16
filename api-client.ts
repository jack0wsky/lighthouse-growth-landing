import axios from "axios";
import { QueryClient } from "react-query";
import {
  Industry,
  JobOffer,
  Project,
  Testimonial,
  ValuesPage,
} from "@/types/cms-content";
import { Languages } from "@/shared/dictionaries/languages";

export const queryClient = new QueryClient();

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
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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
  async getValuesContent(): Promise<ValuesPage> {
    const response = await apiClient.get<SingleType<ValuesPage>>(
      "/values-page",
      {
        params: {
          "populate[values][populate][0]": "*",
        },
      }
    );
    return response.data.data.attributes;
  }
}
