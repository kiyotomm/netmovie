import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface PopularMovie {
  id: number;
  original_title: string;
  poster_path: string;
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
