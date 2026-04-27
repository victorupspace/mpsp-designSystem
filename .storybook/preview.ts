import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { mprsThemeLight, mprsThemeDark } from './mprs-theme';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },

    docs: {
      theme: mprsThemeLight,
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Sumário',
      },
    },

    backgrounds: {
      default: 'Claro',
      values: [
        { name: 'Claro', value: '#FFFFFF' },
        { name: 'Cinza', value: '#FAFAFA' },
        { name: 'Escuro', value: '#1A2332' },
        { name: 'Brand', value: '#E8891C' },
      ],
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '812px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
        },
        wide: {
          name: 'Wide',
          styles: { width: '1536px', height: '960px' },
        },
      },
    },

    options: {
      storySort: {
        order: [
          'Introdução',
          'Fundações',
          ['Cores', 'Tipografia', 'Espaçamento', 'Ícones'],
          'Componentes',
          ['Atoms', 'Molecules', 'Organisms'],
          '*',
        ],
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        Claro: 'light',
        Escuro: 'dark',
      },
      defaultTheme: 'Claro',
      attributeName: 'data-theme',
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
