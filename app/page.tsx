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
   Shared service row component
   =========================== */
function ServiceRow({
  title,
  items,
}: {
  title: string;
  items: { name: string; desc?: string; price?: string; duration?: string; href?: string }[];
}) {
  return (
    <details className="group rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md">
      <summary className="cursor-pointer list-none rounded-xl px-8 py-6 text-left text-lg font-semibold text-neutral-900 marker:hidden transition-colors hover:bg-neutral-50">
        <span className="mr-3 inline-block select-none text-emerald-600 transition-transform group-open:rotate-45">+</span>
        {title}
      </summary>

      <ul className="divide-y divide-neutral-100 px-8 pb-6">
        {items.map((it, i) => {
          const content = (
            <>
              <div className="flex-1">
                <p className="text-base font-semibold text-neutral-900">{it.name}</p>
                {it.desc && <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>}
                {it.duration && <p className="mt-1.5 text-xs font-medium text-neutral-500">{it.duration}</p>}
              </div>
              <div className="whitespace-nowrap text-right text-base font-bold text-neutral-900">{it.price ?? ""}</div>
            </>
          );

          return (
            <li key={i} className="py-5">
              {it.href ? (
                <Link
                  href={it.href}
                  className="flex items-start justify-between gap-8 rounded-lg px-2 py-2 transition-colors hover:bg-emerald-50/50"
                >
                  {content}
                </Link>
              ) : (
                <div className="flex items-start justify-between gap-8">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/* ===========================
   Featured Services
   =========================== */
function FeaturedServices() {
  return (
    <section id="services" className="bg-gradient-to-b from-neutral-50 to-white py-24 text-black">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Quality Service You Can Rely On
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Over a decade of professional experience — because your locs deserve nothing less.
          </p>
        </div>

        <div className="mt-16 grid gap-6">
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
      </Container>
    </section>
  );
}

/* ================
   Our Story
   ================ */
function Story() {
  return (
    <section id="story" className="bg-white py-24 text-black">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Our Story</h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-700">
            Finding the right loc salon is a significant decision—one that becomes truly rewarding when you connect with
            professionals who understand your vision and care deeply about your journey. At Designerae, we recognize that
            hair is an expression of identity, a reflection of personal style, and a testament to individual beauty. Our
            Cincinnati-based specialists appreciate the profound significance of looking and feeling your absolute best,
            knowing that beautiful, well-maintained locs build confidence and represent a meaningful journey of self-love
            and authenticity.
          </p>

          <h3 className="mt-10 text-xl font-bold text-neutral-900">Our Mission</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            We are committed to delivering exceptional natural hair care services that promote healing, healthy growth,
            and vibrant beauty. By exclusively using premium natural products and proven techniques, we create an
            environment where your locs can thrive while honoring their natural texture and integrity.
          </p>

          <h3 className="mt-10 text-xl font-bold text-neutral-900">The Designerae Difference</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            When you choose Designerae as your trusted loc care partner, you benefit from:
          </p>
          <ul className="mt-4 space-y-3 text-base text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
              <span>Punctual, respectful service that values your time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
              <span>Certified specialists with advanced training in loc care techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
              <span>Extensive industry experience and proven expertise</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
              <span>100% natural, salon-grade products free from harmful chemicals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600"></span>
              <span>An intimate, comfortable salon atmosphere designed for relaxation</span>
            </li>
          </ul>

          <h3 className="mt-10 text-xl font-bold text-neutral-900">About Our Founder</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            As a Black women-owned and operated establishment, Designerae represents more than exceptional hair care—we
            embody a commitment to community, culture, and individual empowerment. Our founder and lead specialist,
            Desirae, has earned recognition throughout Cincinnati for her artistry, dedication, and personalized approach
            to loc care. She personally connects with each client to understand their unique needs, lifestyle, and
            aesthetic goals, ensuring every service is tailored to deliver results that exceed expectations.
          </p>

          <h3 className="mt-10 text-xl font-bold text-neutral-900">Our Services</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Designerae offers comprehensive natural hair care services, including precision loc maintenance, custom loc
            coloring, advanced styling techniques, crochet maintenance, loc repair, and therapeutic treatments. Each
            service is performed with meticulous attention to detail and a genuine commitment to your satisfaction.
          </p>

          <p className="mt-6 text-base leading-relaxed text-neutral-700">
            We invite you to experience the Designerae difference and discover why discerning clients throughout
            Cincinnati trust us with their loc care journey.
          </p>

          <div className="mt-8">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              Explore our full range of services
              <span className="text-emerald-600">→</span>
            </Link>
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
   FAQ
   =========================== */
function FAQ() {
  return (
    <section className="bg-neutral-50 py-24 text-black">
      <Container>
        <h3 className="text-3xl font-bold text-neutral-900">FAQs</h3>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <p className="text-lg font-semibold text-neutral-900">Do you require a deposit?</p>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Yes, deposits secure your slot and go toward your service. See booking page for details.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <p className="text-lg font-semibold text-neutral-900">What's the cancellation policy?</p>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              24-hour notice to cancel or reschedule; late cancellations may forfeit deposit.
            </p>
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