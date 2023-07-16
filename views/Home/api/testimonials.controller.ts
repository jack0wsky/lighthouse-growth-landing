import { CmsApiClient, DataWrapper } from "@/api-client";
import { useQuery } from "react-query";
import { Testimonial } from "@/types/cms-content";

export const useListTestimonials = () => {
  const api = new CmsApiClient();

  const { data, isLoading, error } = useQuery<DataWrapper<Testimonial>[]>(
    "testimonials",
    async () => {
      return await api.listTestimonials();
    }
  );

  return {
    testimonialsList: data || [],
    loading: isLoading,
    error,
  };
};
