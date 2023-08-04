"use client";

import { api } from "@/domain/remote";
import { useEffect, useState } from "react";

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    api
      .get("superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h1 className="text-xl text-red-500">ERROR</h1>;
  }

  return (
    <>
      <h2 className="text-4xl">Super Heroes Page</h2>
      <div>
        {data.map((el: any) => (
          <p key={el.id}>{el.name}</p>
        ))}
      </div>
    </>
  );
}
