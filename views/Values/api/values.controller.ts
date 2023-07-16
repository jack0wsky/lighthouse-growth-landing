import { CmsApiClient } from "@/api-client";
import { useQuery } from "react-query";
import { ValuesPage } from "@/types/cms-content";

export const useValuesPageContent = () => {
  const api = new CmsApiClient();

  const { data } = useQuery<ValuesPage>("values.page", async () => {
    return await api.getValuesContent();
  });

  return {
    content: data,
  };
};
