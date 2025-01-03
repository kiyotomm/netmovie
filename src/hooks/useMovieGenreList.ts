import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Genres {
  id: number;
  name: string;
}

interface FetchedMovieGenre {
  genres: Genres[];
}

const useMovieGenreList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genre"],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieGenre>("/genre/movie/list");
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useMovieGenreList;
