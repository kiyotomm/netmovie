import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface RecommendedMovie {
  id: string;
  backdrop_path: string;
  original_title: string;
}

interface FetchedMovieRecommended {
  results: RecommendedMovie[];
}

const useMovieReommended = (movieId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommended", movieId],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieRecommended>(
        `/movie/${movieId}/recommendations`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieReommended;
