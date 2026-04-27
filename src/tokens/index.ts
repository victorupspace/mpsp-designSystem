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

export const coreSpacing = {
  0:   '0',
  2:   '0.125rem',
  4:   '0.25rem',
  6:   '0.375rem',
  8:   '0.5rem',
  10:  '0.625rem',
  12:  '0.75rem',
  16:  '1rem',
  20:  '1.25rem',
  24:  '1.5rem',
  32:  '2rem',
  40:  '2.5rem',
  48:  '3rem',
  64:  '4rem',
  80:  '5rem',
  96:  '6rem',
  128: '8rem',
} as const;

export const coreBorderRadius = {
  none: '0',
  sm:   '0',
  md:   '0',
  lg:   '0',
  full: '0',
} as const;

export const coreBorderWidth = {
  none: '0',
  sm:   '1px',
  md:   '2px',
  lg:   '4px',
} as const;

export const coreBreakpoints = {
  xs: '0px',
  sm: '640px',
  md: '900px',
  lg: '1200px',
} as const;

export const primitiveBrand = {
  black: '#000000',
  100:   '#FFBD00',
  200:   '#FFAA00',
  300:   '#FF9700',
  400:   '#FF8300',
  500:   '#FF7000',
  600:   '#FF5D00',
} as const;

export const primitiveSuccess = {
  100: '#E2F7DF',
  200: '#B4D3BD',
  300: '#089446',
  400: '#036A30',
} as const;

export const primitiveWarning = {
  100: '#FFF6C7',
  200: '#FBC06C',
  300: '#F6B603',
  400: '#DA9C0A',
} as const;

export const primitiveDanger = {
  100: '#FFE7E7',
  200: '#F18282',
  300: '#E0260C',
  400: '#AD2626',
} as const;

export const primitiveInfo = {
  100: '#E5F1FF',
  200: '#ACD9FF',
  300: '#0651A4',
  400: '#202F52',
} as const;

export const primitiveFontFamily = {
  montserrat: 'Montserrat',
  bitter:     'Bitter',
  karla:      'Karla',
  syne:       'Syne',
} as const;

export const semanticBackground = {
  neutral: {
    default:      coreNeutral.gray100,
    defaultHover: coreNeutral.gray200,
  },
  brand: {
    default:      primitiveBrand[500],
    defaultHover: primitiveBrand[600],
    subtle:       '#FFF0E5',
    subtleHover:  '#FFE0CC',
    disabled:     coreNeutral.gray500,
  },
  danger: {
    default:      primitiveDanger[300],
    defaultHover: primitiveDanger[400],
    subtle:       primitiveDanger[100],
    subtleHover:  primitiveDanger[200],
  },
  success: {
    default:      primitiveSuccess[300],
    defaultHover: primitiveSuccess[400],
    subtle:       primitiveSuccess[100],
    subtleHover:  primitiveSuccess[200],
  },
  warning: {
    default:      primitiveWarning[300],
    defaultHover: primitiveWarning[400],
    subtle:       primitiveWarning[100],
    subtleHover:  primitiveWarning[200],
  },
  info: {
    default:      primitiveInfo[300],
    defaultHover: primitiveInfo[400],
    subtle:       primitiveInfo[100],
    subtleHover:  primitiveInfo[200],
  },
} as const;

export const semanticBorder = {
  neutral: {
    default:      coreNeutral.gray100,
    defaultHover: coreNeutral.gray200,
    prominent:    coreNeutral.gray600,
    disabled:     coreNeutral.gray400,
  },
  brand: {
    default:      primitiveBrand[500],
    defaultHover: primitiveBrand[600],
    prominent:    primitiveBrand.black,
    disabled:     coreNeutral.gray500,
  },
  danger: {
    default:      primitiveDanger[300],
    defaultHover: primitiveDanger[400],
    subtle:       primitiveDanger[100],
    subtleHover:  primitiveDanger[200],
  },
  success: {
    default:      primitiveSuccess[300],
    defaultHover: primitiveSuccess[400],
    subtle:       primitiveSuccess[100],
    subtleHover:  primitiveSuccess[200],
  },
  warning: {
    default:      primitiveWarning[300],
    defaultHover: primitiveWarning[400],
    subtle:       primitiveWarning[100],
    subtleHover:  primitiveWarning[200],
  },
  info: {
    default:      primitiveInfo[300],
    defaultHover: primitiveInfo[400],
    subtle:       primitiveInfo[100],
    subtleHover:  primitiveInfo[200],
  },
} as const;

export const textStyle = {
  display:  primitiveFontFamily.bitter,
  headline: primitiveFontFamily.bitter,
  title:    primitiveFontFamily.bitter,
  label:    primitiveFontFamily.montserrat,
  body:     primitiveFontFamily.montserrat,
} as const;

export const colors = {
  brand: {
    primary:        primitiveBrand[500],
    primaryLight:   primitiveBrand[400],
    primaryDark:    primitiveBrand[600],
    secondary:      primitiveBrand[200],
    secondaryLight: primitiveBrand[100],
    secondaryDark:  primitiveBrand[300],
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
    primary:   coreNeutral.softBlack,
    secondary: coreNeutral.gray600,
    tertiary:  coreNeutral.gray500,
    disabled:  coreNeutral.gray400,
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
    default: coreNeutral.gray200,
    strong:  coreNeutral.gray300,
    focus:   primitiveBrand[500],
    error:   primitiveDanger[300],
    success: primitiveSuccess[300],
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
    xs:    '0.625rem',
    sm:    '0.75rem',
    base:  '0.875rem',
    md:    '1rem',
    lg:    '1.125rem',
    xl:    '1.25rem',
    '2xl': '1.375rem',
    '3xl': '1.5rem',
    '4xl': '1.75rem',
    '5xl': '2rem',
    '6xl': '2.25rem',
    '7xl': '2.5rem',
    '8xl': '3rem',
    '9xl': '4rem',
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

const tokens = {
  core: { neutral: coreNeutral, spacing: coreSpacing, radii: coreBorderRadius, borderWidth: coreBorderWidth, breakpoints: coreBreakpoints },
  primitive: { brand: primitiveBrand, success: primitiveSuccess, warning: primitiveWarning, danger: primitiveDanger, info: primitiveInfo, fontFamily: primitiveFontFamily },
  semantic: { background: semanticBackground, border: semanticBorder, textStyle },
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
