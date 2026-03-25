import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { mprsThemeLight, mprsThemeDark } from './mprs-theme';

// Importa os tokens como CSS Variables globais
import '../src/styles/globals.css';

/**
 * ============================================================================
 * Storybook Preview — Configuração global dos componentes
 * ============================================================================
 *
 * - Injeta CSS variables (Design Tokens) em todos os stories
 * - Configura o seletor Light/Dark mode na toolbar
 * - Define decorators globais
 * - Configura parâmetros de documentação (autodocs)
 *
 * ============================================================================
 */

const preview: Preview = {
  parameters: {
    // ─── Layout padrão ─────────────────────────────────────────────────────
    layout: 'centered',

    // ─── Controles automáticos ─────────────────────────────────────────────
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },

    // ─── Documentação ──────────────────────────────────────────────────────
    docs: {
      theme: mprsThemeLight,
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Sumário',
      },
    },

    // ─── Backgrounds (Canvas do preview de componentes) ────────────────────
    backgrounds: {
      default: 'Claro',
      values: [
        { name: 'Claro', value: '#FFFFFF' },
        { name: 'Cinza', value: '#FAFAFA' },
        { name: 'Escuro', value: '#1A2332' },
        { name: 'Brand', value: '#E8891C' },
      ],
    },

    // ─── Viewport (responsividade) ─────────────────────────────────────────
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

    // ─── Opções ────────────────────────────────────────────────────────────
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

  // ─── Decorators globais ────────────────────────────────────────────────────
  decorators: [
    // Seletor Light / Dark Mode via data-attribute
    withThemeByDataAttribute({
      themes: {
        Claro: 'light',
        Escuro: 'dark',
      },
      defaultTheme: 'Claro',
      attributeName: 'data-theme',
    }),
  ],

  // ─── Tags globais ──────────────────────────────────────────────────────────
  tags: ['autodocs'],
};

export default preview;
