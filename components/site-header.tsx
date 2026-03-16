import Image from "next/image";
import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,243,234,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={192}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Family Owned Since 2012</p>
            <p className="truncate text-lg font-semibold text-[var(--brand-strong)]">{siteConfig.name}</p>
            <p className="hidden truncate text-xs text-[var(--muted)] xl:block">{siteConfig.address}</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <details className="group relative lg:hidden">
            <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/85 px-3 text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 group-open:hidden"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 group-open:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-[60] flex w-[min(24rem,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] flex-col border border-[var(--border)] bg-[rgba(255,253,248,0.98)] p-5 shadow-[0_24px_80px_rgba(14,34,67,0.24)]">
              <div className="mb-6 border-b border-[var(--border)] pb-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Navigation</p>
                <h2 className="text-lg font-semibold text-[var(--brand-strong)]">Menu</h2>
              </div>

              <nav aria-label="Primary mobile" className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-transparent bg-white/72 px-4 py-3 text-base font-semibold text-[var(--brand)] transition hover:border-[var(--accent)] hover:text-[var(--brand-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
