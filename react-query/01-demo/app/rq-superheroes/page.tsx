"use client";

import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";

const fetchHeroes = () => api.get("superheroes").then((res) => res.data);

export default function RQSuperHeroesPage() {
  const onSuccess = (data: any) => console.log("Query run successfully!", data);
  const onError = (err: any) => console.log("Error when running query!.", err);

  const { data, isFetching, error, isError, refetch } = useQuery(
    ["superheroes"],
    fetchHeroes,
    { onSuccess, onError }
  );

  if (isFetching) {
    return <p>Fetching...</p>;
  }

  if (isError) {
    return <p className="text-red-500">{(error as any).message}</p>;
  }

  return (
    <>
      <h2 className="text-4xl">RQ Super Heroes Page</h2>
      <button
        className="my-4 px-8 py-2 border border-pink-400 text-pink-400"
        onClick={() => refetch()}
      >
        Fetch Heroes
      </button>
      <div>
        {data?.map((el: any) => (
          <p key={el.id}>{el.name}</p>
        ))}
      </div>
    </>
  );
}
