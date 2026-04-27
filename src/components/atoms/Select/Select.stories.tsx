import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Select } from './Select';

const comarcas = [
  { label: 'Porto Alegre', value: 'poa' },
  { label: 'Caxias do Sul', value: 'caxias' },
  { label: 'Pelotas', value: 'pelotas' },
  { label: 'Santa Maria', value: 'santa-maria' },
  { label: 'Novo Hamburgo', value: 'novo-hamburgo' },
  { label: 'Canoas', value: 'canoas' },
  { label: 'Rio Grande', value: 'rio-grande' },
  { label: 'Passo Fundo', value: 'passo-fundo' },
];

const meta: Meta<typeof Select> = {
  title: 'Componentes/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
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
    options: comarcas,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Comarca',
    placeholder: 'Selecione uma comarca',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Promotoria',
    placeholder: 'Selecione a promotoria',
    helperText: 'Selecione a promotoria de destino.',
    options: [
      { label: '1ª Promotoria de Justiça', value: '1pj' },
      { label: '2ª Promotoria de Justiça', value: '2pj' },
      { label: '3ª Promotoria de Justiça', value: '3pj' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Tipo de processo',
    placeholder: 'Selecione...',
    errorMessage: 'Seleção obrigatória.',
    options: [
      { label: 'Cível', value: 'civel' },
      { label: 'Criminal', value: 'criminal' },
      { label: 'Administrativo', value: 'admin' },
    ],
  },
};

export const Small: Story = {
  args: {
    label: 'Filtro rápido',
    placeholder: 'Selecione...',
    size: 'sm',
    options: [
      { label: 'Todos', value: 'all' },
      { label: 'Ativos', value: 'active' },
      { label: 'Inativos', value: 'inactive' },
    ],
  },
};

export const Large: Story = {
  args: {
    label: 'Área de atuação',
    placeholder: 'Selecione a área',
    size: 'lg',
    options: [
      { label: 'Meio Ambiente', value: 'env' },
      { label: 'Direitos Humanos', value: 'dh' },
      { label: 'Patrimônio Público', value: 'pp' },
      { label: 'Consumidor', value: 'consumer' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo bloqueado',
    placeholder: 'Indisponível',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Status',
    placeholder: 'Selecione...',
    options: [
      { label: 'Aberto', value: 'open' },
      { label: 'Em andamento', value: 'progress' },
      { label: 'Arquivado (indisponível)', value: 'archived', disabled: true },
      { label: 'Concluído', value: 'done' },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Comarca',
    placeholder: 'Selecione uma comarca',
    fullWidth: true,
  },
  parameters: { layout: 'padded' },
};
