import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from './Checkbox';

/**
 * # Checkbox
 *
 * Componente de checkbox do Design System MPRS.
 *
 * ## Uso
 * ```tsx
 * import { Checkbox } from '@mprs/design-system';
 *
 * <Checkbox label="Aceito os termos de uso" />
 * ```
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Componentes/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
    },
    indeterminate: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Estado' },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Estado' },
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Aceito os termos de uso',
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção selecionada',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notificações por e-mail',
    description: 'Receber atualizações sobre processos e prazos.',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Selecionar todos',
    indeterminate: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Opção compacta',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção indisponível',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Selecionado e bloqueado',
    disabled: true,
    defaultChecked: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Meio Ambiente" defaultChecked />
      <Checkbox label="Direitos Humanos" />
      <Checkbox label="Patrimônio Público" defaultChecked />
      <Checkbox label="Consumidor" />
      <Checkbox label="Saúde Pública" disabled />
    </div>
  ),
};
