// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Designerae Inc.",
  description:
    "Thoughts on healthy loc care, color, styling, maintenance, and salon updates from Designerae.",
};

// Square booking link
const BOOKING_URL =
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  cover?: string; // /public path or remote URL allowed by next.config.js
  tags?: string[];
};

// ✨ Replace with your real posts (or wire to a CMS later)
const POSTS: Post[] = [
  {
    slug: "healthy-loc-maintenance-myths",
    title: "Healthy Loc Maintenance: 5 Myths, Busted",
    excerpt:
      "We clear up the most common misunderstandings about retwists, product build-up, and wash schedules.",
    date: "2025-10-01",
    cover: "/blog/healthy-loc-maintenance.jpg",
    tags: ["Loc Care", "Education"],
  },
  {
    slug: "choosing-your-first-loc-style",
    title: "Choosing Your First Loc Style",
    excerpt:
      "Starter methods, parting patterns, and what to consider before your first install.",
    date: "2025-09-12",
    cover: "/blog/first-loc-style.jpg",
    tags: ["Starter Locs"],
  },
  {
    slug: "coloring-locs-safely",
    title: "Coloring Locs Safely: Pro Tips",
    excerpt:
      "Yes, you can color locs beautifully—here's how we protect strength, tone, and shine.",
    date: "2025-08-05",
    cover: "/blog/coloring-locs-safely.jpg",
    tags: ["Color"],
  },
];

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

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/20 to-white shadow-lg shadow-emerald-900/5 transition-all hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1">
      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-emerald-100/40 to-transparent blur-2xl transition-all group-hover:scale-150"></div>
      
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        <Image
          src={post.cover || "/blog/placeholder.jpg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>

      <div className="relative p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <time 
            dateTime={post.date}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3 py-1 font-medium text-emerald-800"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(post.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {post.tags?.map((t) => (
            <span 
              key={t} 
              className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-medium text-amber-700"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-bold text-neutral-900 transition-colors group-hover:text-emerald-700">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-base leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>

        <div className="mt-5">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            Read Article
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

function BlogJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Designerae Inc. Blog",
    url: "https://your-domain.com/blog",
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `https://your-domain.com/blog/${p.slug}`,
      image: p.cover ? [`https://your-domain.com${p.cover}`] : undefined,
      description: p.excerpt,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <BlogJsonLd />
      
      {/* Navigation Header */}
      <Header />
      
      {/* Hero Section - Extravagant Header */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>
        </div>

        <Container>
          <div className="py-20 text-center sm:py-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Expert Insights & Education
            </div>

            <h1 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Designerae Blog
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600">
              Tips, education, and salon updates—because healthy, beautiful locs deserve expert care.
            </p>

            {/* Stats or features */}
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/60 px-6 py-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/30">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-900">Expert Tips</p>
                  <p className="text-xs text-neutral-600">Professional Advice</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white/60 px-6 py-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-600/30">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-900">Loc Care Education</p>
                  <p className="text-xs text-neutral-600">Learn & Grow</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/60 px-6 py-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/30">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-900">Salon Updates</p>
                  <p className="text-xs text-neutral-600">Stay Informed</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Posts Grid Section */}
      <section className="relative py-20">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-emerald-100/20 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-amber-100/20 blur-3xl"></div>
        </div>

        <Container>
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Latest Articles</h2>
            <p className="mt-3 text-lg text-neutral-600">
              Discover expert insights and professional tips for your loc journey
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Newsletter signup CTA */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-10 text-center shadow-xl">
              {/* Decorative elements */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl"></div>
              <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl"></div>
              
              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-600/30">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                  Stay Updated with Loc Care Tips
                </h3>
                <p className="mx-auto mt-3 max-w-md text-base text-neutral-600">
                  Get the latest articles, tips, and exclusive salon updates delivered to your inbox.
                </p>

                <div className="mx-auto mt-8 max-w-md">
                  <form className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                    >
                      Subscribe
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-neutral-500">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}