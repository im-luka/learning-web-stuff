"use client";

import { useSuperheroes } from "@/hooks/use-superheroes";

export default function RQSuperHeroesPage() {
  const onSuccess = (data: any) => console.log("Query run successfully!", data);
  const onError = (err: any) => console.log("Error when running query!.", err);

  const { data, isFetching, isError, error, refetch } = useSuperheroes(
    onSuccess,
    onError
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
        {/* 👉🏼 untransformed data */}
        {/* {data?.map((el: any) => (
          <p key={el.id}>{el.name}</p>
        ))} */}
        {/* 👉🏼 transformed data with - option "select" */}
        {data?.map((el: any) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </>
  );
}
