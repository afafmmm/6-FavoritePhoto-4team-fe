import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByFilter } from "./api-filterpoto";

export function useFilterQuery(endpoint, filter) {
  return useQuery({
    queryKey: ["photos", endpoint, filter],
    queryFn: () => fetchPhotosByFilter(endpoint, filter),
    enabled: false,
    refetchInterval: 1000 * 60 * 1, 
  });
}
