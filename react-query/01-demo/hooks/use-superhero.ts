import { api } from "@/domain/remote";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchHero = ({ queryKey }: { queryKey: any }) => {
  const [, id] = queryKey;
  return api.get(`superheroes/${id}`).then((res) => res.data);
};

export const useSuperhero = (id: string, onSuccess: any, onError: any) => {
  const qc = useQueryClient();

  return useQuery(["superheroes", id], fetchHero, {
    onSuccess,
    onError,
    initialData: () => {
      const hero = qc
        .getQueryData<any[]>(["superheroes"])
        ?.find((hero) => hero.id === parseInt(id));
      if (!hero) {
        return undefined;
      }
      return hero;
    },
  });
};
