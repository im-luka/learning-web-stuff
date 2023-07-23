"use client";

import { useSuperhero } from "@/hooks/use-superhero";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SuperheroPage() {
  const { id } = useParams();
  const onSuccess = (data: any) => console.log("Query run successfully!", data);
  const onError = (err: any) => console.log("Error when running query!.", err);

  const { data, isLoading } = useSuperhero(id as string, onSuccess, onError);
  const { id: dataId, name, alterEgo } = data ?? {};

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="flex gap-8">
        <Link href="/rq-superheroes">Go back</Link>
        <h1 className="text-2xl mb-4">Hero Page</h1>
      </div>
      <p className="text-lg">{dataId}</p>
      <p className="text-lg">{name}</p>
      <p className="text-lg">{alterEgo}</p>
    </div>
  );
}
