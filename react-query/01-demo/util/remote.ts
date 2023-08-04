import { readFile } from "fs/promises";
import path from "path";

const getData = async () => {
  const filePath = path.join(process.cwd(), "db.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const getSuperheroes = async () => {
  const data = await getData().then((res: any) => res.superheroes);
  return data;
};

export const getFriends = async () => {
  const data = await getData().then((res: any) => res.friends);
  return data;
};

export const getUsers = async () => {
  const data = await getData().then((res: any) => res.users);
  return data;
};

export const getColors = async (page: number) => {
  const data = await getData().then((res: any) => res.colors);

  const limit = 2;
  const paginatedData = data.slice(page * limit - limit, page * limit);

  return paginatedData;
};
