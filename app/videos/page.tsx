// app/videos/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

/* ===========================
   Constants
   =========================== */

// Square booking link
const BOOKING_URL =
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

// YouTube channel
const CHANNEL_HANDLE = "msdesignerae";
const CHANNEL_URL = `https://www.youtube.com/${CHANNEL_HANDLE}`;
const CHANNEL_EMBED_URL = `https://www.youtube.com/embed?listType=user_uploads&list=${CHANNEL_HANDLE}`;

// Add 6–12 video IDs from your channel (https://www.youtube.com/msdesignerae)
const MORE_VIDEO_IDS: string[] = [
  // "VIDEO_ID_1",
  // "VIDEO_ID_2",
  // "VIDEO_ID_3",
  // ...
];

// If you want to curate featured/popular videos later, wire them here
type VideoCategory = "All" | "Starter Locs" | "Maintenance" | "Color" | "Styling" | "Tips";
type Video = {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  category: VideoCategory;
  isFeatured?: boolean;
  isPopular?: boolean;
};

// Leave empty for now (we’re focusing on the channel embed + more videos grid)
const VIDEOS: Video[] = [];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    text: "The starter locs tutorial gave me the confidence to start my journey. Now I'm 6 months in and loving it!",
    service: "Started locs after watching tutorials",
  },
  {
    name: "James T.",
    text: "I've been maintaining my own locs for a year thanks to these videos. The retwist technique changed everything.",
    service: "Self-maintenance student",
  },
  {
    name: "Maya P.",
    text: "After watching the color tutorial, I booked a consultation. Best decision ever - my locs look amazing!",
    service: "Color consultation client",
  },
];

/* ===========================
   Layout helpers
   =========================== */
function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

/* ===========================
   Site Header (matches site theme)
   =========================== */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-70"
          >
            DESIGNERAE
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <Link href="/" className="transition-colors hover:text-neutral-900">Home</Link>

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

            <Link href="/my-account" className="transition-colors hover:text-neutral-900">My Account</Link>
            <a href="/#contact" className="transition-colors hover:text-neutral-900">Contact</a>
            <Link href="/shop" className="rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50">Shop</Link>
          </nav>

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

/* ===========================
   Reusable video card (kept for future curation)
   =========================== */
function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  const cardSize = featured ? "md:col-span-2" : "";
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/20 to-white shadow-lg shadow-emerald-900/5 transition-all hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 ${cardSize}`}>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {video.duration}
        </div>
      </div>
      <div className="relative p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
          {video.category}
        </div>
        {featured && (
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Featured
          </div>
        )}
        <h3 className="text-xl font-bold text-neutral-900">{video.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-2">{video.description}</p>
        <div className="mt-4 text-xs text-neutral-500">{video.views} views</div>
      </div>
    </article>
  );
}

/* ===========================
   NEW: “More Videos” thumbnail grid
   =========================== */
function MoreFromChannel({ ids }: { ids: string[] }) {
  if (!ids?.length) return null;

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">More Videos</h2>
          <p className="mt-2 text-neutral-600">Browse additional uploads from our channel</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ids.map((id) => {
            const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
            return (
              <a
                key={id}
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video">
                  <img
                    src={thumb}
                    alt="YouTube video thumbnail"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Page
   =========================== */
export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>("All");

  const categories: VideoCategory[] = ["All", "Starter Locs", "Maintenance", "Color", "Styling", "Tips"];

  const filteredVideos = VIDEOS.filter((video) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      video.title.toLowerCase().includes(q) || video.description.toLowerCase().includes(q);
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVideos = VIDEOS.filter((v) => v.isFeatured);
  const popularVideos = VIDEOS.filter((v) => v.isPopular);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>
        </div>

        <Container>
          <div className="py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Video Tutorials & Education
            </div>

            <h1 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Learn Loc Care From The Experts
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600">
              Tutorials, transformations, and healthy-hair guidance. Master loc maintenance with professional tips and techniques.
            </p>

            <div className="mt-10">
              <Link
                href={CHANNEL_URL}
                target="_blank"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-emerald-600/20 transition-all hover:shadow-2xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Channel Embed */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-20">
        <Container>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Latest From Our Channel
            </div>
            <h2 className="mt-4 text-4xl font-bold text-neutral-900">Watch Our Latest Videos</h2>
            <p className="mt-3 text-lg text-neutral-600">Professional tutorials, transformations, and loc care education</p>
          </div>

          <div className="mt-12">
            <div className="relative overflow-hidden rounded-2xl border-4 border-emerald-100 bg-black shadow-2xl shadow-emerald-900/20">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={CHANNEL_EMBED_URL}
                  title="Designerae YouTube Channel - Latest Uploads"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* NEW: Thumbnail grid to more videos */}
            <MoreFromChannel ids={MORE_VIDEO_IDS} />
          </div>
        </Container>
      </section>

      {/* Optional sections below can stay or be removed as you like */}
      {VIDEOS.length > 0 && (
        <section className="border-b border-neutral-200 bg-white py-8">
          <Container>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {(["All", "Starter Locs", "Maintenance", "Color", "Styling", "Tips"] as VideoCategory[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      selectedCategory === category
                        ? "bg-emerald-600 text-white shadow-md"
                        : "border border-neutral-300 text-neutral-700 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-600">
              Showing {filteredVideos.length} {filteredVideos.length === 1 ? "video" : "videos"}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </Container>
        </section>
      )}

      <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Success Stories</h2>
            <p className="mt-3 text-lg text-neutral-600">See how our tutorials have helped others</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 p-8 shadow-lg shadow-emerald-900/5">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-neutral-700">"{t.text}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-10 text-center shadow-xl">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="relative">
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">Never Miss a Tutorial</h3>
              <p className="mx-auto mt-3 max-w-md text-base text-neutral-600">
                Get new videos, tips, and exclusive content delivered to your inbox weekly.
              </p>
              <form className="mx-auto mt-8 max-w-md">
                <div className="flex flex-col gap-3 sm:flex-row">
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
                </div>
                <p className="mt-3 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-white to-neutral-50 py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-900">Want Hands-On Learning?</h3>
              <p className="mt-3 text-base text-neutral-600">
                Join our in-person classes and workshops for personalized instruction and certification.
              </p>
              <Link
                href="/classes"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg hover:shadow-emerald-600/30"
              >
                View Classes
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-900">Ready to Get Started?</h3>
              <p className="mt-3 text-base text-neutral-600">
                Book a consultation with our experts to create your personalized loc care plan.
              </p>
              <Link
                href={BOOKING_URL}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-600/20 transition-all hover:shadow-lg hover:shadow-amber-600/30"
              >
                Book Consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
