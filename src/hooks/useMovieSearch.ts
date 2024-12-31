import apiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  total_results: number;
  page: number;
  total_pages: number;
}

const useMovieSearch = (movieQuery: string | undefined) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["searchedMovie", movieQuery],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await apiClient<FetchedMovieSearch>(
          `/search/movie?page=${pageParam}`,
          {
            params: { query: movieQuery },
          }
        );
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  return { data, isLoading, error, fetchNextPage, hasNextPage };
};

export default useMovieSearch;
