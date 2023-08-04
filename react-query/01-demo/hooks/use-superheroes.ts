import { api } from "@/domain/remote";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchHeroes = () => api.get("superheroes").then((res) => res.data);

const addHero = (hero: any) => api.post("superheroes", hero);

export const useSuperheroes = (onSuccess: any, onError: any) => {
  return useQuery(["superheroes"], fetchHeroes, {
    onSuccess,
    onError,
    // select: (data) => data.map((el: any) => el.name),
  });
};

export const useAddSuperhero = () => {
  const qc = useQueryClient();

  return useMutation(addHero, {
    onSuccess: () => qc.invalidateQueries(["superheroes"]),
  });
};
