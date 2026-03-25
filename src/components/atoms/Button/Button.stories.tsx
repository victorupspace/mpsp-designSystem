import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

/**
 * # Button
 *
 * Componente de botão principal do Design System MPRS.
 *
 * Utilizado para ações primárias e secundárias em toda a interface.
 * Suporta 5 **variantes** visuais, 3 **tamanhos**, **ícones** e estado de **loading**.
 *
 * ## Uso
 *
 * ```tsx
 * import { Button } from '@mprs/design-system';
 *
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Confirmar ação
 * </Button>
 * ```
 *
 * ## Acessibilidade
 *
 * - Foco visível com `outline` de 3px na cor da marca.
 * - Estado `aria-busy` quando em loading.
 * - Botão desabilitado impede clique e reduz opacidade.
 */
const meta: Meta<typeof Button> = {
  title: 'Componentes/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Variante visual do botão',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'ButtonVariant' },
        category: 'Aparência',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'ButtonSize' },
        category: 'Aparência',
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa 100% da largura do container',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento (spinner)',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Estado',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Botão desabilitado',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Estado',
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo/label do botão',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Conteúdo',
      },
    },
    onClick: {
      description: 'Callback de clique',
      table: { category: 'Eventos' },
    },
  },
  args: {
    onClick: fn(),
    children: 'Botão',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ─── Stories: Variantes ─────────────────────────────────────────────────────── */

/** Variante primária — ação principal da página. */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Confirmar',
  },
};

/** Variante secundária — ação complementar. */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Detalhes',
  },
};

/** Variante outline — contorno apenas. */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Cancelar',
  },
};

/** Variante ghost — sem fundo, aparência sutil. */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Saiba mais',
  },
};

/** Variante de perigo — ações destrutivas. */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Excluir',
  },
};

/* ─── Stories: Tamanhos ──────────────────────────────────────────────────────── */

/** Tamanho pequeno (sm). */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Pequeno',
  },
};

/** Tamanho médio (md) — padrão. */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Médio',
  },
};

/** Tamanho grande (lg). */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Grande',
  },
};

/* ─── Stories: Estados ───────────────────────────────────────────────────────── */

/** Estado de carregamento com spinner. */
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Salvando...',
  },
};

/** Estado desabilitado. */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Indisponível',
  },
};

/** Largura total do container. */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Botão largura total',
  },
  parameters: {
    layout: 'padded',
  },
};

/* ─── Stories: Com ícone ─────────────────────────────────────────────────────── */

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

/** Com ícone à esquerda. */
export const WithIconLeft: Story = {
  args: {
    iconLeft: <PlusIcon />,
    children: 'Novo registro',
  },
};

/** Com ícone à direita. */
export const WithIconRight: Story = {
  args: {
    iconRight: <ArrowRightIcon />,
    children: 'Próximo',
  },
};

/** Com ícones em ambos os lados. */
export const WithBothIcons: Story = {
  args: {
    iconLeft: <PlusIcon />,
    iconRight: <ArrowRightIcon />,
    children: 'Criar e avançar',
  },
};

/* ─── Stories: Showcase (todas as variantes juntas) ──────────────────────────── */

/** Exibe todas as variantes lado a lado para comparação rápida. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

/** Exibe todos os tamanhos lado a lado. */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};
