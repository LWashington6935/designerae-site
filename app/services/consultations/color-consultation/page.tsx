// app/services/consultations/color-consultation/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Consultation — Designerae Inc.",
  description:
    "Looking for a change? Whether the change is small or dramatic, we want to make you look great. Duration: 45 minutes. Strand/Patch test included.",
};

const BOOKING_URL = "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services"; 

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
                <Link href="/#services" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">
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
                <Link href="/#story" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">
                  Our Story
                </Link>
                <Link href="/classes" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">
                  Classes
                </Link>
                <Link href="/blog" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">
                  Blog
                </Link>
                <Link href="/about/team" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">
                  Team
                </Link>
              </div>
            </details>

            {/* Single links */}
            <Link href="/my-account" className="transition-colors hover:text-neutral-900">
              My Account
            </Link>
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
          <div className="flex items-center gap-2">
            <Link
              href="/classes"
              className="mr-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50 md:hidden"
            >
              Classes
            </Link>
            <Link
              href="/shop"
              className="mr-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50 md:hidden"
            >
              Shop
            </Link>
            <Link
              href={BOOKING_URL}
              className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default function ColorConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <Header />

      {/* Main service card with image */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          
          {/* Service Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/services/color-consultation.jpg"  // Add image at /public/services/color-consultation.jpg
              alt="Color consultation service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Consultation Service
              </div>
            </div>

            <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Color Consultation
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-neutral-600">
              Looking for a change? Whether the change is small or dramatic, we want to make you look great.
            </p>

            {/* Service details */}
            <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-6 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4">
              <div className="flex items-center gap-2 text-neutral-700">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">45 minutes</span>
              </div>
              <div className="h-6 w-px bg-neutral-300"></div>
              <div className="flex items-center gap-2 text-neutral-700">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">Strand/Patch Test Included</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href={BOOKING_URL}
                className="rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                Book This Consultation
              </Link>
            </div>

            {/* Body copy */}
            <div className="mx-auto mt-12 max-w-3xl space-y-4 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-bold text-neutral-900">What to Expect</h2>
              <p className="text-base leading-relaxed text-neutral-700">
                Coloring hair is a science more than anything else and maintaining your hair's health is the main priority
                with hair coloring. Schedule a consultation to discuss how we will keep your hair healthy on a color
                journey.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                During your consultation, we'll perform a <strong>strand test and patch test</strong> to ensure the best
                results and safety for your hair. Whether you have relaxed hair, natural hair, or dreadlocks, we'll create
                a customized color plan that works for you.
              </p>
            </div>

            {/* Additional info cards */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-base font-semibold text-neutral-900">What's Included</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Professional color assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Strand & patch testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Customized color plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Hair health discussion</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-base font-semibold text-neutral-900">Who It's For</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Relaxed hair color services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Natural hair color treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Dreadlock color services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>First-time color clients</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="mt-10 text-center">
              <Link
                href={BOOKING_URL}
                className="inline-flex rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                Book Your Consultation Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-neutral-900">
            Other Consultations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/services/consultations/healthy-hair-consultation"
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-neutral-900 group-hover:text-emerald-600">
                    Healthy Hair Consultation
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Where are you on this natural hair journey? Where do you want to be? Let's chat about your #hairgoals!
                  </p>
                </div>
                <svg className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/services/consultations/loc-start-consultation"
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-neutral-900 group-hover:text-emerald-600">
                    Loc Start Consultation
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Whether to get it or not? Will it suit me? Will it be hard to maintain?
                  </p>
                </div>
                <svg className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              View All Services
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}