// ============================================================
// RAYNATERS TECH — Design Tokens / Single Source of Truth
// Light editorial system: warm paper, ink, one lime highlight,
// one red signal. Square corners. Heavy uppercase type.
// ============================================================

type Bezier = [number, number, number, number];

export const TOKENS = {
  colors: {
    bg: '#FAFAF8',
    bgAlt: '#FFFFFF',
    bgSunken: '#F3F2EE',
    ink: '#121211',
    inkSoft: '#1C1B19',
    border: '#E5E3DC',
    borderStrong: '#121211',
    textPrimary: '#121211',
    textSecondary: '#4A4843',
    textMuted: '#6E6B62',
    textOnInk: '#FAFAF8',
    accent: '#D3FBA3',
    accentInk: '#3D5A11',
    signal: '#C93A1B',
    success: '#2F8F4E',
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as Bezier,
    easeIn: [0.4, 0, 1, 1] as Bezier,
    easeOut: [0, 0, 0.2, 1] as Bezier,
    durationFast: 0.3,
    durationNormal: 0.6,
    durationSlow: 1.0,
    durationCountUp: 2.0,
    staggerWord: 0.04,
    staggerCard: 0.08,
  },
};

export type ColorToken = keyof typeof TOKENS.colors;
