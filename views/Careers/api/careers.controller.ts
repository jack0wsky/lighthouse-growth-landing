import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import { CmsApiClient } from "@/api-client";

export const useListCareers = () => {
  const { lang } = useParams();
  const api = new CmsApiClient();

  const { data, isLoading } = useQuery("", async () => {
    return api.listOpenPositions(lang);
  });

  return {
    jobs: data || [],
  };
};
