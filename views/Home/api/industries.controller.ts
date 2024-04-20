import { useQuery } from "@tanstack/react-query";
import { Languages } from "@/shared/dictionaries/languages";
import { CmsApiClient } from "@/api-client";

export const useListIndustries = (lang: Languages) => {
  const api = new CmsApiClient();

  const { data } = useQuery({
    queryKey: ["industries", lang],
    queryFn: () => api.listIndustries(lang),
  });

  return { industriesList: data || [] };
};
