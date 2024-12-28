import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface CreditMovie {
  id: string;
  original_title: string;
  poster_path: string;
}

interface FetchedCreditMovie {
  cast: CreditMovie[];
}

const useCreditMovie = (creditId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["creditMovie", creditId],
    queryFn: async () => {
      const response = await apiClient<FetchedCreditMovie>(
        `/person/${creditId}/movie_credits`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useCreditMovie;
