'use client';

import React from 'react';

export default function ServiceRow({
  title,
  items,
}: {
  title: string;
  items: { name: string; desc?: string; price?: string; duration?: string }[];
}) {
  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = (e.currentTarget.nextElementSibling as HTMLDivElement)!;
    el.style.height = el.style.height ? '' : `${el.scrollHeight}px`;
  };

  return (
    <div className="rounded-2xl bg-[#1f4f38] text-white shadow-lg ring-1 ring-black/10">
      <button
        className="group flex w-full items-center justify-between rounded-2xl px-6 py-4 text-left text-lg font-semibold"
        onClick={onToggle}
        type="button"
      >
        <span>{title}</span>
        <span className="text-white/70 group-hover:text-white">+</span>
      </button>
      <div className="h-0 overflow-hidden transition-[height] duration-300 ease-out">
        <ul className="divide-y divide-white/10 px-6 pb-4">
          {items.map((it, i) => (
            <li key={i} className="flex items-start justify-between gap-6 py-3">
              <div>
                <p className="text-base font-medium">{it.name}</p>
                {it.desc && <p className="mt-1 text-sm text-white/80">{it.desc}</p>}
                {it.duration && <p className="mt-1 text-xs text-white/60">{it.duration}</p>}
              </div>
              <div className="whitespace-nowrap text-right text-base font-semibold">
                {it.price ?? ''}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
