import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Movie {
  id: number;
  poster_path: string;
  release_date: number;
  original_title: string;
  vote_average: number;
}

interface FetchedUpComingMovie {
  results: Movie[];
}

const useMovieUpComing = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upComing"],
    queryFn: async () => {
      const response = await apiClient<FetchedUpComingMovie>(`/movie/upcoming`);
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieUpComing;
