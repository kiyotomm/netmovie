import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface MovieSearch {
  id: string;
  original_title: string;
}

interface FetchedMovieSearch {
  results: MovieSearch[];
}

const useMovieSearch = (movieQuery: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchedMovie", movieQuery],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieSearch>(`/search/movie`, {
        params: { query: movieQuery },
      });
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieSearch;
