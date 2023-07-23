import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";

const fetchHeroes = () => api.get("superheroes").then((res) => res.data);

export const useSuperheroes = (onSuccess: any, onError: any) => {
  return useQuery(["superheroes"], fetchHeroes, {
    onSuccess,
    onError,
    select: (data) => data.map((el: any) => el.name),
  });
};
