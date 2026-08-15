'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { LANDING_PAGES } from '@/lib/landing-pages';
import { cn } from '@/lib/utils';

const solutions = LANDING_PAGES.map((p) => ({
  label: p.navLabel,
  href: `/${p.slug}`,
  blurb: p.navBlurb,
}));

function Logo() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2.5"
      aria-label={`${CONTENT.brand.name} home`}
    >
      <Image
        src="/raynaters-mark.png"
        alt="Raynaters Tech Inc."
        width={80}
        height={80}
        priority
        className="h-10 w-10 shrink-0 border-2 border-ink object-cover"
      />
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] transition-[border-color,background-color] duration-300',
        scrolled || menuOpen
          ? 'border-b-2 border-border bg-bg/95 backdrop-blur-md'
          : 'border-b-2 border-transparent bg-bg',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {CONTENT.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-extrabold uppercase tracking-[0.05em] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Pulses only once they've started scrolling — a button that
              vibrates before anyone has read anything is just noise. */}
          <Button
            href={CONTENT.brand.bookHref}
            size="sm"
            pulse={scrolled}
            className="hidden sm:inline-flex"
          >
            {CONTENT.nav.cta}
          </Button>
          <Button href={CONTENT.brand.bookHref} size="sm" pulse={scrolled} className="sm:hidden">
            Free audit
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border-2 border-border text-text-secondary transition-colors hover:border-ink hover:text-text-primary lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t-2 border-border bg-bg lg:hidden">
          <div className="mx-auto max-w-content px-5 py-5 sm:px-8">
            <div className="space-y-1">
              {CONTENT.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-[-0.01em] text-text-primary transition-colors hover:bg-bg-sunken"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-5 border-t-2 border-border pt-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
              By industry
            </p>
            <div className="mt-3 space-y-1">
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 transition-colors hover:bg-bg-sunken"
                >
                  <span className="block text-[14px] font-bold text-text-primary">
                    {s.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-text-muted">
                    {s.blurb}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-4 space-y-1 border-t-2 border-border pt-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Case studies', href: '/case-studies' },
                { label: 'Resources', href: '/resources' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-[14px] font-bold text-text-primary transition-colors hover:bg-bg-sunken"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
