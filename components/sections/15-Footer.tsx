import Image from 'next/image';
import Link from 'next/link';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { LANDING_PAGES } from '@/lib/landing-pages';

const solutionsColumn = {
  label: 'By industry',
  links: LANDING_PAGES.map((p) => ({ label: p.navLabel, href: `/${p.slug}` })),
};

export default function Footer() {
  const { footer, brand } = CONTENT;

  return (
    <footer id="footer" className="border-t-2 border-bg/15 bg-ink pb-10 pt-16 text-text-on-ink sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Image
              src="/raynaters-mark.png"
              alt="Raynaters Tech Inc."
              width={96}
              height={96}
              className="h-12 w-12 border-2 border-bg/25 object-cover"
            />

            <p className="mt-7 max-w-[16ch] text-[26px] font-extrabold uppercase leading-[1.1] tracking-[-0.04em] text-bg sm:text-[32px] md:text-[36px]">
              {footer.tagline}
            </p>

            <p className="mt-5 max-w-[40ch] text-[14px] font-medium leading-[1.6] text-bg/60">
              {footer.blurb}
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
              {[solutionsColumn, ...footer.columns].map((col) => (
                <div key={col.label}>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
                    {col.label}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="break-words text-[13px] font-medium text-bg/65 transition-colors hover:text-bg"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t-2 border-bg/15 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-bg/60 md:flex-row md:items-center">
            <p>{footer.copyright}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy" className="transition-colors hover:text-bg">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-bg">
                Terms
              </Link>
              <a href={`mailto:${brand.email}`} className="transition-colors hover:text-bg">
                {brand.email}
              </a>
            </div>
            <p>{footer.locale}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
