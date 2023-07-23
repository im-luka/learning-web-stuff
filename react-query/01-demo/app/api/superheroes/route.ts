import { NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "db.json");
  const data = await readFile(filePath, "utf-8");
  const formattedData = JSON.parse(data).superheroes;

  return NextResponse.json(formattedData);
}
