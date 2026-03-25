import { addons } from '@storybook/manager-api';
import { mprsThemeLight } from './mprs-theme';

/**
 * ============================================================================
 * Storybook Manager — Aplica o tema MPRS à interface do Storybook
 * ============================================================================
 *
 * Este arquivo controla a aparência do *painel do Storybook* em si
 * (sidebar, toolbar, menus), NÃO dos componentes renderizados.
 *
 * Para alternar entre tema claro/escuro do painel, troque:
 *   mprsThemeLight → mprsThemeDark
 *
 * ============================================================================
 */

addons.setConfig({
  theme: mprsThemeLight,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
