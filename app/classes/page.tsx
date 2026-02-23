// app/classes/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes — Designerae Inc.",
  description:
    "Professional Loc Maintenance Training in Cincinnati plus hands-on classes & workshops. Become a certified loctician with Designerae.",
};

// Your Square booking link (used by all "Sign Up" buttons)
const BOOKING_URL =
  "https://designerae.glossgenius.com/";

const CONTACT_EMAIL = "booking@designerae.com";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
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
          <Link
            href="/"
            aria-label="Designerae Home"
            className="flex items-center gap-3 hover:opacity-90"
          >
            <Image
              src={LOGO_SRC}
              alt="Designerae logo"
              width={320}
              height={320}
              priority
              className="h-16 w-auto md:h-18 lg:h-20"
            />
            <span className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl">
              DESIGNERAE
            </span>
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <Link href="/" className="transition-colors hover:text-neutral-900">
              Home
            </Link>

            {/* Services dropdown */}
            <details className="relative group">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-2 transition-colors hover:text-neutral-900">
                <span>Services</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1.25L5 4.75L9 1.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>

              <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl">
                <Link
                  href="#services"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  All Services
                </Link>
                <Link
                  href="/services/consultations/healthy-hair-consultation"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Healthy Hair Consultation
                </Link>
                <Link
                  href="/services/consultations/loc-start-consultation"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Loc Start Consultation
                </Link>
                <Link
                  href="/services/consultations/color-consultation"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Color Consultation
                </Link>
              </div>
            </details>

            {/* About dropdown */}
            <details className="relative group">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-2 transition-colors hover:text-neutral-900">
                <span>About</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1.25L5 4.75L9 1.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>

              <div className="absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl">
                <Link
                  href="#story"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Our Story
                </Link>
                <Link
                  href="/classes"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Classes
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Blog
                </Link>
                <Link
                  href="/about/team"
                  className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  Team
                </Link>
              </div>
            </details>

            {/* Single links */}
            <a href="#contact" className="transition-colors hover:text-neutral-900">
              Contact
            </a>
            <Link
              href="/shop"
              className="rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              Shop
            </Link>
          </nav>

          {/* Mobile quick links + Book Now */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/classes"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"
            >
              Classes
            </Link>
            <Link
              href="/shop"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"
            >
              Shop
            </Link>
            <Link
              href={BOOKING_URL}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 hover:shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

// ---------- JSON-LD (updated to match "coming soon") ----------
function JsonLd() {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Classes & Workshops — Designerae Inc.",
    description: "More info coming soon.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
    />
  );
}

// ---------- Page ----------
export default function ClassesPage() {
  return (
    <main className="bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <JsonLd />

      {/* Navigation Header */}
      <Header />

      {/* Hero / Header (kept same wiring + image) */}
      <section className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="grid items-center gap-12 py-20 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                Classes & Workshops
              </h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-600">
                More info coming soon.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={BOOKING_URL}
                  className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
                >
                  View All Services / Sign Up
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Class%20question`}
                  className="rounded-lg border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Questions? Email Us
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/classes/hero.jpg"
                alt="Designerae classes and workshops"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
