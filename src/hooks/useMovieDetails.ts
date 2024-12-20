import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface FetchedMovieDetails {
  original_title: string;
}

const useMovieDetails = (movieId: number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", movieId],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieDetails>(
        `/movie/${movieId}`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieDetails;
