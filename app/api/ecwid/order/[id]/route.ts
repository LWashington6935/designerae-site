import { NextResponse } from "next/server";
import { ecwidGet } from "@/lib/ecwid";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const order = await ecwidGet(`/orders/${params.id}`);
    return NextResponse.json(order);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
