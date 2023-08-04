import { NextResponse } from "next/server";
import { getSuperheroes } from "@/util/remote";

export async function GET(request: Request) {
  const data = await getSuperheroes();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  const heroes = await getSuperheroes();
  return NextResponse.json({ ...data, id: heroes.length + 1 });
}
