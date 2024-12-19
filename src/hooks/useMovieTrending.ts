import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Trending {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  media_type: string;
  release_date: number;
  vote_average: number;
}

interface fetchedMovieTrending {
  results: Trending[];
}

const useMovieTrending = (date: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending", date],
    queryFn: async () => {
      const response = await apiClient<fetchedMovieTrending>(
        `/trending/movie/${date}`
      );
      return response.data;
    },
    placeholderData: (previousData) => previousData,
  });
  return { data, isLoading, error };
};

export default useMovieTrending;
