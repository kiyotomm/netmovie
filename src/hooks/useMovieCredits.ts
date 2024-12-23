import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Credit {
  known_for_department: string;
  name: string;
}

interface FetchedCredit {
  cast: Credit[];
}

const useMovieCredit = (creditPar: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credit", creditPar],
    queryFn: async () => {
      const response = await apiClient<FetchedCredit>(
        `/movie/${creditPar}/credits`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};
export default useMovieCredit;
