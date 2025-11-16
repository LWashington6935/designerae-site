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
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

const CONTACT_EMAIL = "booking@designerae.com";

// Simple event model for additional workshops (edit freely)
type ClassItem = {
  slug: string;
  title: string;
  date: string;      // YYYY-MM-DD
  startTime: string; // "HH:MM" 24h
  endTime: string;   // "HH:MM"
  price: number;     // USD
  level?: "Beginner" | "All Levels" | "Intermediate" | "Advanced";
  spots: number;
  image: string;     // /public path
  location: string;
  description: string;
};

const CLASSES: ClassItem[] = [
  {
    slug: "healthy-hair-basics",
    title: "Healthy Hair Basics",
    date: "2025-08-10",
    startTime: "11:00",
    endTime: "12:30",
    price: 49,
    level: "All Levels",
    spots: 10,
    image: "/classes/healthy-hair.jpg",
    location: "Designerae Studio — Cincinnati, OH",
    description:
      "Foundations for scalp health, product selection, washing cadence, and protective styling.",
  },
  {
    slug: "starter-locs-workshop",
    title: "Starter Locs Workshop",
    date: "2025-08-17",
    startTime: "13:00",
    endTime: "15:30",
    price: 99,
    level: "Beginner",
    spots: 8,
    image: "/classes/starter-locs.jpg",
    location: "Designerae Studio — Cincinnati, OH",
    description:
      "Sizing, parting, starter methods (coils/twists/crochet), day-1 care, and realistic maintenance.",
  },
  {
    slug: "retwist-maintenance-lab",
    title: "Retwist & Maintenance Lab",
    date: "2025-08-24",
    startTime: "12:00",
    endTime: "14:00",
    price: 79,
    level: "Intermediate",
    spots: 10,
    image: "/classes/retwist.jpg",
    location: "Designerae Studio — Cincinnati, OH",
    description:
      "Hands-on retwist technique, tension control, product amounts, drying, and long-lasting styling.",
  },
];

// ---------- Utilities ----------
function toLocalDatetimeISO(date: string, time: string) {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const dt = new Date(y, m - 1, d, hh, mm, 0);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(
    dt.getHours()
  )}${pad(dt.getMinutes())}00`;
}
function googleCalendarUrl(item: ClassItem) {
  const start = toLocalDatetimeISO(item.date, item.startTime);
  const end = toLocalDatetimeISO(item.date, item.endTime);
  const details = `${item.description}\n\nSign up: ${BOOKING_URL}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: item.title,
    dates: `${start}/${end}`,
    details,
    location: item.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
function priceLabel(n: number) {
  return n === 0 ? "Free" : `$${n.toFixed(2)}`;
}
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
                <Link href="/#services" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">All Services</Link>
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
                <Link href="/#story" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Our Story</Link>
                <Link href="/classes" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Classes</Link>
                <Link href="/blog" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Blog</Link>
                <Link href="/about/team" className="block rounded-lg px-4 py-3 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900">Team</Link>
              </div>
            </details>

            {/* Single links */}
            <Link href="/my-account" className="transition-colors hover:text-neutral-900">My Account</Link>
            <a href="/#contact" className="transition-colors hover:text-neutral-900">Contact</a>
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

// ---------- JSON-LD (Course + supporting Events) ----------
function JsonLd() {
  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Professional Loc Maintenance Training (Cincinnati)",
    description:
      "Accredited loctician certification covering cleansing protocols, precision retwisting, and advanced styling applications. One-on-one instruction.",
    provider: {
      "@type": "Organization",
      name: "Designerae Inc.",
    },
  };

  const events = CLASSES.map((c) => {
    const start = `${c.date}T${c.startTime}:00`;
    const end = `${c.date}T${c.endTime}:00`;
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: c.title,
      startDate: start,
      endDate: end,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "Place", name: c.location, address: c.location },
      image: c.image.startsWith("http") ? c.image : undefined,
      description: c.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: c.price,
        availability: c.spots > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
        url: BOOKING_URL,
      },
      organizer: { "@type": "Organization", name: "Designerae Inc." },
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(events) }}
      />
    </>
  );
}

// ---------- Page ----------
export default function ClassesPage() {
  return (
    <main className="bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <JsonLd />

      {/* Navigation Header */}
      <Header />

      {/* Hero / Header */}
      <section className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="grid items-center gap-12 py-20 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                Classes & Workshops
              </h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-600">
                Learn healthy hair fundamentals, starter locs, maintenance, styling, and color theory with Designerae's
                hands-on classes. Limited seats. Reserve your spot below.
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

      {/* FEATURED PROGRAM: Professional Loc Maintenance Training */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Professional Loc Maintenance Training in Cincinnati
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              Maintaining locs requires specialized knowledge and precision techniques. Whether you're a loc wearer
              seeking to perfect your personal care routine or an aspiring stylist looking to expand your professional
              expertise, mastering the art of loc maintenance is essential. Designerae, Cincinnati's premier loc
              maintenance salon, offers comprehensive certification courses designed to elevate your skills and advance
              your career in natural hair care.
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              Our professional loc maintenance training provides in-depth instruction on highly textured natural hair
              care, industry-standard products, and cutting-edge styling tools. Through our personalized one-on-one
              instruction, participants gain the expertise needed to become certified locticians and deliver exceptional
              precision loc maintenance services. Expand your styling business and professional capabilities by
              enrolling in our accredited loctician certification program.
            </p>

            <h3 className="mt-12 text-2xl font-bold tracking-tight text-neutral-900">Comprehensive Curriculum</h3>
            <p className="mt-4 text-base text-neutral-700">
              Our loc maintenance certification program covers fundamental through advanced techniques across three core modules:
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Module 1: Cleansing Protocols</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Expert locticians introduce proven cleansing methodologies and demonstrate proper product selection for
                  optimal loc care. You'll learn to identify appropriate cleansing agents that promote healthy maintenance
                  while preventing common issues.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Module 2: Precision Retwisting Techniques</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Master the comb technique for precision maintenance. Covers product application, effective moisturizing,
                  and professional drying—skills essential for loc integrity and healthy growth.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Module 3: Advanced Styling Applications</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Develop proficiency in four professional styling techniques to create long-lasting, beautiful retwists.
                  We'll also discuss optimal maintenance schedules to build a predictable, recurring client base.
                </p>
              </div>
            </div>

            <h3 className="mt-12 text-2xl font-bold tracking-tight text-neutral-900">
              The Benefits of Professional Certification
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Expert Mentorship</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Connect with experienced professionals and receive personalized guidance throughout your training. Master
                  each technique and build confidence delivering precision services.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Career Advancement</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Whether enhancing personal care knowledge or building a practice, certification establishes credibility
                  as a skilled loctician and positions you for success.
                </p>
              </div>
            </div>

            <h3 className="mt-12 text-2xl font-bold tracking-tight text-neutral-900">Why Choose Designerae?</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Individualized Instruction</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  One-on-one training ensures personalized attention and mastery of advanced techniques and current products.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Professional Certification</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Receive an industry-recognized certification validating your expertise in precision loc maintenance.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Flexible Learning Options</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  In-person and virtual formats accommodate diverse schedules and learning preferences.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-base font-semibold text-neutral-900">Experienced Instructors</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Learn from seasoned locticians with extensive industry experience and ongoing mentorship.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={BOOKING_URL}
                className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                Enroll / Book Now
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Loc%20Maintenance%20Training%20Enrollment`}
                className="rounded-lg border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
              >
                Email Us About Enrollment
              </a>
            </div>

            <p className="mt-8 text-base leading-relaxed text-neutral-700">
              Elevate your expertise in precision loc maintenance with Designerae's comprehensive certification program.
              We look forward to supporting your professional development and helping you achieve excellence in natural hair care.
              Contact us today to enroll in our next available session.
            </p>
          </div>
        </Container>
      </section>

      {/* Additional Classes Grid */}
      <section className="bg-white py-24">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-neutral-900">
            Upcoming Classes & Workshops
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {CLASSES.map((c) => (
              <article
                key={c.slug}
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-neutral-900">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{c.description}</p>

                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-neutral-200 pt-5 text-sm text-neutral-700">
                    <div>
                      <dt className="font-semibold text-neutral-900">Date</dt>
                      <dd className="mt-1">{new Date(`${c.date}T00:00:00`).toLocaleDateString()}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900">Time</dt>
                      <dd className="mt-1">
                        {c.startTime} – {c.endTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900">Price</dt>
                      <dd className="mt-1 font-semibold text-emerald-600">{priceLabel(c.price)}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900">Level</dt>
                      <dd className="mt-1">{c.level ?? "All Levels"}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900">Spots</dt>
                      <dd className="mt-1">
                        {c.spots > 0 ? (
                          <span className="text-emerald-600">{c.spots} available</span>
                        ) : (
                          <span className="text-amber-600">Waitlist</span>
                        )}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-semibold text-neutral-900">Location</dt>
                      <dd className="mt-1">{c.location}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href={BOOKING_URL}
                      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href={googleCalendarUrl(c)}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                      </svg>
                      Add to Calendar
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-neutral-500">
                    * Payment & final scheduling are completed via our secure Square booking page.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}