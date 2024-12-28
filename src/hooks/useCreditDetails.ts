import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface FetchedCreditDetail {
  id: string;
  profile_path: string;
  gender: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
  name: string;
}

const useCreditDetails = (creditId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credit"],
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
