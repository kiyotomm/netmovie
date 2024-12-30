import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface TopRated {
  id: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: number;
}

interface FetchedTopRatedMovie {
  results: TopRated[];
}

const useMovieTopRated = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top rated"],
    queryFn: async () => {
      const response = await apiClient<FetchedTopRatedMovie>(
        "/movie/top_rated"
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieTopRated;
