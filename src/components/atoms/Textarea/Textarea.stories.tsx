import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from './Textarea';

/**
 * # Textarea
 *
 * Campo de texto multilinha do Design System MPRS.
 *
 * ## Uso
 * ```tsx
 * import { Textarea } from '@mprs/design-system';
 *
 * <Textarea label="Observações" placeholder="Descreva..." rows={4} />
 * ```
 */
const meta: Meta<typeof Textarea> = {
  title: 'Componentes/Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      table: { defaultValue: { summary: 'vertical' }, category: 'Layout' },
    },
    fullWidth: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Layout' },
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Descrição do caso',
    placeholder: 'Descreva os detalhes do caso...',
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Parecer',
    placeholder: 'Escreva seu parecer...',
    helperText: 'Máximo de 2000 caracteres.',
    rows: 5,
  },
};

export const WithError: Story = {
  args: {
    label: 'Justificativa',
    placeholder: 'Campo obrigatório...',
    errorMessage: 'Este campo é obrigatório.',
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo protegido',
    defaultValue: 'Este conteúdo não pode ser editado.',
    disabled: true,
    rows: 3,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Observações gerais',
    placeholder: 'Escreva aqui suas observações...',
    fullWidth: true,
    rows: 6,
    helperText: 'Campo opcional.',
  },
  parameters: { layout: 'padded' },
};

export const NoResize: Story = {
  args: {
    label: 'Comentário fixo',
    placeholder: 'Sem redimensionamento...',
    resize: 'none',
    rows: 3,
  },
};
