'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Marquee } from '@/components/ui/Marquee';
import { TOKENS } from '@/lib/design-tokens';
import {
  chromelessPlayerVars,
  disableCaptions,
  loadYouTubeApi,
  youTubePoster,
  YT_STATE,
  type YouTubePlayer,
} from '@/lib/youtube';
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

/** Announced on the embedded frame, in place of "YouTube video player". */
const VIDEO_TITLE = 'Live system walkthrough — Raynaters Tech';

/**
 * The hero walkthrough, played through YouTube but wearing none of YouTube's
 * clothes: no control bar, no title card, no end screen, no click-through to
 * youtube.com. The frame gets the site's own play and mute chrome instead,
 * and the video runs on a loop.
 *
 * Pointer events are off on the embed itself, which is what keeps YouTube's
 * hover UI from ever appearing — every click lands on this component.
 */
function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  /**
   * Sound is on by default. Browsers refuse audible autoplay until the page
   * has been interacted with, so this flips to `true` at runtime whenever
   * that refusal happens — see `startPlayback` below.
   */
  const [isMuted, setIsMuted] = useState(false);
  /** The still stays up until the first frame is genuinely playing. */
  const [hasStarted, setHasStarted] = useState(false);

  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  /** Set once the viewer works the mute button, so nothing overrides them. */
  const mutePreferenceRef = useRef<boolean | null>(null);
  /** Set when the viewer pauses by hand, so scrolling back doesn't restart it. */
  const pausedByViewerRef = useRef(false);
  /** Whether the video is currently *meant* to be running. */
  const shouldPlayRef = useRef(false);
  /** Playback state, read inside timers where React state would be stale. */
  const isPlayingRef = useRef(false);
  /** Pending muted retry, armed whenever audible playback is attempted. */
  const audibleFallbackRef = useRef<number | undefined>(undefined);

  /**
   * Start the video with sound, and settle for muted only if the browser
   * refuses. A blocked audible autoplay does not throw and does not fall back
   * on its own — the player simply never starts — so the only way to tell is
   * to look a moment later and see whether anything is running.
   */
  const startPlayback = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    const wantMuted = mutePreferenceRef.current ?? false;
    if (wantMuted) player.mute();
    else player.unMute();
    setIsMuted(wantMuted);
    player.playVideo();

    window.clearTimeout(audibleFallbackRef.current);
    if (wantMuted) return;
    audibleFallbackRef.current = window.setTimeout(() => {
      const p = playerRef.current;
      if (!p || isPlayingRef.current || !shouldPlayRef.current) return;
      // Never override a viewer who has worked the mute button themselves.
      if (mutePreferenceRef.current !== null) return;
      p.mute();
      setIsMuted(true);
      p.playVideo();
    }, 1200);
  }, []);

  // Build the player. The API replaces the element it is handed with its own
  // iframe, so it gets a plain DOM node created here rather than a React one —
  // React must not be left reconciling a child that YouTube has swapped out.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const host = document.createElement('div');
    container.appendChild(host);

    void loadYouTubeApi().then((YT) => {
      if (cancelled) return;
      playerRef.current = new YT.Player(host, {
        videoId: CONTENT.hero.videoId,
        playerVars: chromelessPlayerVars(CONTENT.hero.videoId),
        events: {
          onReady: ({ target }) => {
            target.getIframe().setAttribute('title', VIDEO_TITLE);
            disableCaptions(target);
            // The frame may already have scrolled into view while the API
            // was still loading.
            if (shouldPlayRef.current && !pausedByViewerRef.current) startPlayback();
          },
          onStateChange: ({ data, target }) => {
            if (data === YT_STATE.PLAYING) {
              // Captions load with the stream, so they have to go again here.
              disableCaptions(target);
              isPlayingRef.current = true;
              setIsPlaying(true);
              setHasStarted(true);
            } else if (data === YT_STATE.PAUSED) {
              isPlayingRef.current = false;
              setIsPlaying(false);
            } else if (data === YT_STATE.ENDED) {
              // Straight back to the top: the walkthrough runs on a loop.
              target.seekTo(0, true);
              target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      window.clearTimeout(audibleFallbackRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
      container.replaceChildren();
    };
  }, [startPlayback]);

  /** Play while the frame is on screen, pause as soon as it leaves. */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          shouldPlayRef.current = true;
          if (!pausedByViewerRef.current) startPlayback();
        } else {
          shouldPlayRef.current = false;
          window.clearTimeout(audibleFallbackRef.current);
          playerRef.current?.pauseVideo();
        }
      },
      // Two-fifths on screen: enough that the video is genuinely being looked
      // at before it starts making noise.
      { threshold: 0.4 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [startPlayback]);

  /**
   * The browser grants audible playback after the first real interaction, so
   * the sound comes back on then — this is what recovers sound for anyone
   * whose browser blocked it at load, without ever costing us the autoplay.
   */
  useEffect(() => {
    const detach = () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
    function unlock() {
      const player = playerRef.current;
      // Never override a viewer who has worked the mute button themselves.
      if (player && mutePreferenceRef.current === null) {
        player.unMute();
        setIsMuted(false);
        // Audible autoplay may have been refused outright at load.
        if (shouldPlayRef.current && !pausedByViewerRef.current && !isPlayingRef.current) {
          player.playVideo();
        }
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
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      pausedByViewerRef.current = true;
      shouldPlayRef.current = false;
      window.clearTimeout(audibleFallbackRef.current);
      player.pauseVideo();
    } else {
      pausedByViewerRef.current = false;
      shouldPlayRef.current = true;
      // A click is the interaction browsers were holding out for, so this
      // one plays with sound.
      startPlayback();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const player = playerRef.current;
    if (!player) return;
    const next = !isMuted;
    mutePreferenceRef.current = next;
    if (next) player.mute();
    else player.unMute();
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
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        <div
          ref={containerRef}
          className="pointer-events-none absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:border-0"
        />
        {/* Holds the frame while the player loads, so the embed never shows
            its own poster state — and fades out once playback is under way. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={youTubePoster(CONTENT.hero.videoId)}
          alt=""
          aria-hidden
          onError={(e) => {
            e.currentTarget.src = `https://i.ytimg.com/vi/${CONTENT.hero.videoId}/hqdefault.jpg`;
          }}
          className={cn(
            'pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            hasStarted ? 'opacity-0' : 'opacity-100',
          )}
        />
        {/* Swallows every pointer event before it can reach the embed. The
            player never sees a hover, so its title bar, channel name, share
            and watch-later buttons have nothing to appear for; the click
            still bubbles to the frame's own play toggle. */}
        <div aria-hidden className="absolute inset-0 z-[1]" />
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 opacity-100 transition-opacity duration-300 sm:bottom-5 sm:right-5 sm:gap-3 sm:opacity-0 sm:group-hover:opacity-100">
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
