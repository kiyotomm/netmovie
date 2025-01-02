import apiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface PeopleList {
  id: string;
  name: string;
  known_for_department: string;
  profile_path: string;
}

interface FetchPeopleList {
  results: PeopleList[];
  total_pages: number;
  page: number;
}

const usePeopleList = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["people"],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await apiClient<FetchPeopleList>(
          `/person/popular?page=${pageParam}`
        );
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  return { data, isLoading, error, hasNextPage, fetchNextPage };
};

export default usePeopleList;
