// app/components/InteractiveHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL =
  "https://book.squareup.com/appointments/b82dfff4-1d62-4cf1-8084-9c3d885367ad/location/ERNW2MBNFJMXH/services";

// Uses the 6 images you have in /public (g1.jpg...g6.jpg)
const PHOTOS = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.jpg"];

export default function InteractiveHero() {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState<null | number>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // autoplay
  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((v) => (v + 1) % PHOTOS.length), 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // keyboard in lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => ((v ?? 0) + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft") setOpen((v) => ((v ?? 0) - 1 + PHOTOS.length) % PHOTOS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="relative isolate overflow-hidden bg-neutral-900">
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {PHOTOS.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Designerae hero"
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/85 via-neutral-900/55 to-neutral-900" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[75vh] flex-col items-center justify-center py-32 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            DESIGNERAE
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-200">
            Expert loc care with precision and artistry. Timely, high-quality service tailored to every texture.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={BOOKING_URL}
              className="rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <a
              href="#services"
              className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Services
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

          {/* Thumbnails */}
          <div className="mt-10 hidden gap-3 md:flex">
            {PHOTOS.map((src, idx) => (
              <button
                key={src}
                onClick={() => setOpen(idx)}
                className={`relative h-20 w-28 overflow-hidden rounded-lg border transition-all ${
                  idx === i ? "border-emerald-400 ring-2 ring-emerald-400/40" : "border-white/20"
                }`}
                title="View photo"
              >
                <Image src={src} alt="Thumbnail" fill sizes="192px" className="object-cover" />
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex gap-2">
            {PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  idx === i ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative w-full max-w-5xl">
            <Image
              src={PHOTOS[open]}
              alt="Full size"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-xl object-contain"
              priority
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              className="absolute right-3 top-3 rounded-md bg-white/20 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/30"
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => ((v ?? 0) - 1 + PHOTOS.length) % PHOTOS.length);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-white/20 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/30"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => ((v ?? 0) + 1) % PHOTOS.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white/20 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/30"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
