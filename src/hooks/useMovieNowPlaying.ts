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

const useMovieNowPlaying = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieNowPlaying>(
        "/movie/now_playing"
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieNowPlaying;
