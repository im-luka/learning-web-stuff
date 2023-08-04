import { getColors } from "@/util/remote";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));

  const data = await getColors(page);

  return NextResponse.json(data);
}
