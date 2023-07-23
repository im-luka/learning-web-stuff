"use client";

import { api } from "@/domain/remote";
import { useQuery } from "@tanstack/react-query";

const fetchHeroes = () => api.get("superheroes").then((res) => res.data);
const fetchFriends = () => api.get("friends").then((res) => res.data);

export default function RQParallelPage() {
  useQuery(["superheroes"], fetchHeroes);
  useQuery(["friends"], fetchFriends);

  return <p>Parallel Page</p>;
}
