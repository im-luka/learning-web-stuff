"use client";

import { api } from "@/domain/remote";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) =>
  api.get(`colors?page=${pageParam}`).then((res) => res.data);

export default function RQPaginatedPage() {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors-infinite"], fetchColors, {
    getNextPageParam: (_lastPage: any, pages: any) =>
      pages.length < 4 ? pages.length + 1 : undefined,
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error...</p>;
  }

  return (
    <>
      <h1 className="text-xl mb-5">RQ Infinite Queries</h1>
      <div>
        {data.pages.map((group: any, i: number) => (
          <Fragment key={i}>
            {group.map((color: any) => (
              <div key={color.id}>
                <h2>
                  {color.id}. {color.label}
                </h2>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div className="flex gap-2 my-2">
        <button
          className="p-4 border border-yellow-200 disabled:bg-stone-700"
          disabled={!hasNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </>
  );
}
