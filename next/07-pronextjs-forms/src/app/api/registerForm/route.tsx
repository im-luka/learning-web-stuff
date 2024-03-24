import { NextRequest, NextResponse } from "next/server";
import { schema } from "@/app/registration-schema";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData);
  let parsed = schema.safeParse(data);
  if (parsed.success) {
    return NextResponse.json({ message: "User registered", data: parsed.data });
  } else {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
}
