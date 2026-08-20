'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Marquee } from '@/components/ui/Marquee';
import { TOKENS } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: TOKENS.motion.staggerWord } },
};

const wordItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: TOKENS.motion.ease },
  },
};

/**
 * The only Boldonse on the page. Its caps fill the whole em box, so it
 * needs much looser leading than a normal display face.
 *
 * The line breaks in `h1Lines` are authored, so each one has to clear its
 * container unbroken. Type is sized against the longest line
 * ("IT NEEDS BETTER AI SYSTEMS.") at every breakpoint.
 */
function AnimatedHeadline() {
  const lines = CONTENT.hero.h1Lines;
  return (
    <motion.h1
      variants={wordContainer}
      initial="hidden"
      animate="visible"
      className="font-display uppercase text-text-primary text-[22px] leading-[1.34] tracking-[-0.04em] sm:text-[34px] sm:leading-[1.32] md:text-[44px] lg:text-[58px] lg:leading-[1.3] lg:tracking-[-0.05em]"
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split(' ').map((w, i, arr) => (
            <motion.span key={`${lineIdx}-${i}`} variants={wordItem} className="inline-block whitespace-pre">
              {w}
              {i < arr.length - 1 && ' '}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  /**
   * Sound is on by default. Browsers refuse audible autoplay until the user
   * has interacted with the page, so this flips to `true` at runtime whenever
   * that refusal happens — see `play()` below.
   */
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  /** Set once the viewer works the mute button, so autoplay stops overriding them. */
  const mutePreferenceRef = useRef<boolean | null>(null);
  /** Set when the viewer pauses by hand, so scrolling back doesn't restart it. */
  const pausedByViewerRef = useRef(false);
  /**
   * Whether the video is currently *meant* to be running. `play()` resolves
   * asynchronously, so without this a viewer who scrolls past mid-start gets
   * the fallback restarting the video off-screen.
   */
  const shouldPlayRef = useRef(false);

  // Keep the element in step with React state. The `muted` prop alone is not
  // reliable — React does not always reflect it onto the DOM node.
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = isMuted;
  }, [isMuted]);

  /**
   * Play while the frame is on screen, pause as soon as it leaves. Audible
   * playback is attempted first and falls back to muted rather than failing
   * silently, so the video always runs even when the browser blocks sound.
   */
  useEffect(() => {
    const frame = frameRef.current;
    const v = videoRef.current;
    if (!frame || !v) return;

    const play = async () => {
      const wantMuted = mutePreferenceRef.current ?? false;
      try {
        v.muted = wantMuted;
        await v.play();
        // Scrolled away while the play promise was still pending.
        if (!shouldPlayRef.current) {
          v.pause();
          return;
        }
        setIsMuted(wantMuted);
        setIsPlaying(true);
        return;
      } catch {
        // Audible autoplay refused — fall through to a muted attempt.
      }
      // Only retry if the frame is still on screen. Without this the fallback
      // fires on the AbortError raised by our own pause() and restarts the
      // video after the viewer has already scrolled past it.
      if (!shouldPlayRef.current) return;
      try {
        v.muted = true;
        await v.play();
        if (!shouldPlayRef.current) {
          v.pause();
          return;
        }
        setIsMuted(true);
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          shouldPlayRef.current = true;
          if (!pausedByViewerRef.current) void play();
        } else {
          shouldPlayRef.current = false;
          v.pause();
          setIsPlaying(false);
        }
      },
      // Two-fifths on screen: enough that the video is genuinely being looked
      // at before it starts making noise.
      { threshold: 0.4 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  /**
   * The browser grants audible playback after the first real interaction, so
   * retry once the viewer touches the page — this is what actually delivers
   * sound-on-by-default for anyone whose browser blocked it at load.
   */
  useEffect(() => {
    const detach = () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
    function unlock() {
      const v = videoRef.current;
      // Never override a viewer who has worked the mute button themselves.
      if (v && mutePreferenceRef.current === null && v.muted) {
        // Safe to do while paused too — it just means sound is on next play.
        v.muted = false;
        setIsMuted(false);
      }
      detach();
    }
    // Deliberately not `{ once: true }`: the handler can decline to act, and
    // a one-shot listener would burn the only gesture we get.
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return detach;
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      pausedByViewerRef.current = true;
      shouldPlayRef.current = false;
      v.pause();
      setIsPlaying(false);
    } else {
      pausedByViewerRef.current = false;
      shouldPlayRef.current = true;
      void v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const next = !isMuted;
    mutePreferenceRef.current = next;
    v.muted = next;
    setIsMuted(next);
  };

  return (
    <motion.div
      ref={frameRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.5 }}
      className="group relative mx-auto mt-12 max-w-[1000px] cursor-pointer border-2 border-ink bg-bg-sunken sm:mt-14 md:mt-16"
      onClick={togglePlay}
    >
      <div className="absolute -top-[1px] left-4 z-10 -translate-y-1/2 bg-ink px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-on-ink sm:left-6 sm:text-[11px]">
        Live system walkthrough
      </div>
      <div className="aspect-video w-full overflow-hidden">
        <video
          ref={videoRef}
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={CONTENT.hero.videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-100 transition-opacity duration-300 sm:bottom-5 sm:right-5 sm:gap-3 sm:opacity-0 sm:group-hover:opacity-100">
        <button
          onClick={toggleMute}
          className="grid h-10 w-10 place-items-center border-2 border-ink bg-bg text-ink transition-colors hover:bg-accent"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={17} strokeWidth={2.5} /> : <Volume2 size={17} strokeWidth={2.5} />}
        </button>
        <button
          onClick={togglePlay}
          className="grid h-12 w-12 place-items-center border-2 border-ink bg-accent text-ink transition-colors hover:bg-ink hover:text-accent"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
        </button>
      </div>
    </motion.div>
  );
}

/** The three numbers the audit says must appear before any scrolling. */
function ProofTriple() {
  return (
    <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-3 border-2 border-ink sm:mt-12">
      {CONTENT.hero.proof.map((p, i) => (
        <div
          key={p.label}
          className={cn(
            'px-2 py-4 text-center sm:px-4 sm:py-5',
            i > 0 && 'border-l-2 border-ink',
          )}
        >
          <p className="text-[18px] font-extrabold tracking-[-0.04em] text-text-primary sm:text-[26px] md:text-[30px]">
            {p.value}
          </p>
          <p className="mt-1 text-[9px] font-extrabold uppercase leading-tight tracking-[0.1em] text-text-muted sm:text-[11px]">
            {p.label}
          </p>
        </div>
      ))}
    </div>
  );
}

// Logos authored white-on-transparent are invisible on a white card,
// so they get flipped to solid black instead.
const WHITE_LOGOS = new Set([
  'Anthropic', 'Github', 'Notion', 'OpenAI', 'Vercel', 'Pipedream', 'LangChain',
]);

// These assets already spell the brand out, so they get room to breathe
// and no text label — printing the name twice looks like a mistake.
const WORDMARKS = new Set(['Zapier', 'Make', 'LangChain', 'GoHighLevel']);

// The GoHighLevel asset is a white wordmark, so it disappears on a white
// card. It sits on an ink chip instead — which is how the brand ships it.
const DARK_CHIP = new Set(['GoHighLevel']);

// A few icon files carry heavy internal padding — scale compensates.
const LOGO_SCALE: Record<string, string> = {
  Vercel: 'scale-[1.7]',
  OpenAI: 'scale-[1.6]',
  Notion: 'scale-[1.45]',
  Pipedream: 'scale-[1.35]',
  Claude: 'scale-[1.15]',
};

function LogoCard({ item }: { item: { name: string; logo: string } }) {
  const isWordmark = WORDMARKS.has(item.name);
  const onChip = DARK_CHIP.has(item.name);

  return (
    <div className="flex h-[68px] shrink-0 items-center gap-3.5 border-2 border-border bg-bg-alt px-5 transition-colors duration-300 hover:border-ink sm:h-[76px] sm:px-7">
      {/* Fixed box, so a card never resizes when its image finishes loading
          and jolts the marquee mid-scroll. `cn` is a plain join with no
          tailwind-merge, so these sizes have to stay mutually exclusive. */}
      <span
        className={cn(
          'grid shrink-0 place-items-center',
          onChip
            ? 'h-10 w-[132px] bg-ink px-2.5'
            : isWordmark
              ? 'h-7 w-[112px]'
              : 'h-8 w-8',
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logo}
          alt={isWordmark ? `${item.name} logo` : ''}
          aria-hidden={isWordmark ? undefined : true}
          loading="lazy"
          className={cn(
            'w-auto object-contain',
            isWordmark ? 'max-h-6 max-w-full' : 'max-h-8 max-w-[32px]',
            LOGO_SCALE[item.name],
            WHITE_LOGOS.has(item.name) && 'brightness-0',
          )}
        />
      </span>
      {!isWordmark && (
        <span className="whitespace-nowrap text-[12px] font-extrabold uppercase tracking-[0.08em] text-text-primary sm:text-[13px]">
          {item.name}
        </span>
      )}
    </div>
  );
}

/**
 * Two rows running against each other — the counter-motion reads as a
 * bigger stack than a single strip of the same logos ever does.
 */
function TrustStrip() {
  const logos = CONTENT.hero.trustLogos;
  const half = Math.ceil(logos.length / 2);
  const rowOne = logos.slice(0, half);
  const rowTwo = logos.slice(half);

  return (
    <div className="mt-16 border-t-2 border-border pt-10 sm:mt-20">
      <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
        {CONTENT.hero.trustLabel}
      </p>

      <div className="mt-8 space-y-4">
        <Marquee speed="slow" gap="gap-4" pauseOnHover>
          {rowOne.map((item) => (
            <LogoCard key={item.name} item={item} />
          ))}
        </Marquee>
        <Marquee speed="slow" direction="right" gap="gap-4" pauseOnHover>
          {rowTwo.map((item) => (
            <LogoCard key={item.name} item={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TOKENS.motion.ease, delay: 0.1 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 border-2 border-ink bg-bg-alt px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-primary sm:text-[11px]">
              <span aria-hidden className="h-2 w-2 bg-signal" />
              {CONTENT.hero.eyebrow}
            </span>
          </motion.div>

          <div className="mt-7 sm:mt-8">
            <AnimatedHeadline />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.6 }}
            className="mx-auto mt-7 max-w-[640px] text-[16px] font-medium leading-[1.62] text-text-secondary sm:text-[18px] md:text-[19px]"
          >
            {CONTENT.hero.sub}{' '}
            <span className="mark-accent font-extrabold uppercase tracking-[-0.01em] text-ink">
              {CONTENT.hero.subHighlight}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.72 }}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button href={CONTENT.brand.bookHref} size="lg" withArrow pulse depth>
              {CONTENT.hero.primaryCta}
            </Button>
            <Button href="#automate" size="lg" variant="secondary">
              {CONTENT.hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-5 text-[12px] font-bold uppercase tracking-[0.06em] text-text-muted sm:text-[13px]"
          >
            {CONTENT.hero.ctaNote}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.9 }}
          >
            <ProofTriple />
          </motion.div>
        </div>

        <HeroVideo />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 1 }}
        >
          <TrustStrip />
        </motion.div>
      </Container>
    </section>
  );
}
