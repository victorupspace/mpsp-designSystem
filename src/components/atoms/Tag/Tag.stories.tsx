import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Componentes/Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['black', 'white', 'brand'],
      table: { defaultValue: { summary: 'black' }, category: 'Aparência' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' }, category: 'Aparência' },
    },
    children: {
      control: 'text',
      table: { type: { summary: 'ReactNode' }, category: 'Conteúdo' },
    },
  },
  args: {
    children: 'Atualização',
    variant: 'black',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Black: Story = {
  args: {
    children: '29/04/22',
    variant: 'black',
  },
};

export const White: Story = {
  args: {
    children: '29/04/22',
    variant: 'white',
  },
  parameters: {
    backgrounds: { default: 'Cinza' },
  },
};

export const Brand: Story = {
  args: {
    children: 'Atualização',
    variant: 'brand',
  },
};

export const LayoutAnexo: Story = {
  render: () => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
      <Tag variant="black" size="md">
        29/04/22
      </Tag>
      <Tag variant="brand" size="md">
        Atualização
      </Tag>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag variant="black">Preto</Tag>
      <Tag variant="white">Branco</Tag>
      <Tag variant="brand">Atualização</Tag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag size="sm">Pequena</Tag>
      <Tag size="md">Média</Tag>
    </div>
  ),
};
