import { readFile } from "fs/promises";
import path from "path";

export const getSuperheroes = async () => {
  const filePath = path.join(process.cwd(), "db.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data).superheroes;
};
