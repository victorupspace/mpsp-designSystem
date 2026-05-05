import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const storyStackStyle: CSSProperties = {
  display: 'grid',
  gap: '32px',
  justifyItems: 'start',
};

const storyRowStyle: CSSProperties = {
  display: 'flex',
  gap: '24px',
  flexWrap: 'wrap',
  alignItems: 'center',
};

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

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
      clipRule="evenodd"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

export const Primary: Story = {
  args: {
    variant: 'primary',
    iconRight: <ArrowRightIcon />,
    children: 'Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    iconRight: <ArrowRightIcon />,
    children: 'Label',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Cancelar',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Saiba mais',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Excluir',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Pequeno',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Médio',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Grande',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Salvando...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Indisponível',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Botão largura total',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithIconLeft: Story = {
  args: {
    iconLeft: <PlusIcon />,
    children: 'Novo registro',
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: <ArrowRightIcon />,
    children: 'Próximo',
  },
};

export const WithBothIcons: Story = {
  args: {
    iconLeft: <PlusIcon />,
    iconRight: <ArrowRightIcon />,
    children: 'Criar e avançar',
  },
};

export const PrimaryVariations: Story = {
  name: 'Variações primárias',
  render: () => (
    <div style={storyStackStyle}>
      <Button variant="primary" iconRight={<ArrowRightIcon />}>Label</Button>
      <Button variant="primary" iconLeft={<ArrowLeftIcon />}>Label</Button>
      <Button variant="primary">Label</Button>
    </div>
  ),
};

export const PrimaryStates: Story = {
  name: 'Estados primários',
  render: () => (
    <div style={storyStackStyle}>
      <div style={storyRowStyle}>
        <Button variant="primary" iconRight={<ArrowRightIcon />}>Label</Button>
        <Button variant="primary" iconLeft={<ArrowLeftIcon />}>Label</Button>
        <Button variant="primary">Label</Button>
      </div>
      <div style={storyRowStyle}>
        <Button
          variant="primary"
          iconRight={<ArrowRightIcon />}
          style={{ '--mprs-btn-bg': '#0F181D', '--mprs-btn-border': '#0F181D' } as CSSProperties}
        >
          Label
        </Button>
        <Button
          variant="primary"
          iconLeft={<ArrowLeftIcon />}
          style={{ '--mprs-btn-bg': '#0F181D', '--mprs-btn-border': '#0F181D' } as CSSProperties}
        >
          Label
        </Button>
        <Button
          variant="primary"
          style={{ '--mprs-btn-bg': '#0F181D', '--mprs-btn-border': '#0F181D' } as CSSProperties}
        >
          Label
        </Button>
      </div>
      <div style={storyRowStyle}>
        <Button variant="primary" iconRight={<ArrowRightIcon />} disabled>Label</Button>
        <Button variant="primary" iconLeft={<ArrowLeftIcon />} disabled>Label</Button>
        <Button variant="primary" disabled>Label</Button>
      </div>
    </div>
  ),
};

export const SecondaryVariations: Story = {
  name: 'Variações secundárias',
  render: () => (
    <div style={storyStackStyle}>
      <Button variant="secondary" iconRight={<ArrowRightIcon />}>Label</Button>
      <Button variant="secondary" iconLeft={<ArrowLeftIcon />}>Label</Button>
      <Button variant="secondary">Label</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={storyRowStyle}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};
