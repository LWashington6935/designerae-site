import { NextResponse } from "next/server";
import { ecwidGet, ecwidPut } from "@/lib/ecwid";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const { note } = await req.json();
    const orderId = params.id;

    const existing = await ecwidGet(`/orders/${orderId}`);
    const extra = Array.isArray(existing?.extraFields) ? existing.extraFields : [];
    const i = extra.findIndex((f: any) => f.name === "whatWasDone");
    if (i >= 0) extra[i].value = note; else extra.push({ name: "whatWasDone", value: note });

    const updated = await ecwidPut(`/orders/${orderId}`, { extraFields: extra });
    return NextResponse.json(updated);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
