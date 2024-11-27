import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface Movie {
  original_title: string;
  id: number;
  poster_path: string;
  overview: string;
}

interface fetchedMovie {
  results: Movie[];
}

const useMovie = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const response = await apiClient<fetchedMovie>("/discover/movie");
      return response?.data;
    },
  });
  return { isLoading, data, error };
};

export default useMovie;

// const useBlog = () => {
//     const { isLoading, data, error } = useQuery({
//       queryKey: ["blog"],
//       queryFn: async () => {
//         const response = await fetcher<GetBlogResponseType>("/blog");
//         return response?.data;
//       },
//     });
//     return { isLoading, data, error };
//   };
