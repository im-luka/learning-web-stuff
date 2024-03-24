"use server";

export async function validateZipCode(zipCode: string): Promise<boolean> {
  console.log("validateZipCode on SERVER", zipCode);
  return /^\d{5}/.test(zipCode) && zipCode.startsWith("9");
}
