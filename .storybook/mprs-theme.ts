import { create } from '@storybook/theming/create';

/**
 * ============================================================================
 * MPRS Storybook Theme
 * ============================================================================
 * Cores sincronizadas com os Design Tokens do Figma (MPRS.tokens.json).
 * Brand primary: #FF7000 (brand-500)
 * Tipografia:    Bitter (headings) + Montserrat (body)
 * ============================================================================
 */

const brand = {
  primary:   '#FF7000',   // brand-500
  dark:      '#FF5D00',   // brand-600
  light:     '#FF8300',   // brand-400
  subtle:    '#FFF0E5',
};

const neutral = {
  softBlack: '#292929',
  gray50:    '#FAFAFA',
  gray100:   '#F5F5F5',
  gray200:   '#E5E5E5',
  gray300:   '#D4D4D4',
  gray500:   '#737373',
  white:     '#FFFFFF',
};

const font = {
  heading: "'Bitter', Georgia, serif",
  body:    "'Montserrat', system-ui, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', Consolas, monospace",
};

// ─── Tema Claro ───────────────────────────────────────────────────────────────

export const mprsThemeLight = create({
  base: 'light',

  // Brand
  brandTitle:  'MPRS Design System',
  brandUrl:    'https://www.mprs.mp.br',
  brandImage:  './assets/logo-mprs.svg',
  brandTarget: '_self',

  // Cores primárias da interface
  colorPrimary:   brand.primary,
  colorSecondary: brand.dark,

  // UI
  appBg:           neutral.gray50,
  appContentBg:    neutral.white,
  appPreviewBg:    neutral.white,
  appBorderColor:  neutral.gray200,
  appBorderRadius: 8,

  // Tipografia
  fontBase: font.body,
  fontCode: font.mono,

  // Texto
  textColor:        neutral.softBlack,
  textInverseColor: neutral.white,
  textMutedColor:   neutral.gray500,

  // Toolbar
  barTextColor:     neutral.gray500,
  barSelectedColor: brand.primary,
  barHoverColor:    brand.dark,
  barBg:            neutral.white,

  // Formulários
  inputBg:           neutral.white,
  inputBorder:       neutral.gray300,
  inputTextColor:    neutral.softBlack,
  inputBorderRadius: 6,

  // Booleanos / tags
  booleanBg:         neutral.gray100,
  booleanSelectedBg: brand.primary,
});

// ─── Tema Escuro ──────────────────────────────────────────────────────────────

export const mprsThemeDark = create({
  base: 'dark',

  // Brand
  brandTitle:  'MPRS Design System',
  brandUrl:    'https://www.mprs.mp.br',
  brandImage:  './assets/logo-mprs.svg',
  brandTarget: '_self',

  // Cores primárias
  colorPrimary:   brand.light,
  colorSecondary: brand.primary,

  // UI
  appBg:           '#0F1219',
  appContentBg:    '#1A2332',
  appPreviewBg:    '#1A2332',
  appBorderColor:  '#2D3B4E',
  appBorderRadius: 8,

  // Tipografia
  fontBase: font.body,
  fontCode: font.mono,

  // Texto
  textColor:        neutral.gray100,
  textInverseColor: '#1A2332',
  textMutedColor:   neutral.gray500,

  // Toolbar
  barTextColor:     neutral.gray500,
  barSelectedColor: brand.light,
  barHoverColor:    brand.primary,
  barBg:            '#0F1219',

  // Formulários
  inputBg:           '#243044',
  inputBorder:       '#3D4F65',
  inputTextColor:    neutral.gray100,
  inputBorderRadius: 6,

  // Booleanos
  booleanBg:         '#243044',
  booleanSelectedBg: brand.primary,
});
