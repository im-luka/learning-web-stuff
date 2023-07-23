import { NextResponse } from "next/server";
import { getSuperheroes } from "@/util/remote";

export async function GET(request: Request) {
  const data = await getSuperheroes();
  return NextResponse.json(data);
}
