import { CmsApiClient } from "@/api-client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useListProjects = (
  industry: "streaming" | "ecommerce" | "logistics" | "erp-sap"
) => {
  const { lang } = useParams();
  const api = new CmsApiClient();
  const { data } = useQuery({
    queryKey: ["projects", industry],
    queryFn: async () => await api.listProjects(industry, lang),
  });

  return {
    projects: data || [],
  };
};
