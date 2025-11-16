// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designerae Inc. — Locs You Can Rely On",
  description: "Expert dreadlock care, consultations, and premium loc services. Book now.",
};

// Square booking link (used across the page)
const BOOKING_URL =
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

/* ===========================
   Header with dropdown menus
   =========================== */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-70"
          >
            DESIGNERAE
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <Link href="/" className="transition-colors hover:text-neutral-900">Home</Link>

            {/* Services dropdown */}
            <details className="relative group">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-2 transition-colors hover:text-neutral-900">
                <span>Services</span>
                <svg className="h-3.5 w-3.5 transition-transform group-open:rotate-180" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>

              <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl">
                <Link href="#services" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">All Services</Link>
                <Link href="/services/consultations/healthy-hair-consultation" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Healthy Hair Consultation</Link>
                <Link href="/services/consultations/loc-start-consultation" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Loc Start Consultation</Link>
                <Link href="/services/consultations/color-consultation" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Color Consultation</Link>
              </div>
            </details>

            {/* About dropdown */}
            <details className="relative group">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-2 transition-colors hover:text-neutral-900">
                <span>About</span>
                <svg className="h-3.5 w-3.5 transition-transform group-open:rotate-180" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>

              <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl">
                <Link href="#story" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Our Story</Link>
                <Link href="/classes" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Classes</Link>
                <Link href="/blog" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Blog</Link>
                <Link href="/about/team" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Team</Link>
              </div>
            </details>

            {/* Single links */}
            <Link href="/my-account" className="transition-colors hover:text-neutral-900">My Account</Link>
            <a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a>
            <Link href="/shop" className="rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50">Shop</Link>
          </nav>

          {/* Mobile quick links + Book Now */}
          <div className="flex items-center gap-2">
            <Link href="/my-account" className="mr-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50 md:hidden">My Account</Link>
            <Link href="/classes" className="mr-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50 md:hidden">Classes</Link>
            <Link href="/shop" className="mr-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50 md:hidden">Shop</Link>
            <Link href={BOOKING_URL} className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md">
              Book Now
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ================
   Hero
   ================ */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 -z-10">
        <Image src="/hero.jpg" alt="Locs hero image" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900" />
      </div>
      <Container>
        <div className="flex min-h-[75vh] flex-col items-center justify-center py-32 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            DESIGNERAE
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-200">
            We care about your locs like ours — precise, timely, high-quality service for every hair texture.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={BOOKING_URL}
              className="rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl"
            >
              Book Now
            </Link>
            <a
              href="#services"
              className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              See Services
            </a>
            <Link
              href="/classes"
              className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Classes & Workshops
            </Link>
            <Link
              href="/shop"
              className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Shared service row component - ENHANCED
   =========================== */
function ServiceRow({
  title,
  items,
}: {
  title: string;
  items: { name: string; desc?: string; price?: string; duration?: string; href?: string }[];
}) {
  return (
    <details className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/30 to-white shadow-lg shadow-emerald-900/5 transition-all hover:shadow-xl hover:shadow-emerald-900/10">
      <summary className="cursor-pointer list-none rounded-2xl px-10 py-8 text-left text-xl font-bold text-neutral-900 marker:hidden transition-all hover:bg-emerald-50/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-600/30 transition-transform group-open:rotate-45">
              +
            </span>
            <span>{title}</span>
          </div>
          <svg className="h-5 w-5 text-emerald-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>

      <ul className="divide-y divide-emerald-100/50 px-10 pb-8">
        {items.map((it, i) => {
          const content = (
            <>
              <div className="flex-1">
                <p className="text-lg font-bold text-neutral-900">{it.name}</p>
                {it.desc && <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>}
                {it.duration && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-100/50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {it.duration}
                  </div>
                )}
              </div>
              <div className="whitespace-nowrap text-right">
                <div className="text-2xl font-bold text-emerald-700">{it.price ?? ""}</div>
              </div>
            </>
          );

          return (
            <li key={i} className="py-6 first:pt-8">
              {it.href ? (
                <Link
                  href={it.href}
                  className="flex items-start justify-between gap-8 rounded-xl px-4 py-4 transition-all hover:bg-gradient-to-r hover:from-emerald-50 hover:to-amber-50 hover:shadow-md"
                >
                  {content}
                </Link>
              ) : (
                <div className="flex items-start justify-between gap-8 px-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/* ===========================
   Featured Services - UPGRADED
   =========================== */
function FeaturedServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-32 text-black">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Premium Loc Care Services
          </div>
          <h2 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Quality Service You Can Rely On
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-neutral-600">
            Over a decade of professional experience — because your locs deserve nothing less.
          </p>
        </div>

        <div className="mt-20 grid gap-8">
          {/* Consultations (exactly 3, all linked) */}
          <ServiceRow
            title="Consultations"
            items={[
              {
                name: "Healthy Hair Consultation",
                duration: "20–30 min",
                price: "$25",
                href: "/services/consultations/healthy-hair-consultation",
              },
              {
                name: "Loc Start Consultation",
                duration: "30 min",
                price: "$25",
                href: "/services/consultations/loc-start-consultation",
              },
              {
                name: "Color Consultation",
                duration: "25–35 min",
                price: "$30",
                href: "/services/consultations/color-consultation",
              },
            ]}
          />

          <ServiceRow
            title="Loc Services"
            items={[
              { name: "Starter Locs", desc: "Coils / twists / crochet", duration: "2–4 hrs", price: "From $220" },
              { name: "Retwist", duration: "60–90 min", price: "From $80" },
              { name: "Maintenance + Style", duration: "90–120 min", price: "From $120" },
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <Link
            href={BOOKING_URL}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-emerald-600/20 transition-all hover:shadow-2xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            Book Your Appointment
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ================
   Our Story - UPGRADED
   ================ */
function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-32 text-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl"></div>
        <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"></div>
      </div>

      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              Our Journey
            </div>
            <h2 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Our Story
            </h2>
          </div>

          {/* Main content in premium cards */}
          <div className="mt-16 space-y-8">
            {/* Intro card */}
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/50 p-10 shadow-lg shadow-neutral-900/5">
              <p className="text-lg leading-relaxed text-neutral-700">
                Finding the right loc salon is a significant decision—one that becomes truly rewarding when you connect with
                professionals who understand your vision and care deeply about your journey. At Designerae, we recognize that
                hair is an expression of identity, a reflection of personal style, and a testament to individual beauty. Our
                Cincinnati-based specialists appreciate the profound significance of looking and feeling your absolute best,
                knowing that beautiful, well-maintained locs build confidence and represent a meaningful journey of self-love
                and authenticity.
              </p>
            </div>

            {/* Mission card with icon */}
            <div className="group rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 shadow-lg shadow-emerald-900/5 transition-all hover:shadow-xl hover:shadow-emerald-900/10">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/30">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900">Our Mission</h3>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                    We are committed to delivering exceptional natural hair care services that promote healing, healthy growth,
                    and vibrant beauty. By exclusively using premium natural products and proven techniques, we create an
                    environment where your locs can thrive while honoring their natural texture and integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Difference card with benefits */}
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-10 shadow-lg shadow-amber-900/5">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-600/30">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900">The Designerae Difference</h3>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                    When you choose Designerae as your trusted loc care partner, you benefit from:
                  </p>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      "Punctual, respectful service that values your time",
                      "Certified specialists with advanced training",
                      "Extensive industry experience",
                      "100% natural, salon-grade products",
                      "Intimate, comfortable atmosphere",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-lg bg-white/60 p-4">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Founder card */}
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/50 p-10 shadow-lg shadow-neutral-900/5">
              <h3 className="text-2xl font-bold text-neutral-900">About Our Founder</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                As a Black women-owned and operated establishment, Designerae represents more than exceptional hair care—we
                embody a commitment to community, culture, and individual empowerment. Our founder and lead specialist,
                Desirae, has earned recognition throughout Cincinnati for her artistry, dedication, and personalized approach
                to loc care. She personally connects with each client to understand their unique needs, lifestyle, and
                aesthetic goals, ensuring every service is tailored to deliver results that exceed expectations.
              </p>
            </div>

            {/* Services overview card */}
            <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 shadow-lg shadow-emerald-900/5">
              <h3 className="text-2xl font-bold text-neutral-900">Our Services</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Designerae offers comprehensive natural hair care services, including precision loc maintenance, custom loc
                coloring, advanced styling techniques, crochet maintenance, loc repair, and therapeutic treatments. Each
                service is performed with meticulous attention to detail and a genuine commitment to your satisfaction.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                We invite you to experience the Designerae difference and discover why discerning clients throughout
                Cincinnati trust us with their loc care journey.
              </p>

              <div className="mt-8">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30"
                >
                  Explore Our Services
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Store teaser
   =========================== */
function StoreTeaser() {
  return (
    <section className="bg-amber-50 py-20 text-black">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-amber-900">THE DESIGNERAE STORE</h3>
            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              Handcrafted, all-natural products designed to nourish hair, scalp, and skin. Thoughtfully made with
              premium ingredients to deliver the care you deserve.
            </p>
            <div className="mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-amber-800 hover:shadow-md"
              >
                Shop Now
                <span>→</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/shop/hero.jpg"
              alt="Designerae products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Gallery
   =========================== */
function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 text-black">
      <Container>
        <h3 className="text-3xl font-bold text-neutral-900">Gallery</h3>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.jpg"].map((src) => (
            <div
              key={src}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   FAQ - UPGRADED
   =========================== */
function FAQ() {
  const faqs = [
    {
      question: "Do you require a deposit?",
      answer: "Yes, deposits secure your slot and go toward your service. See booking page for details.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      question: "What's the cancellation policy?",
      answer: "24-hour notice to cancel or reschedule; late cancellations may forfeit deposit.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-emerald-50/30 to-neutral-50 py-32 text-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl"></div>
      </div>

      <Container>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Common Questions
          </div>
          <h3 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-lg text-neutral-600">
            Everything you need to know about our services and policies
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/20 to-white p-8 shadow-lg shadow-emerald-900/5 transition-all hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1"
            >
              {/* Decorative gradient */}
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-emerald-100/50 to-transparent blur-2xl transition-all group-hover:scale-150"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-110">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-neutral-900">{faq.question}</p>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-10 shadow-xl">
            <p className="text-lg font-semibold text-neutral-900">Still have questions?</p>
            <p className="max-w-md text-base text-neutral-600">
              We're here to help! Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Footer
   =========================== */
function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white text-black">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-neutral-900">Designerae Inc.</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              1234 Main St, Cincinnati, OH
            </p>
            <p className="mt-1 text-sm text-neutral-600">Mon–Sat 9a–6p</p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
              href={BOOKING_URL}
            >
              Book Now <span>→</span>
            </a>
          </div>
          <div>
            <p className="text-lg font-bold text-neutral-900">Follow</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="transition-colors hover:text-neutral-900"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  className="transition-colors hover:text-neutral-900"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="transition-colors hover:text-neutral-900"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold text-neutral-900">Contact</p>
            <p className="mt-4 text-sm text-neutral-600">booking@designerae.com</p>
            <p className="mt-1 text-sm text-neutral-600">(555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Designerae Inc. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

/* ===========================
   Page
   =========================== */
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <FeaturedServices />
      <Story />
      <StoreTeaser />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}