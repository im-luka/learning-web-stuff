"use client";

import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchColors = (page: number) =>
  api.get(`colors?page=${page}`).then((res) => res.data);

export default function RQPaginatedPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    ["colors", page],
    () => fetchColors(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error...</p>;
  }

  return (
    <>
      <div>
        {data.map((color: any) => (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex gap-2 my-2">
        <button
          className="p-4 border border-yellow-200"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev Page
        </button>
        <button
          className="p-4 border border-yellow-200"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === 4}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
