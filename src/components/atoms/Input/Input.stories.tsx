import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';

/**
 * # Input
 *
 * Campo de entrada de texto do Design System MPRS.
 *
 * Suporta label, helper text, mensagens de erro, ícones e 3 tamanhos.
 *
 * ## Uso
 * ```tsx
 * import { Input } from '@mprs/design-system';
 *
 * <Input label="Nome" placeholder="Digite seu nome completo" />
 * ```
 *
 * ## Acessibilidade
 * - Labels conectadas via `htmlFor` / `id`
 * - `aria-invalid` para estado de erro
 * - `aria-describedby` para mensagens de ajuda/erro
 */
const meta: Meta<typeof Input> = {
  title: 'Componentes/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      table: { defaultValue: { summary: 'default' }, category: 'Estado' },
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
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/** Campo padrão com label. */
export const Default: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
};

/** Com texto de ajuda. */
export const WithHelperText: Story = {
  args: {
    label: 'E-mail institucional',
    placeholder: 'seu.nome@mprs.mp.br',
    helperText: 'Use seu e-mail institucional do MPRS.',
  },
};

/** Com mensagem de erro. */
export const WithError: Story = {
  args: {
    label: 'CPF',
    placeholder: '000.000.000-00',
    defaultValue: '123.456',
    errorMessage: 'CPF inválido. Verifique e tente novamente.',
  },
};

/** Estado de sucesso. */
export const Success: Story = {
  args: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    defaultValue: 'usuario@mprs.mp.br',
    state: 'success',
    helperText: 'E-mail verificado com sucesso.',
  },
};

/** Tamanho pequeno. */
export const Small: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Pesquisar...',
    size: 'sm',
  },
};

/** Tamanho grande. */
export const Large: Story = {
  args: {
    label: 'Assunto',
    placeholder: 'Informe o assunto do processo',
    size: 'lg',
  },
};

/** Desabilitado. */
export const Disabled: Story = {
  args: {
    label: 'Campo protegido',
    defaultValue: 'Valor bloqueado',
    disabled: true,
  },
};

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
      clipRule="evenodd"
    />
  </svg>
);

/** Com ícone à esquerda. */
export const WithIcon: Story = {
  args: {
    label: 'Pesquisar processos',
    placeholder: 'Número ou assunto...',
    iconLeft: <SearchIcon />,
  },
};

/** Largura total. */
export const FullWidth: Story = {
  args: {
    label: 'Observações',
    placeholder: 'Digite suas observações...',
    fullWidth: true,
    helperText: 'Campo opcional.',
  },
  parameters: {
    layout: 'padded',
  },
};

/** Exibe todos os estados lado a lado. */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Input label="Default" placeholder="Padrão" />
      <Input label="Erro" defaultValue="Valor inválido" errorMessage="Campo obrigatório" />
      <Input label="Sucesso" defaultValue="Válido" state="success" />
      <Input label="Desabilitado" defaultValue="Bloqueado" disabled />
    </div>
  ),
  parameters: { layout: 'padded' },
};
