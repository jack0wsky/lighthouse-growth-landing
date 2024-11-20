import { CmsApiClient } from "@/api-client";
import { useQuery } from "@tanstack/react-query";

export const useListTestimonials = () => {
  const api = new CmsApiClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => await api.listTestimonials(),
  });

  return {
    testimonialsList: data || [],
    loading: isLoading,
    error,
  };
};
