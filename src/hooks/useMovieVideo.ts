import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface Video {
  key: string;
}

interface FetchedMovieVideo {
  id: number;
  results: Video[];
}

const useMovieVideo = (movieId: any) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["video"],
    queryFn: async () => {
      const response = await apiClient<FetchedMovieVideo>(
        `/movie/${movieId}/videos`
      );
      return response?.data;
    },
  });
  return { isLoading, data, error };
};

export default useMovieVideo;
