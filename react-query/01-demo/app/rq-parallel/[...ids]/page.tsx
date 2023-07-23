"use client";

import { api } from "@/domain/remote";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const fetchHero = (id: string) =>
  api.get(`superheroes/${id}`).then((res) => res.data);

export default function RQParallelDynamicPage() {
  const { ids } = useParams();

  const results = useQueries({
    queries: (ids as string[]).map((id: any) => ({
      queryKey: ["superhero", id],
      queryFn: () => fetchHero(id),
    })),
  });
  console.log(results);

  return <p>Parallel Dynamic Page</p>;
}
