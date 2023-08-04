"use client";

import { useAddSuperhero, useSuperheroes } from "@/hooks/use-superheroes";
import Link from "next/link";
import { useState } from "react";

export default function RQSuperHeroesPage() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data: any) => console.log("Query run successfully!", data);
  const onError = (err: any) => console.log("Error when running query!.", err);

  const { mutate } = useAddSuperhero();

  const { data, isFetching, isError, error, refetch } = useSuperheroes(
    onSuccess,
    onError
  );

  const handleAddHero = () => {
    const hero = { name, alterEgo };
    mutate(hero);
  };

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
        {/* 👉🏼 untransformed data */}
        {data?.map((el: any) => (
          <div key={el.id} className="mb-2 p-4 bg-emerald-400 rounded-sm">
            <Link
              href={`rq-superheroes/${el.id}`}
              className="text-lg font-semibold italic text-slate-900"
            >
              {el.name}
            </Link>
          </div>
        ))}
        {/* 👉🏼 transformed data with - option "select" */}
        {/* {data?.map((el: any) => (
          <p key={el}>{el}</p>
        ))} */}
      </div>

      <div className="mt-8">
        <p className="text-2xl mb-2">Add a Super Hero</p>
        <div className="flex flex-col items-start gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-slate-800"
          />
          <input
            type="text"
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
            className="text-slate-800"
          />
          <button
            className="px-4 py-1 border border-red-500"
            onClick={handleAddHero}
          >
            Add!
          </button>
        </div>
      </div>
    </>
  );
}
