import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return NextResponse.json({ product });
}
