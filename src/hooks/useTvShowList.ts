import apiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface TvShowList {
  id: string;
  original_name: string;
  poster_path: string;
  first_air_date: number;
  vote_average: number;
}

interface FetchedTvShowList {
  results: TvShowList[];
  page: number;
  total_pages: number;
}

const useTvShowList = (endPoint: string | undefined) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["tv show", endPoint],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await apiClient<FetchedTvShowList>(
          `/tv/${endPoint}?=page${pageParam}`
        );
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  return { data, isLoading, error, fetchNextPage, hasNextPage };
};

export default useTvShowList;
