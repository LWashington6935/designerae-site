// /app/api/ecwid/order/[id]/note/route.ts
import { NextResponse } from "next/server";
import { ecwidGet, ecwidPut } from "@/lib/ecwid";

type EcwidExtraField = { name: string; value: string };
type EcwidOrder = {
  id: number;
  extraFields?: EcwidExtraField[];
};

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { note } = (await req.json()) as { note?: string };
    const orderId = params.id;

    if (!orderId) {
      return NextResponse.json({ error: "Missing order id" }, { status: 400 });
    }
    if (!note || !note.trim()) {
      return NextResponse.json({ error: "Missing note" }, { status: 400 });
    }

    // 1) Fetch the order with a typed response
    const existing = await ecwidGet<EcwidOrder>(`/orders/${orderId}`);

    // 2) Safely read/normalize extraFields
    const extra: EcwidExtraField[] = Array.isArray(existing.extraFields)
      ? [...existing.extraFields]
      : [];

    // 3) Upsert the "WhatWasDone" field
    const key = "WhatWasDone";
    const i = extra.findIndex((f) => f.name === key);
    if (i >= 0) extra[i] = { name: key, value: note };
    else extra.push({ name: key, value: note });

    // 4) PUT update back to Ecwid
    await ecwidPut(`/orders/${orderId}`, { extraFields: extra });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[ecwid note] error", err);
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
