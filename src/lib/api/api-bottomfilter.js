import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByFilter } from "./api-filterpoto";


export function useFilterQuery(filter) {
  return useQuery({
    queryKey: ["photos", filter],
    queryFn: () => fetchPhotosByFilter(filter),
    enabled: false, 
    refetchInterval: 1000 * 60 * 1,
  });
}
