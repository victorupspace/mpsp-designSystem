/**
 * ============================================================================
 * MPRS Design System — Design Tokens
 * Ministério Público do Rio Grande do Sul
 * ============================================================================
 *
 * Arquitetura em 3 camadas (conforme variáveis exportadas do Figma):
 *
 *   Layer 1 — Core       : Escala bruta, sem significado semântico.
 *                          Fonte: Global: Core (Mode 1.tokens.json)
 *
 *   Layer 2 — Primitives : Paleta da marca e utilitários de cor.
 *                          Fonte: T1: MPRS - Primitives (Mode 1.tokens 2.json)
 *
 *   Layer 3 — Semantic   : Tokens contextuais que referenciam primitivos.
 *                          Fonte: MPRS (MPRS.tokens.json)
 *
 * ⚠️  Não edite os valores aqui diretamente — sincronize a partir do Figma:
 *     https://www.figma.com/design/TfCxXUl4Aqdt5PxhDdiCxE/MPRS---Design-System
 * ============================================================================
 */

// ─── Layer 1: Core ───────────────────────────────────────────────────────────

/** Escala de cinzas neutros (Global: Core). */
export const coreNeutral = {
  pureBlack: '#000000',
  softBlack: '#292929',
  white:     '#FFFFFF',
  gray50:    '#FAFAFA',
  gray100:   '#F5F5F5',
  gray200:   '#E5E5E5',
  gray300:   '#D4D4D4',
  gray400:   '#A3A3A3',
  gray500:   '#737373',
  gray600:   '#505050',
  gray700:   '#484848',
  gray800:   '#373737',
  gray900:   '#262626',
} as const;

/** Escala de espaçamento em px (Global: Core). Convertida para rem nos CSS variables. */
export const coreSpacing = {
  0:   '0',
  2:   '0.125rem',  // 2px
  4:   '0.25rem',   // 4px
  6:   '0.375rem',  // 6px
  8:   '0.5rem',    // 8px
  10:  '0.625rem',  // 10px
  12:  '0.75rem',   // 12px
  16:  '1rem',      // 16px
  20:  '1.25rem',   // 20px
  24:  '1.5rem',    // 24px
  32:  '2rem',      // 32px
  40:  '2.5rem',    // 40px
  48:  '3rem',      // 48px
  64:  '4rem',      // 64px
  80:  '5rem',      // 80px
  96:  '6rem',      // 96px
  128: '8rem',      // 128px
} as const;

/** Border radius (Global: Core). */
export const coreBorderRadius = {
  none: '0',
  sm:   '0.25rem',  // 4px
  md:   '0.5rem',   // 8px
  lg:   '1rem',     // 16px
  full: '9999px',
} as const;

/** Espessura de bordas (Global: Core). */
export const coreBorderWidth = {
  none: '0',
  sm:   '1px',
  md:   '2px',
  lg:   '4px',
} as const;

/** Breakpoints (Global: Core). */
export const coreBreakpoints = {
  xs: '0px',
  sm: '640px',
  md: '900px',
  lg: '1200px',
} as const;

// ─── Layer 2: Primitives ─────────────────────────────────────────────────────

/** Paleta da marca MPRS — escala de laranja/âmbar. */
export const primitiveBrand = {
  black: '#000000',
  100:   '#FFBD00',
  200:   '#FFAA00',
  300:   '#FF9700',
  400:   '#FF8300',
  500:   '#FF7000',   // Laranja primário
  600:   '#FF5D00',   // Laranja escuro (hover/active)
} as const;

/** Utilitário — Sucesso (verde). */
export const primitiveSuccess = {
  100: '#E2F7DF',
  200: '#B4D3BD',
  300: '#089446',    // Cor padrão
  400: '#036A30',    // Hover/active
} as const;

/** Utilitário — Alerta (amarelo). */
export const primitiveWarning = {
  100: '#FFF6C7',
  200: '#FBC06C',
  300: '#F6B603',    // Cor padrão
  400: '#DA9C0A',    // Hover/active
} as const;

/** Utilitário — Perigo/Erro (vermelho). */
export const primitiveDanger = {
  100: '#FFE7E7',
  200: '#F18282',
  300: '#E0260C',    // Cor padrão
  400: '#AD2626',    // Hover/active
} as const;

/** Utilitário — Informação (azul). */
export const primitiveInfo = {
  100: '#E5F1FF',
  200: '#ACD9FF',
  300: '#0651A4',    // Cor padrão
  400: '#202F52',    // Hover/active
} as const;

/**
 * Famílias tipográficas (T1: MPRS - Primitives).
 * - Bitter     → display, headline, title (serifada institucional)
 * - Montserrat → body, label (sans-serif principal)
 * - Karla      → alternativa sans-serif
 * - Syne       → alternativa display
 */
export const primitiveFontFamily = {
  montserrat: 'Montserrat',
  bitter:     'Bitter',
  karla:      'Karla',
  syne:       'Syne',
} as const;

// ─── Layer 3: Semantic ────────────────────────────────────────────────────────

/**
 * Cores semânticas de fundo (MPRS.tokens.json → color.background).
 * Cada categoria expõe: default, defaultHover, subtle, subtleHover.
 */
export const semanticBackground = {
  neutral: {
    default:     coreNeutral.gray100,        // #F5F5F5
    defaultHover: coreNeutral.gray200,       // #E5E5E5
  },
  brand: {
    default:     primitiveBrand[500],        // #FF7000
    defaultHover: primitiveBrand[600],       // #FF5D00
    subtle:      '#FFF0E5',                  // laranja muito claro
    subtleHover: '#FFE0CC',
    disabled:    coreNeutral.gray500,        // #737373
  },
  danger: {
    default:     primitiveDanger[300],       // #E0260C
    defaultHover: primitiveDanger[400],      // #AD2626
    subtle:      primitiveDanger[100],       // #FFE7E7
    subtleHover: primitiveDanger[200],       // #F18282
  },
  success: {
    default:     primitiveSuccess[300],      // #089446
    defaultHover: primitiveSuccess[400],     // #036A30
    subtle:      primitiveSuccess[100],      // #E2F7DF
    subtleHover: primitiveSuccess[200],      // #B4D3BD
  },
  warning: {
    default:     primitiveWarning[300],      // #F6B603
    defaultHover: primitiveWarning[400],     // #DA9C0A
    subtle:      primitiveWarning[100],      // #FFF6C7
    subtleHover: primitiveWarning[200],      // #FBC06C
  },
  info: {
    default:     primitiveInfo[300],         // #0651A4
    defaultHover: primitiveInfo[400],        // #202F52
    subtle:      primitiveInfo[100],         // #E5F1FF
    subtleHover: primitiveInfo[200],         // #ACD9FF
  },
} as const;

/**
 * Cores semânticas de borda (MPRS.tokens.json → color.border).
 */
export const semanticBorder = {
  neutral: {
    default:     coreNeutral.gray100,        // #F5F5F5
    defaultHover: coreNeutral.gray200,       // #E5E5E5
    prominent:   coreNeutral.gray600,        // #505050
    disabled:    coreNeutral.gray400,        // #A3A3A3
  },
  brand: {
    default:     primitiveBrand[500],        // #FF7000
    defaultHover: primitiveBrand[600],       // #FF5D00
    prominent:   primitiveBrand.black,       // #000000
    disabled:    coreNeutral.gray500,        // #737373
  },
  danger: {
    default:     primitiveDanger[300],
    defaultHover: primitiveDanger[400],
    subtle:      primitiveDanger[100],
    subtleHover: primitiveDanger[200],
  },
  success: {
    default:     primitiveSuccess[300],
    defaultHover: primitiveSuccess[400],
    subtle:      primitiveSuccess[100],
    subtleHover: primitiveSuccess[200],
  },
  warning: {
    default:     primitiveWarning[300],
    defaultHover: primitiveWarning[400],
    subtle:      primitiveWarning[100],
    subtleHover: primitiveWarning[200],
  },
  info: {
    default:     primitiveInfo[300],
    defaultHover: primitiveInfo[400],
    subtle:      primitiveInfo[100],
    subtleHover: primitiveInfo[200],
  },
} as const;

/**
 * Estilos de texto semânticos (MPRS.tokens.json → text style).
 * Mapeamento de papéis → família tipográfica.
 */
export const textStyle = {
  display:  primitiveFontFamily.bitter,      // Títulos de exibição
  headline: primitiveFontFamily.bitter,      // Cabeçalhos
  title:    primitiveFontFamily.bitter,      // Títulos de seção
  label:    primitiveFontFamily.montserrat,  // Labels de formulário e UI
  body:     primitiveFontFamily.montserrat,  // Texto corrido
} as const;

// ─── Exports de compatibilidade ───────────────────────────────────────────────
// Mantêm a API pública original consumida pelos componentes e doc stories.

/** @deprecated Prefira `semanticBackground` e `semanticBorder`. */
export const colors = {
  brand: {
    primary:       primitiveBrand[500],      // #FF7000
    primaryLight:  primitiveBrand[400],      // #FF8300
    primaryDark:   primitiveBrand[600],      // #FF5D00
    secondary:     primitiveBrand[200],      // #FFAA00
    secondaryLight: primitiveBrand[100],     // #FFBD00
    secondaryDark:  primitiveBrand[300],     // #FF9700
    gradient: `linear-gradient(180deg, ${primitiveBrand[500]} 0%, ${primitiveBrand[300]} 100%)`,
  },
  neutral: {
    white:   coreNeutral.white,
    gray50:  coreNeutral.gray50,
    gray100: coreNeutral.gray100,
    gray200: coreNeutral.gray200,
    gray300: coreNeutral.gray300,
    gray400: coreNeutral.gray400,
    gray500: coreNeutral.gray500,
    gray600: coreNeutral.gray600,
    gray700: coreNeutral.gray700,
    gray800: coreNeutral.gray800,
    gray900: coreNeutral.gray900,
    black:   coreNeutral.softBlack,
  },
  text: {
    primary:  coreNeutral.softBlack,         // #292929
    secondary: coreNeutral.gray600,          // #505050
    tertiary:  coreNeutral.gray500,          // #737373
    disabled:  coreNeutral.gray400,          // #A3A3A3
    inverse:   coreNeutral.white,
    link:      primitiveBrand[500],
    linkHover: primitiveBrand[600],
  },
  surface: {
    primary:     coreNeutral.white,
    secondary:   coreNeutral.gray50,
    tertiary:    coreNeutral.gray100,
    elevated:    coreNeutral.white,
    overlay:     'rgba(0, 0, 0, 0.5)',
    brand:       primitiveBrand[500],
    brandSubtle: semanticBackground.brand.subtle,
  },
  border: {
    default:  coreNeutral.gray200,
    strong:   coreNeutral.gray300,
    focus:    primitiveBrand[500],
    error:    primitiveDanger[300],
    success:  primitiveSuccess[300],
  },
  feedback: {
    success:      primitiveSuccess[300],
    successLight: primitiveSuccess[100],
    warning:      primitiveWarning[300],
    warningLight: primitiveWarning[100],
    error:        primitiveDanger[300],
    errorLight:   primitiveDanger[100],
    info:         primitiveInfo[300],
    infoLight:    primitiveInfo[100],
  },
  dark: {
    surface: {
      primary:   '#0F1219',
      secondary: '#1A2332',
      tertiary:  '#243044',
      elevated:  '#1E2A3A',
    },
    text: {
      primary:   coreNeutral.gray100,
      secondary: coreNeutral.gray400,
      tertiary:  coreNeutral.gray500,
    },
    border: {
      default: '#2D3B4E',
      strong:  '#3D4F65',
    },
  },
} as const;

export const typography = {
  fontFamily: {
    heading: `'${primitiveFontFamily.bitter}', Georgia, 'Times New Roman', serif`,
    body:     `'${primitiveFontFamily.montserrat}', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    alt:      `'${primitiveFontFamily.karla}', system-ui, sans-serif`,
    display:  `'${primitiveFontFamily.syne}', system-ui, sans-serif`,
    mono:     "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  },
  fontSize: {
    xs:   '0.625rem',  // 10px
    sm:   '0.75rem',   // 12px
    base: '0.875rem',  // 14px
    md:   '1rem',      // 16px
    lg:   '1.125rem',  // 18px
    xl:   '1.25rem',   // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem',   // 24px
    '4xl': '1.75rem',  // 28px
    '5xl': '2rem',     // 32px
    '6xl': '2.25rem',  // 36px
    '7xl': '2.5rem',   // 40px
    '8xl': '3rem',     // 48px
    '9xl': '4rem',     // 64px
  },
  fontWeight: {
    light:     300,
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
    black:     900,
  },
  lineHeight: {
    tight:   1.15,
    snug:    1.25,
    normal:  1.5,
    relaxed: 1.625,
    loose:   2,
  },
  letterSpacing: {
    tighter: '-0.015em',
    tight:   '-0.0625em',
    normal:  '0',
    wide:    '0.125em',
  },
} as const;

export const spacing    = coreSpacing;
export const radii      = coreBorderRadius;
export const breakpoints = coreBreakpoints;

export const shadows = {
  none:    'none',
  xs:      '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm:      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md:      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg:      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl:      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  brand:   `0 4px 14px 0 rgba(255, 112, 0, 0.3)`,
  brandLg: `0 10px 25px 0 rgba(255, 112, 0, 0.35)`,
  inner:   'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

export const transitions = {
  fast:   '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base:   '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow:   '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export const zIndex = {
  hide:     -1,
  base:      0,
  docked:   10,
  dropdown: 1000,
  sticky:   1100,
  banner:   1200,
  overlay:  1300,
  modal:    1400,
  popover:  1500,
  toast:    1600,
  tooltip:  1700,
} as const;

// ─── Export composto ──────────────────────────────────────────────────────────

const tokens = {
  // Layers
  core: { neutral: coreNeutral, spacing: coreSpacing, radii: coreBorderRadius, borderWidth: coreBorderWidth, breakpoints: coreBreakpoints },
  primitive: { brand: primitiveBrand, success: primitiveSuccess, warning: primitiveWarning, danger: primitiveDanger, info: primitiveInfo, fontFamily: primitiveFontFamily },
  semantic: { background: semanticBackground, border: semanticBorder, textStyle },
  // Compat
  colors,
  typography,
  spacing,
  radii,
  shadows,
  transitions,
  breakpoints,
  zIndex,
} as const;

export type DesignTokens = typeof tokens;
export default tokens;
