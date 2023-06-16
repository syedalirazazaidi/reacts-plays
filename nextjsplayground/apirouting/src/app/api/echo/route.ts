import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");

  return NextResponse.json({ Hello: ",Next.js! Echo", name });
}
