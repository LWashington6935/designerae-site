// app/shop/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
// If you don't use the @ alias, change to: import { ecwidGet } from "../../lib/ecwid";
import { ecwidGet } from "@/lib/ecwid";

export const metadata: Metadata = {
  title: "Shop — Designerae Inc.",
  description:
    "Handcrafted, all-natural products designed to nourish hair, scalp, and skin. Explore our featured products.",
};

type Product = {
  id: number | string;
  name: string;
  price: number;
  url?: string;
  imageUrl?: string;
  description?: string;
};

// Fallback items if Ecwid API returns empty or errors.
// (These use local images—swap to real Ecwid URLs or keep as is.)
// Add small images in /public/ (or rely on placeholder.png)
const FALLBACK: Product[] = [
  {
    id: "healing-honee-3oz",
    name: "The Healing Honee — 3oz",
    price: 19.99,
    imageUrl: "/shop/honee-3oz.jpg",
    description:
      "Nourishing, all-natural blend designed to support scalp health and shine. Small-batch handcrafted.",
    url: "https://designerae.company.site/products/the-healing-honee-3oz",
  },
  {
    id: "honee-oil-8oz",
    name: "The Honee Oil — 8oz",
    price: 19.0,
    imageUrl: "/shop/honee-oil-8oz.jpg",
    description:
      "Lightweight daily oil for moisture and softness without build-up. Ideal for protective styles and locs.",
    url: "https://www.designerae.com/product/the-honee-oil-8oz",
  },
  {
    id: "healing-honee-duo",
    name: "The Healing Honee Duo",
    price: 29.99,
    imageUrl: "/shop/honee-duo.jpg",
    description: "Best value bundle: 8oz Honee Oil + 3oz Healing Honee. Save and glow.",
    url: "https://www.designerae.com/product/the-healing-honee-duo",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

async function fetchEcwidProducts(): Promise<Product[]> {
  try {
    // You can append other filters (e.g., category, sortBy, etc.)
    const data = await ecwidGet<{
      count: number;
      items: Array<{
        id: number;
        name: string;
        price: number;
        url?: string;
        imageUrl?: string;
        originalImageUrl?: string;
        galleryImages?: { url: string }[];
        description?: string;
        enabled?: boolean;
      }>;
    }>("/products?enabled=true&limit=12");

    const items = data?.items ?? [];
    if (!items.length) return [];

    return items.map((p) => {
      const bestImage =
        p.imageUrl ||
        p.originalImageUrl ||
        p.galleryImages?.[0]?.url ||
        ""; // if empty, we'll use placeholder in the component

      return {
        id: p.id,
        name: p.name,
        price: p.price,
        url: p.url,
        imageUrl: bestImage,
        description: p.description,
      };
    });
  } catch (err) {
    console.warn("[Ecwid] Failed to fetch products:", err);
    return [];
  }
}

function JsonLd({ products }: { products: Product[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "Product",
      position: i + 1,
      name: p.name,
      image: p.imageUrl,
      description: p.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: (p.price ?? 0).toFixed(2),
        availability: "https://schema.org/InStock",
        url: p.url,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ShopPage() {
  const ecwidProducts = await fetchEcwidProducts();
  const usingFallback = ecwidProducts.length === 0;
  const products = usingFallback ? FALLBACK : ecwidProducts;

  return (
    <main className="bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <JsonLd products={products} />

      <section className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="grid items-center gap-12 py-20 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                THE DESIGNERAE STORE
              </h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-600">
                Where nature meets self-care. We specialize in handcrafted, all-natural products designed to nourish your
                hair, scalp, and skin. Effective, chemical-free solutions that enhance your natural beauty while
                promoting health and wellness.
              </p>
              <div className="mt-8">
                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
                >
                  Shop Now
                  <span>→</span>
                </a>
              </div>

              {usingFallback && (
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> Showing sample products while Ecwid API is unavailable or empty. Add real products in Ecwid or verify
                    your API token/scopes.
                  </p>
                </div>
              )}
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                // Use a real hero image in /public/shop/hero.jpg, or change to /placeholder.png
                src="/shop/hero.jpg"
                alt="Designerae handcrafted products"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="featured" className="py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              FEATURED PRODUCTS
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Handcrafted with care, formulated for results
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <Image
                    // Avoids 404s when Ecwid has no image
                    src={p.imageUrl || "/placeholder.png"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    // If remote images don't show, either add the domain to next.config.mjs images.remotePatterns
                    // or temporarily use: unoptimized
                    // unoptimized
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-tight text-neutral-900">{p.name}</h3>
                  {p.description && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                      {p.description.replace(/<[^>]+>/g, "").slice(0, 140)}
                    </p>
                  )}
                  <p className="mt-4 text-xl font-bold text-emerald-600">${(p.price ?? 0).toFixed(2)}</p>

                  <div className="mt-6 flex gap-3">
                    {p.url ? (
                      <Link
                        href={p.url}
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
                      >
                        View Product
                      </Link>
                    ) : (
                      <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-lg bg-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-500">
                        View Product
                      </span>
                    )}
                    <Link
                      href={`mailto:booking@designerae.com?subject=${encodeURIComponent(
                        "Question about " + p.name
                      )}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                      title="Ask a question"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-20 grid gap-6 text-center sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-neutral-900">Handcrafted • Small-batch</p>
              <p className="mt-2 text-sm text-neutral-600">Made with care in small quantities for maximum quality</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-neutral-900">All-natural • Chemical-free</p>
              <p className="mt-2 text-sm text-neutral-600">Pure ingredients, no harsh chemicals or synthetics</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-neutral-900">Ships within 2–3 business days</p>
              <p className="mt-2 text-sm text-neutral-600">Fast, secure shipping to get your products to you quickly</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Our Products Section */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Why Choose Designerae Products?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              Our products are thoughtfully formulated using only the finest natural ingredients. Each item is
              handcrafted in small batches to ensure exceptional quality and effectiveness. We believe in the power of
              nature to nourish, heal, and enhance your natural beauty.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-bold text-neutral-900">Premium Natural Ingredients</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                We source the highest quality natural ingredients, free from harmful chemicals, parabens, and sulfates.
                Every ingredient serves a purpose in promoting healthy hair, scalp, and skin.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-bold text-neutral-900">Small-Batch Excellence</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Each product is carefully handcrafted in small batches to ensure freshness and potency. This
                meticulous process guarantees you receive the most effective formulations possible.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-bold text-neutral-900">Proven Results</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Trusted by our clients for years, our products deliver visible results. From improved scalp health to
                enhanced shine and moisture, experience the difference natural care can make.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-bold text-neutral-900">Expert Formulation</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Developed by experienced locticians who understand natural hair care, our products are formulated with
                professional expertise and years of hands-on experience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="mailto:booking@designerae.com?subject=Product%20Question"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              Have Questions? Contact Us
              <span>→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}