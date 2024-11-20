import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
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
  BlogPost,
} from "@/types/cms-content";
import { Languages } from "@/shared/dictionaries/languages";

// Base configuration
const API_CONFIG = {
  baseURL: `${process.env.LOCAL_API_URL || process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`,
  timeout: 10000,
  retries: 3,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  },
} as const;

// Enhanced QueryClient with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: API_CONFIG.retries,
      refetchOnWindowFocus: false,
    },
  },
});

// Types
interface BaseCmsContent {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  locale: Languages;
}

interface DataWrapper<T> {
  id: number;
  attributes: BaseCmsContent & T;
}

interface ApiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

type SingleResponse<T> = ApiResponse<DataWrapper<T>>;
type CollectionResponse<T> = ApiResponse<DataWrapper<T>[]>;

// API Error handling
class ApiError extends Error {
  constructor(public status: number, message: string, public data?: any) {
    super(message);
    this.name = 'ApiError';
  }
}

// API Client Class
export class CmsApiClient {
  private client: AxiosInstance;
  private controller: AbortController;

  constructor(config: AxiosRequestConfig = {}) {
    this.controller = new AbortController();
    this.client = axios.create({
      ...API_CONFIG,
      ...config,
      signal: this.controller.signal,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response) {
          throw new ApiError(
            error.response.status,
            error.response.data?.error?.message || 'API Error',
            error.response.data
          );
        }
        throw new Error('Network error');
      }
    );
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client.request<T>(config);
      return response.data;
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        return null as T;
      }
      throw error;
    }
  }

  private getParams(locale: Languages, options: Record<string, any> = {}) {
    return {
      locale,
      ...options,
    };
  }

  // API Methods
  async listOpenPositions(locale: Languages) {
    return this.request<CollectionResponse<JobOffer>>({
      method: 'GET',
      url: '/jobs',
      params: this.getParams(locale),
    }).then(response => response.data);
  }

  async listTestimonials() {
    return this.request<CollectionResponse<Testimonial>>({
      method: 'GET',
      url: '/testimonials',
    }).then(response => response.data);
  }

  async listProjects(industry: Industry, locale: Languages) {
    return this.request<CollectionResponse<Project>>({
      method: 'GET',
      url: '/projects',
      params: this.getParams(locale, {
        'populate[0]': 'technologies',
        'filters[industry][$eq]': industry,
      }),
    }).then(response => response.data);
  }

  async listIndustries(locale: Languages) {
    return this.request<CollectionResponse<{ title: string; illustration: { data: Media } }>>({
      method: 'GET',
      url: '/industry',
      params: this.getParams(locale, {
        populate: 'illustration',
      }),
    }).then(response => response.data);
  }

  async getHomePageContent(locale: Languages) {
    return this.request<SingleResponse<HomePage>>({
      method: 'GET',
      url: '/home-page',
      params: this.getParams(locale),
    }).then(response => response.data.attributes);
  }

  async getValuesContent(locale: Languages) {
    return this.request<SingleResponse<ValuesPage>>({
      method: 'GET',
      url: '/values-page',
      params: this.getParams(locale, {
        'populate[values]': '*',
        'populate[images]': '*',
      }),
    }).then(response => response.data.attributes);
  }

  async getMetadata(locale: Languages) {
    return this.request<SingleResponse<SEO>>({
      method: 'GET',
      url: '/seo',
      params: this.getParams(locale),
    }).then(response => response.data.attributes);
  }

  async getBlogPosts(locale: Languages, page = 1, pageSize = 9) {
    return this.request<CollectionResponse<BlogPost>>({
      method: 'GET',
      url: '/blog-posts',
      params: this.getParams(locale, {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'sort[0]': 'publishedAt:desc',
      }),
    }).then(response => response.data);
  }

  async getBlogPostBySlug(slug: string, locale: Languages) {
    return this.request<CollectionResponse<BlogPost>>({
      method: 'GET',
      url: '/blog-posts',
      params: this.getParams(locale, {
        'filters[slug][$eq]': slug,
      }),
    }).then(response => response.data[0]);
  }

  // Utility methods
  cancelRequests() {
    this.controller.abort();
    this.controller = new AbortController();
    this.client.defaults.signal = this.controller.signal;
  }
}

// Export singleton instance
export const cmsApi = new CmsApiClient();
