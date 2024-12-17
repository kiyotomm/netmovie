import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface Trending {
  id: number;
  poster_path: string;
  original_title: string;
}

interface fetchedMovieTrending {
  results: Trending[];
}

const useMovieTrending = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const response = await apiClient<fetchedMovieTrending>(
        `/trending/movie/day`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieTrending;
