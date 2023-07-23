"use client";

import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";

const fetchHeroes = () => api.get("superheroes").then((res) => res.data);

export default function RQSuperHeroesPage() {
  const { data, isLoading, error, isError } = useQuery(
    ["superheroes"],
    fetchHeroes
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500">{(error as any).message}</p>;
  }

  return (
    <>
      <h2 className="text-4xl">RQ Super Heroes Page</h2>
      <div>
        {data.map((el: any) => (
          <p key={el.id}>{el.name}</p>
        ))}
      </div>
    </>
  );
}
