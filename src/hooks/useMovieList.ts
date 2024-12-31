import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export interface NowPlaying {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  media_type: string;
  release_date: number;
  vote_average: number;
}

interface FetchedMovieNowPlaying {
  results: NowPlaying[];
  page: number;
}

const useMovieList = (endPoint: string | undefined) => {
  const [page, setPage] = useState(0);
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useQuery({
    queryKey: ["nowPlaying", endPoint, page],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieNowPlaying>(
        `/movie/${endPoint}?=page${page}`
      );
      return response.data;
    },
  });
  return { data, isLoading, error, fetchNextPage, hasNextPage };
};

export default useMovieList;
