import { getSuperheroes } from "@/util/remote";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  const superheroes = await getSuperheroes();
  const { id } = params;
  const hero = superheroes.find((el: any) => el.id == id);
  return NextResponse.json(hero);
}
