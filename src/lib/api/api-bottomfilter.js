import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByFilter } from "./api-filterpoto";


export function useFilterPhotosQuery(filter) {
  return useQuery({
    queryKey: ["photos", filter],
    queryFn: () => fetchPhotosByFilter(filter),
    enabled: false, 
  });
}
