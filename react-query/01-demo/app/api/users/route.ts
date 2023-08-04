import { getUsers } from "@/util/remote";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getUsers();
  return NextResponse.json(data);
}
