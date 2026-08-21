/**
 * YouTube IFrame Player API — loader and the slice of its surface this site
 * actually uses.
 *
 * The site drives the player itself (its own play/pause/mute chrome, its own
 * in-view autoplay), so the embed is created through the API rather than as a
 * plain iframe. See <HeroVideo /> in components/sections/03-Hero.tsx.
 */

export interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getIframe(): HTMLIFrameElement;
  /** Player modules — 'captions' (Flash-era name) and 'cc' (HTML5 name). */
  unloadModule(module: string): void;
  destroy(): void;
}

/** The player states we branch on. Mirrors YT.PlayerState. */
export const YT_STATE = {
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
} as const;

interface YouTubeApi {
  Player: new (
    host: HTMLElement | string,
    options: {
      videoId: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: { target: YouTubePlayer }) => void;
        onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
      };
    },
  ) => YouTubePlayer;
}

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YouTubeApi> | null = null;

/**
 * Load the IFrame API once per page and resolve when it is ready.
 *
 * The API only offers a single global ready callback, so every caller shares
 * one promise; any callback already registered is chained rather than
 * clobbered.
 */
export function loadYouTubeApi(): Promise<YouTubeApi> {
  if (typeof window === 'undefined') {
    // Server render: never resolves, and nothing awaits it outside an effect.
    return new Promise<YouTubeApi>(() => {});
  }
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<YouTubeApi>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT as YouTubeApi);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);
  });

  return apiPromise;
}

/**
 * Player parameters for an embed that reads as site furniture rather than a
 * YouTube upload: no control bar, no title card, no end screen of other
 * people's videos, no keyboard handling of its own.
 *
 * `loop` needs `playlist` set to the same id — that is how the embed loops a
 * single video. The ENDED handler in the player is the belt to this braces:
 * `loop` is ignored in a few playback paths, an explicit seek never is.
 */
export function chromelessPlayerVars(videoId: string): Record<string, string | number> {
  return {
    controls: 0,
    disablekb: 1,
    fs: 0,
    modestbranding: 1,
    rel: 0,
    iv_load_policy: 3,
    cc_load_policy: 0,
    playsinline: 1,
    loop: 1,
    playlist: videoId,
    // Start audible. Browsers refuse audible autoplay until the page has been
    // interacted with, so the player falls back to muted when that happens —
    // see `startPlayback` in the hero.
    mute: 0,
    origin: typeof window === 'undefined' ? '' : window.location.origin,
  };
}

/** Highest-resolution still YouTube publishes for a video. */
export function youTubePoster(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * Turn subtitles off and keep them off.
 *
 * `cc_load_policy: 0` only means "use the viewer's default", so anyone whose
 * YouTube account has captions switched on — or any video YouTube decides to
 * auto-caption — still gets them burned over the frame. Unloading the caption
 * module is the only thing that actually suppresses them, and it has to be
 * done again once playback starts, because the module is loaded with the
 * stream. Both module names are tried: the player answers to one or the other
 * depending on which build is served.
 */
export function disableCaptions(player: YouTubePlayer): void {
  for (const module of ['captions', 'cc']) {
    try {
      player.unloadModule(module);
    } catch {
      // Module not present in this player build — nothing to unload.
    }
  }
}
