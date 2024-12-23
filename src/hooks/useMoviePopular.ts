import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface PopularMovie {
  id: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
}

interface FetchedPopularMovie {
  results: PopularMovie[];
}

const useMoviePopular = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMovie"],

    queryFn: async () => {
      const response = await apiClient<FetchedPopularMovie>("/movie/popular");
      return response?.data;
    },
  });
  return { data, isLoading, error };
};

export default useMoviePopular;
