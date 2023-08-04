"use client";

import { useParams } from "next/navigation";

export default function RQDependentItemPage() {
  const { id } = useParams();

  return <div>{id}</div>;
}
