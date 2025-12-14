// app/about/team/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — Designerae Inc.",
  description:
    "Meet the people behind Designerae Inc. — Cincinnati's trusted specialists in precision loc maintenance and natural hair care.",
};

const BOOKING_URL =
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

type Member = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string; // path in /public
  instagram?: string;
  email?: string;
  specialties?: string[];
};

const TEAM: Member[] = [
  {
    id: "desirae-futel",
    name: "Desirae Futel",
    title: "Founder, CEO & Lead Stylist",
    bio:
      "Desirae is a precision loctician known for her clean parting, healthy hair-first approach, and timeless styles. With years of experience and advanced training, she leads Designerae's mission to deliver punctual, respectful, high-quality service for every hair texture.",
    image: "/team/desirae.jpg", // add this file in /public/team/desirae.jpg
    instagram: "https://instagram.com", // replace with real profile
    email: "mailto:booking@designerae.com",
    specialties: ["Precision Retwist", "Starter Locs", "Crochet Maintenance", "Coloring & Styling"],
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

/* ===========================
   Header with dropdown menus
   =========================== */
function Header() {
  const LOGO_SRC = "/logo.png"; // <- change path/name if different

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand: logo + wordmark */}
          <Link href="/" aria-label="Designerae Home" className="flex items-center gap-3 hover:opacity-90">
            <Image
              src={LOGO_SRC}
              alt="Designerae logo"
              width={240}
              height={240}
              priority
              className="h-14 w-auto md:h-16 lg:h-20"
            />
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
              DESIGNERAE
            </span>
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
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/my-account" className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50">My Account</Link>
            <Link href="/classes" className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50">Classes</Link>
            <Link href="/shop" className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50">Shop</Link>
            <Link href={BOOKING_URL} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 hover:shadow-md">
              Book Now
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Designerae Inc.",
    url: "https://designerae.com",
    department: TEAM.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      url: `https://designerae.com/about/team#${m.id}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <Header />
      <JsonLd />
      
      {/* Header block */}
      <section className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Our Team</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Skilled, certified, and dedicated to healthy, beautiful locs—meet the people behind Designerae.
            </p>
            <div className="mt-8">
              <Link
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                Book an Appointment
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Team grid */}
      <section className="py-24">
        <Container>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <li key={m.id} id={m.id} className="group flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-neutral-900">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">{m.title}</p>
                  
                  {m.specialties && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.specialties.map((specialty) => (
                        <span key={specialty} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">{m.bio}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={BOOKING_URL}
                      className="flex-1 rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
                    >
                      Book with {m.name.split(" ")[0]}
                    </Link>
                    {m.instagram && (
                      <Link
                        href={m.instagram}
                        target="_blank"
                        className="rounded-lg border border-neutral-300 p-3 text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </Link>
                    )}
                    {m.email && (
                      <Link
                        href={m.email}
                        className="rounded-lg border border-neutral-300 p-3 text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                        aria-label="Email"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Hiring / CTA */}
          <div className="mt-16 rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <h3 className="text-lg font-bold text-neutral-900">Join Our Team</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
              We're growing. If you're a talented loctician or color specialist interested in joining Designerae,
              send your portfolio to{" "}
              <a className="font-semibold text-emerald-600 transition-colors hover:text-emerald-700 hover:underline" href="mailto:booking@designerae.com">
                booking@designerae.com
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}