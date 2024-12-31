import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

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
}

const useMovieList = (endPoint: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nowPlaying", endPoint],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieNowPlaying>(
        `/movie/${endPoint}`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieList;
