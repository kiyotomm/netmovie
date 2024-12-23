import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface FetchedMovieDetails {
  backdrop_path: string;
  budget: string;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  vote_average: number;
}

const useMovieDetails = (movieId: string | undefined) => {
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
