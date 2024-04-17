import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { CmsApiClient } from "@/api-client";

export const useListCareers = () => {
  const { lang } = useParams();
  const api = new CmsApiClient();

  const { data, isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => await api.listOpenPositions(lang),
  });

  return {
    jobs: data || [],
  };
};
