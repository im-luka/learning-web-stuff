"use client";

import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const fetchUsers = () => api.get("users").then((res) => res.data);

export default function RQDependentPage() {
  const { data, isLoading } = useQuery(["users"], fetchUsers);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1 className="mb-5">RQ Dependent Page</h1>
      <div>
        {data.map((el: any) => (
          <div key={el.id}>
            <Link href={`rq-dependent/${el.id}`}>
              {el.id} - {el.channelId}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
