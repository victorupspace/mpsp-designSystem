import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { spacing, radii } from '../tokens';

const SpacingBar: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '8px 0',
    }}
  >
    <span
      style={{
        minWidth: 60,
        fontSize: 13,
        fontWeight: 600,
        color: '#E8891C',
        fontFamily: 'var(--mprs-font-family-mono)',
        textAlign: 'right',
      }}
    >
      {name}
    </span>
    <span
      style={{
        minWidth: 80,
        fontSize: 12,
        color: '#A3A3A3',
        fontFamily: 'var(--mprs-font-family-mono)',
      }}
    >
      {value}
    </span>
    <div
      style={{
        width: value,
        height: 24,
        borderRadius: 4,
        background: 'linear-gradient(135deg, #E8891C 0%, #D4A023 100%)',
        minWidth: value === '0' ? 2 : undefined,
        opacity: value === '0' ? 0.3 : 1,
      }}
    />
  </div>
);

const RadiusSample: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div
      style={{
        width: 64,
        height: 64,
        backgroundColor: '#FFF7ED',
        border: '2px solid #E8891C',
        borderRadius: value,
      }}
    />
    <span style={{ fontSize: 12, fontWeight: 600, color: '#1A2332' }}>{name}</span>
    <span style={{ fontSize: 11, color: '#A3A3A3', fontFamily: 'var(--mprs-font-family-mono)' }}>
      {value}
    </span>
  </div>
);

const SpacingPage: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
    <h1
      style={{
        fontSize: 32,
        fontWeight: 800,
        color: '#1A2332',
        marginBottom: 8,
        fontFamily: 'var(--mprs-font-family-heading)',
      }}
    >
      Espaçamento
    </h1>
    <p
      style={{
        fontSize: 16,
        color: '#737373',
        marginBottom: 40,
        fontFamily: 'var(--mprs-font-family-body)',
        lineHeight: 1.6,
      }}
    >
      Escala de espaçamento e border-radius do Design System MPRS.
      Use <code>--mprs-space-*</code> e <code>--mprs-radius-*</code>.
    </p>

    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2332', marginBottom: 16 }}>
      Escala de Espaçamento
    </h2>
    <div style={{ marginBottom: 48 }}>
      {Object.entries(spacing)
        .filter(([, val]) => val !== '1px')
        .map(([key, val]) => (
          <SpacingBar key={key} name={key} value={val} />
        ))}
    </div>

    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2332', marginBottom: 16 }}>
      Border Radius
    </h2>
    <div
      style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        marginBottom: 40,
      }}
    >
      {Object.entries(radii).map(([key, val]) => (
        <RadiusSample key={key} name={key} value={val} />
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Fundações/Espaçamento',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Escala: Story = {
  render: () => <SpacingPage />,
};
