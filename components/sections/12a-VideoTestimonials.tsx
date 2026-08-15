'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, BadgeCheck } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
};

type Item = (typeof CONTENT.videoTestimonials.items)[number];

function VideoCard({
  item,
  isActive,
  onActivate,
  onEnd,
}: {
  item: Item;
  isActive: boolean;
  onActivate: () => void;
  onEnd: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Metadata often lands before React attaches its handlers, so read the
  // element directly on mount as well as listening for the events.
  const syncDuration = useCallback(() => {
    const d = ref.current?.duration;
    if (d && Number.isFinite(d)) setDuration(d);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (v.readyState >= 1) syncDuration();
    v.addEventListener('loadedmetadata', syncDuration);
    v.addEventListener('durationchange', syncDuration);
    return () => {
      v.removeEventListener('loadedmetadata', syncDuration);
      v.removeEventListener('durationchange', syncDuration);
    };
  }, [syncDuration]);

  // Parent decides who is playing; the card just obeys.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    if (isActive) {
      v.play().catch(() => {
        // Autoplay policy can still refuse sound — retry silently.
        v.muted = true;
        setMuted(true);
        void v.play();
      });
    } else {
      v.pause();
      v.currentTime = 0;
      setTime(0);
    }
  }, [isActive]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = ref.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = pct * v.duration;
    setTime(v.currentTime);
  }, []);

  const pct = duration ? (time / duration) * 100 : 0;

  return (
    <figure className="relative">
      {/* Offset slab — the frame the video sits proud of. */}
      <span
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 bg-accent sm:translate-x-3 sm:translate-y-3"
      />

      <div className="relative flex flex-col border-2 border-ink bg-bg-alt">
        <div
          role="button"
          tabIndex={0}
          aria-label={isActive ? 'Pause video' : 'Play video'}
          onClick={onActivate}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onActivate();
            }
          }}
          className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden border-b-2 border-ink bg-ink"
        >
          <video
            ref={ref}
            src={item.src}
            playsInline
            preload="metadata"
            onLoadedMetadata={syncDuration}
            onDurationChange={syncDuration}
            onTimeUpdate={(e) => {
              setTime(e.currentTarget.currentTime);
              if (!duration) syncDuration();
            }}
            onEnded={onEnd}
            className="h-full w-full object-cover"
          />

          {/* Idle scrim + play affordance */}
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 grid place-items-center bg-ink/30 transition-opacity duration-300',
              isActive ? 'opacity-0' : 'opacity-100',
            )}
          >
            <span className="grid h-[72px] w-[72px] place-items-center border-2 border-ink bg-accent text-ink shadow-[0_5px_0_0_var(--ink)] transition-transform duration-300 group-hover:scale-105">
              <Play size={28} fill="currentColor" className="ml-1" />
            </span>
          </div>

          <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 bg-ink px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-bg">
            <span aria-hidden className="rec-dot h-1.5 w-1.5 rounded-full bg-accent" />
            Client review
          </span>

          <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-bg">
            <BadgeCheck size={12} strokeWidth={3} className="text-accent" />
            Verified
          </span>
        </div>

        {/* Control bar */}
        <div className="flex items-center gap-3 border-b-2 border-ink bg-ink px-3 py-2.5">
          <button
            type="button"
            onClick={onActivate}
            aria-label={isActive ? 'Pause' : 'Play'}
            className="grid h-9 w-9 shrink-0 place-items-center border-2 border-bg/25 bg-transparent text-bg transition-colors hover:border-accent hover:bg-accent hover:text-ink"
          >
            {isActive ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" className="ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => {
              const v = ref.current;
              if (v) {
                v.currentTime = 0;
                setTime(0);
              }
            }}
            aria-label="Restart"
            className="grid h-9 w-9 shrink-0 place-items-center border-2 border-bg/25 text-bg transition-colors hover:border-accent hover:text-accent"
          >
            <RotateCcw size={14} strokeWidth={2.75} />
          </button>

          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <div
              role="presentation"
              onClick={seek}
              className="group/bar h-1.5 w-full cursor-pointer bg-bg/20"
            >
              <div className="relative h-full bg-accent" style={{ width: `${pct}%` }}>
                <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent opacity-0 transition-opacity group-hover/bar:opacity-100" />
              </div>
            </div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] tabular-nums text-bg/55">
              {fmt(time)} / {fmt(duration)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const v = ref.current;
              if (!v) return;
              v.muted = !v.muted;
              setMuted(v.muted);
            }}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="grid h-9 w-9 shrink-0 place-items-center border-2 border-bg/25 text-bg transition-colors hover:border-accent hover:text-accent"
          >
            {muted ? <VolumeX size={14} strokeWidth={2.5} /> : <Volume2 size={14} strokeWidth={2.5} />}
          </button>
        </div>

        <figcaption className="px-5 py-5">
          <p className="text-[13px] font-extrabold uppercase leading-[1.3] tracking-[-0.02em] text-text-primary">
            {item.headline}
          </p>
          <p className="mt-1.5 text-[12px] font-medium text-text-muted">
            {item.name ? `${item.name}${item.role ? ` · ${item.role}` : ''}` : 'Verified client review'}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

/**
 * Portrait phone-recorded client videos. Only one plays at a time —
 * starting one stops the others, so the section never turns into noise.
 */
export default function VideoTestimonials() {
  const { videoTestimonials } = CONTENT;
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section
      id="video-testimonials"
      className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24"
    >
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow>{videoTestimonials.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{videoTestimonials.title}</SectionTitle>
          <SectionSub className="mt-5">{videoTestimonials.sub}</SectionSub>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {videoTestimonials.items.map((item, i) => (
            <VideoCard
              key={item.src}
              item={item}
              isActive={active === i}
              onActivate={() => setActive((cur) => (cur === i ? null : i))}
              onEnd={() => setActive((cur) => (cur === i ? null : cur))}
            />
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.08em] text-text-muted">
            Recorded on their own phones · Nothing scripted, nothing edited
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
