import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const target = await req.json();
  console.log(target);

  return NextResponse.json({ error: false });
}
