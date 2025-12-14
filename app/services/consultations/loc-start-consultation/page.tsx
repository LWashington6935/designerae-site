// app/services/consultations/loc-start-consultation/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loc Start Consultation — Designerae Inc.",
  description:
    "Thinking about starting locs? Get expert guidance on size, parting, method, maintenance, and care. Book your Loc Start Consultation.",
};

const BOOKING_URL = "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services"; 

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

export default function LocStartConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <Header />

      {/* Main service card with image */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          
          {/* Service Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/services/loc-start-consultation.jpg"  // Add image at /public/services/loc-start-consultation.jpg
              alt="Loc start consultation service"
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
              Loc Start Consultation
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-neutral-600">
              Whether to get it or not? Will it suit me? Will it be hard to maintain? Get all your questions answered before starting your loc journey.
            </p>

            {/* Service details */}
            <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-6 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4">
              <div className="flex items-center gap-2 text-neutral-700">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">30 minutes</span>
              </div>
              <div className="h-6 w-px bg-neutral-300"></div>
              <div className="flex items-center gap-2 text-neutral-700">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">Starter Method Assessment</span>
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
                Starting locs is a big decision. This consultation helps you understand the commitment, maintenance requirements, and which starter method is best for your hair type and lifestyle. We'll discuss parting patterns, sizing options, and realistic expectations for the first year of your loc journey.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                Designerae is your go-to option for premium starting locs near Cincinnati and consultation with expert locticians. We analyze your hair growth, texture, and give unbiased advice to help you nurture and grow beautiful, healthy locs that suit your unique style.
              </p>
            </div>

            {/* Additional info cards */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-base font-semibold text-neutral-900">What's Included</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Hair texture analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Starter method comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Parting & sizing guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Maintenance schedule discussion</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-base font-semibold text-neutral-900">We'll Discuss</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Coil vs. twist vs. crochet methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Expected timeline & phases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span>Lifestyle compatibility</span>
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
              href="/services/consultations/color-consultation"
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-neutral-900 group-hover:text-emerald-600">
                    Color Consultation
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Looking for a change? Whether the change is small or dramatic, we want to make you look great.
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