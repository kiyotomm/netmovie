import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface MovieSearch {
  id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: number;
  vote_average: number;
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
