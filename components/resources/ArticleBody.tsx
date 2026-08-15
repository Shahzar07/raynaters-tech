import Image from 'next/image';
import type { Block } from '@/lib/resources/types';

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="pt-4 font-extrabold uppercase text-balance text-[26px] leading-[1.15] tracking-[-0.03em] text-text-primary sm:text-[32px]"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="pt-2 text-[19px] font-medium tracking-[-0.01em] text-text-primary sm:text-[20px]"
              >
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <p
                key={i}
                className="text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]"
              >
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case 'callout':
            return (
              <div
                key={i}
                className="rounded-none border border-ink bg-accent/30 p-5 sm:p-6"
              >
                <p className="text-pretty text-[16px] leading-relaxed text-text-primary sm:text-[17px]">
                  {block.text}
                </p>
              </div>
            );
          case 'table':
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border">
                      {block.columns.map((col, c) => (
                        <th
                          key={c}
                          className={
                            'p-3 text-[13px] font-medium text-text-secondary sm:text-[14px]' +
                            (c === 0 ? '' : ' text-center')
                          }
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-border">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={
                              'p-3 text-[14px] sm:text-[15px]' +
                              (c === 0
                                ? ' text-text-primary'
                                : ' text-center text-text-secondary')
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'image':
            return (
              <figure key={i} className="my-2">
                <div className="relative aspect-video overflow-hidden rounded-none border border-border">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-[13px] text-text-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
