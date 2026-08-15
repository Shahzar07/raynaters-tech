import Link from 'next/link';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail. Pair with `breadcrumbSchema(items)` JSON-LD on
 * the same page. Render inside a Container.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] text-text-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-text-secondary" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="transition-colors hover:text-text-primary"
                >
                  {c.name}
                </Link>
              )}
              {!last && (
                <span aria-hidden className="text-text-muted">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
