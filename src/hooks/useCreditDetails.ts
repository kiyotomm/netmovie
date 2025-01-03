import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface FetchedCreditDetail {
  id: string;
  profile_path: string;
  gender: number;
  birthday: number;
  place_of_birth: string;
  biography: string;
  name: string;
  known_for_department: string;
}

const useCreditDetails = (creditId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credit", creditId],
    queryFn: async () => {
      const response = await apiClient<FetchedCreditDetail>(
        `/person/${creditId}`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useCreditDetails;
