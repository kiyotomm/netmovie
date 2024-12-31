import apiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface NowPlaying {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  media_type: string;
  release_date: number;
  vote_average: number;
  genre_ids: string;
}

interface FetchedMovieNowPlaying {
  results: NowPlaying[];
  page: number;
  total_pages: number;
}

const useMovieList = (endPoint: string | undefined) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["now playing", endPoint],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await apiClient<FetchedMovieNowPlaying>(
          `/movie/${endPoint}?page=${pageParam}`
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

export default useMovieList;
