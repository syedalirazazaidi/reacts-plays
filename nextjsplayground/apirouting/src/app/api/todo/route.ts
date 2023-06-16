import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const todos = await res.json();

  return NextResponse.json(todos);
}
