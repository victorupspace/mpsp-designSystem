import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

/**
 * # Badge
 *
 * Componente de badge/tag para indicar status, categorias ou contadores.
 *
 * ## Uso
 * ```tsx
 * import { Badge } from '@mprs/design-system';
 *
 * <Badge variant="success">Ativo</Badge>
 * <Badge variant="error" dot />
 * ```
 */
const meta: Meta<typeof Badge> = {
  title: 'Componentes/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'success', 'warning', 'error', 'info'],
      table: { defaultValue: { summary: 'default' }, category: 'Aparência' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
    },
    dot: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Aparência' },
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Padrão' } };

export const Brand: Story = { args: { variant: 'brand', children: 'MPRS' } };

export const Success: Story = { args: { variant: 'success', children: 'Ativo' } };

export const Warning: Story = { args: { variant: 'warning', children: 'Pendente' } };

export const Error: Story = { args: { variant: 'error', children: 'Erro' } };

export const Info: Story = { args: { variant: 'info', children: 'Informação' } };

export const SmallSize: Story = { args: { size: 'sm', children: 'Pequeno' } };

export const WithDot: Story = {
  args: { variant: 'success', dot: true, children: 'Online' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Padrão</Badge>
      <Badge variant="brand">MPRS</Badge>
      <Badge variant="success">Ativo</Badge>
      <Badge variant="warning">Pendente</Badge>
      <Badge variant="error">Erro</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
