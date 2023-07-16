import {
  apiClient,
  CmsApiClient,
  CollectionTypeResponse,
  DataWrapper,
} from "@/api-client";
import { useQuery } from "react-query";
import { Project } from "@/types/cms-content";
import { useParams } from "next/navigation";

export const useListProjects = (
  industry: "streaming" | "ecommerce" | "logistics" | "erp-sap"
) => {
  const { lang } = useParams();
  const api = new CmsApiClient();
  const { data } = useQuery<DataWrapper<Project>[]>("projects", async () => {
    return await api.listProjects(industry, lang);
  });

  return {
    projects: data || [],
  };
};
