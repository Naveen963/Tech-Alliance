import { useQuery } from "@tanstack/react-query";
import getUserData from "../services/getUserData";
export function useGetUserDetails(id) {
  const { isLoading, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(id),
  });
  return { isLoading, userData };
}
