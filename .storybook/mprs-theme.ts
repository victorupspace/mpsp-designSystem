import { create } from '@storybook/theming/create';
import { colors, radii, typography } from '../src/tokens';

const brand = {
  primary: colors.brand.primary,
  dark:    colors.brand.primaryDark,
  light:   colors.brand.primaryLight,
};

const neutral = {
  softBlack: colors.neutral.black,
  gray50:    colors.neutral.gray50,
  gray100:   colors.neutral.gray100,
  gray200:   colors.neutral.gray200,
  gray300:   colors.neutral.gray300,
  gray500:   colors.neutral.gray500,
  white:     colors.neutral.white,
};

const font = {
  heading: typography.fontFamily.heading,
  body:    typography.fontFamily.body,
  mono:    typography.fontFamily.mono,
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
  appBorderRadius: Number.parseInt(radii.md, 10),

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
  inputBorderRadius: Number.parseInt(radii.md, 10),

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

  appBg:           colors.dark.surface.primary,
  appContentBg:    colors.dark.surface.secondary,
  appPreviewBg:    colors.dark.surface.secondary,
  appBorderColor:  colors.dark.border.default,
  appBorderRadius: Number.parseInt(radii.md, 10),

  fontBase: font.body,
  fontCode: font.mono,

  textColor:        neutral.gray100,
  textInverseColor: colors.dark.surface.secondary,
  textMutedColor:   neutral.gray500,

  barTextColor:     neutral.gray500,
  barSelectedColor: brand.light,
  barHoverColor:    brand.primary,
  barBg:            colors.dark.surface.primary,

  inputBg:           colors.dark.surface.tertiary,
  inputBorder:       colors.dark.border.strong,
  inputTextColor:    neutral.gray100,
  inputBorderRadius: Number.parseInt(radii.md, 10),

  booleanBg:         colors.dark.surface.tertiary,
  booleanSelectedBg: brand.primary,
});
