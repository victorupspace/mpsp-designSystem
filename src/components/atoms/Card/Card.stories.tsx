import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from './Card';

const UserIcon = () => (
  <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="20" stroke="currentColor" strokeWidth="2" />
    <circle cx="21" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10.5 31c1.7-5.2 5.4-8 10.5-8s8.8 2.8 10.5 8c-2.9 2.1-6.4 3.2-10.5 3.2S13.4 33.1 10.5 31Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="20" stroke="currentColor" strokeWidth="2" />
    <path
      d="M16.2 10.5h3.4l1.8 8-2.8 1.8c1.4 3.1 3.8 5.5 6.9 6.9l1.8-2.8 8 1.8v3.4c0 1.1-.8 2-1.9 2.1-12.6.8-22-8.6-21.2-21.2.1-1.1 1-2 2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="20" stroke="currentColor" strokeWidth="2" />
    <path
      d="M14 9.5h11l5 5v18H14v-23Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M25 9.5v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 19v8m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof Card> = {
  title: 'Componentes/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
      table: { type: { summary: 'ReactNode' }, category: 'Conteúdo' },
    },
    children: {
      control: 'text',
      table: { type: { summary: 'ReactNode' }, category: 'Conteúdo' },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, category: 'Estado' },
    },
  },
  args: {
    icon: <UserIcon />,
    children: 'Atendimento Presencial',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const AtendimentoPresencial: Story = {
  args: {
    icon: <UserIcon />,
    children: 'Atendimento Presencial',
  },
};

export const AtendimentoTelefonico: Story = {
  args: {
    icon: <PhoneIcon />,
    children: 'Atendimento telefônico',
  },
};

export const ReceberDocumento: Story = {
  args: {
    icon: <DocumentIcon />,
    children: 'Receber documento',
  },
};

export const LayoutAnexo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Card icon={<UserIcon />}>Atendimento Presencial</Card>
      <Card icon={<PhoneIcon />}>Atendimento telefônico</Card>
      <Card icon={<DocumentIcon />}>Receber documento</Card>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    icon: <DocumentIcon />,
    children: 'Indisponível',
    disabled: true,
  },
};
