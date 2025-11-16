"use client";

import { useState } from "react";

type OrderItem = {
  name: string;
  sku?: string;
  quantity: number;
  price: number; // unit price
  imageUrl?: string;
};

type Order = {
  id: number;
  number: string;
  date: string;          // ISO
  status: string;
  total: number;
  currency: string;
  paymentStatus?: string;
  fulfillmentStatus?: string;
  items: OrderItem[];
};

export default function MyAccountPage() {
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[] | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOrders(null);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/account/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          orderNumber: orderNumber.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Request failed (${res.status})`);
      }

      const data = (await res.json()) as { orders: Order[] };
      setOrders(data.orders || []);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="py-10">
            <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
            <p className="mt-2 text-sm text-neutral-600">
              Look up your order history by email. Optionally narrow results by an order number.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email used at checkout
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="orderNumber" className="text-sm font-medium">
                  Order number (optional)
                </label>
                <input
                  id="orderNumber"
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-500"
                  placeholder="e.g., 1054"
                />
              </div>

              <div className="mt-1 flex items-center gap-3">
                <button
                  disabled={loading}
                  className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
                >
                  {loading ? "Looking up…" : "Find my orders"}
                </button>

                {error && <p className="text-sm text-red-600">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          {orders && (
            <>
              {orders.length === 0 ? (
                <p className="text-sm text-neutral-600">
                  No orders found for that email{orderNumber ? " and order number" : ""}.
                </p>
              ) : (
                <div className="grid gap-6">
                  {orders.map((o) => (
                    <article
                      key={o.id}
                      className="rounded-xl border border-neutral-200 bg-white shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4 border-b border-neutral-100 p-4">
                        <div>
                          <p className="text-sm text-neutral-600">Order #{o.number}</p>
                          <p className="text-sm text-neutral-500">
                            Placed {new Date(o.date).toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {o.currency} {o.total.toFixed(2)}
                          </p>
                          <p className="text-xs text-neutral-600">
                            {o.status}
                            {o.paymentStatus ? ` • ${o.paymentStatus}` : ""}
                            {o.fulfillmentStatus ? ` • ${o.fulfillmentStatus}` : ""}
                          </p>
                        </div>
                      </div>

                      <ul className="divide-y divide-neutral-100">
                        {o.items.map((it, i) => (
                          <li key={i} className="grid grid-cols-[64px_1fr_auto] items-center gap-4 p-4">
                            <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-100">
                              {it.imageUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={it.imageUrl} alt={it.name} className="h-full w-full object-cover" />
                              ) : null}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium">{it.name}</p>
                              <p className="text-xs text-neutral-600">
                                {it.sku ? `SKU: ${it.sku} • ` : ""}
                                Qty {it.quantity}
                              </p>
                            </div>
                            <div className="text-right text-sm">
                              ${(it.price * it.quantity).toFixed(2)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
