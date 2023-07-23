import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";

const fetchHero = ({ queryKey }: { queryKey: any }) => {
  const [, id] = queryKey;
  return api.get(`superheroes/${id}`).then((res) => res.data);
};

export const useSuperhero = (id: string, onSuccess: any, onError: any) => {
  return useQuery(["superheroes", id], fetchHero, {
    onSuccess,
    onError,
  });
};
