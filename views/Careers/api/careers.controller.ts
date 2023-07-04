import axios from "axios";
import { useQuery } from "react-query";
import { JobOffer } from "@/views/Careers/api/types";
import { useParams } from "next/navigation";

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  },
});

interface ApiResponse<TData> {
  data: TData;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const useListCareers = () => {
  const { lang } = useParams();

  const { data, isLoading } = useQuery<ApiResponse<JobOffer[]>>(
    "",
    async () => {
      const { data } = await client.get("/jobs", { params: { locale: lang } });
      return data;
    }
  );

  return {
    jobs: data?.data || [],
  };
};
