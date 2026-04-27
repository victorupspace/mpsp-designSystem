import { create } from '@storybook/theming/create';

const brand = {
  primary: '#FF7000',
  dark:    '#FF5D00',
  light:   '#FF8300',
  subtle:  '#FFF0E5',
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

export const mprsThemeLight = create({
  base: 'light',

  brandTitle:  'MPRS Design System',
  brandUrl:    'https://www.mprs.mp.br',
  brandImage:  './assets/logo-mprs.svg',
  brandTarget: '_self',

  colorPrimary:   brand.primary,
  colorSecondary: brand.dark,

  appBg:           neutral.gray50,
  appContentBg:    neutral.white,
  appPreviewBg:    neutral.white,
  appBorderColor:  neutral.gray200,
  appBorderRadius: 0,

  fontBase: font.body,
  fontCode: font.mono,

  textColor:        neutral.softBlack,
  textInverseColor: neutral.white,
  textMutedColor:   neutral.gray500,

  barTextColor:     neutral.gray500,
  barSelectedColor: brand.primary,
  barHoverColor:    brand.dark,
  barBg:            neutral.white,

  inputBg:           neutral.white,
  inputBorder:       neutral.gray300,
  inputTextColor:    neutral.softBlack,
  inputBorderRadius: 0,

  booleanBg:         neutral.gray100,
  booleanSelectedBg: brand.primary,
});

export const mprsThemeDark = create({
  base: 'dark',

  brandTitle:  'MPRS Design System',
  brandUrl:    'https://www.mprs.mp.br',
  brandImage:  './assets/logo-mprs.svg',
  brandTarget: '_self',

  colorPrimary:   brand.light,
  colorSecondary: brand.primary,

  appBg:           '#0F1219',
  appContentBg:    '#1A2332',
  appPreviewBg:    '#1A2332',
  appBorderColor:  '#2D3B4E',
  appBorderRadius: 0,

  fontBase: font.body,
  fontCode: font.mono,

  textColor:        neutral.gray100,
  textInverseColor: '#1A2332',
  textMutedColor:   neutral.gray500,

  barTextColor:     neutral.gray500,
  barSelectedColor: brand.light,
  barHoverColor:    brand.primary,
  barBg:            '#0F1219',

  inputBg:           '#243044',
  inputBorder:       '#3D4F65',
  inputTextColor:    neutral.gray100,
  inputBorderRadius: 0,

  booleanBg:         '#243044',
  booleanSelectedBg: brand.primary,
});
