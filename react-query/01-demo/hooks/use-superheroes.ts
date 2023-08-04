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
    // onSuccess: () => qc.invalidateQueries(["superheroes"]),
    // onSuccess: (data: any) => {
    //   qc.setQueryData(["superheroes"], (oldData: any) => [
    //     ...oldData,
    //     data.data,
    //   ]);
    // },
    onMutate: async (newHero) => {
      await qc.cancelQueries(["superheroes"]);
      const prevHeroData = qc.getQueryData(["superheroes"]);
      qc.setQueryData(["superheroes"], (oldData: any) => [...oldData, newHero]);
      return { prevHeroData };
    },
    onError: (error: any, variables: any, context: any) => {
      qc.setQueryData(["superheroes"], context.prevHeroData);
    },
    onSettled: () => {
      qc.invalidateQueries(["superheroes"]);
    },
  });
};
