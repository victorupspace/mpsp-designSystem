import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../tokens';

const TypeSample: React.FC<{
  name: string;
  size: string;
  weight?: number;
  font?: string;
}> = ({ name, size, weight = 400, font }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      padding: '16px 0',
      borderBottom: '1px solid #E5E5E5',
    }}
  >
    <div style={{ minWidth: 100 }}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: '#E8891C',
          fontFamily: 'var(--mprs-font-family-mono)',
        }}
      >
        {name}
      </span>
      <br />
      <span style={{ fontSize: 11, color: '#A3A3A3', fontFamily: 'var(--mprs-font-family-mono)' }}>
        {size}
      </span>
    </div>
    <span
      style={{
        fontSize: size,
        fontWeight: weight,
        fontFamily: font || 'var(--mprs-font-family-body)',
        color: '#1A2332',
        lineHeight: 1.3,
      }}
    >
      Ministério Público do Rio Grande do Sul
    </span>
  </div>
);

const WeightSample: React.FC<{ name: string; weight: number }> = ({ name, weight }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '12px 0',
      borderBottom: '1px solid #F5F5F5',
    }}
  >
    <div style={{ minWidth: 120 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#1A2332' }}>{name}</span>
      <br />
      <span style={{ fontSize: 12, color: '#A3A3A3', fontFamily: 'var(--mprs-font-family-mono)' }}>
        {weight}
      </span>
    </div>
    <span
      style={{
        fontSize: 20,
        fontWeight: weight,
        fontFamily: 'var(--mprs-font-family-body)',
        color: '#1A2332',
      }}
    >
      AaBbCcDdEeFf 0123456789
    </span>
  </div>
);

const TypographyPage: React.FC = () => (
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
      Tipografia
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
      Escala tipográfica e pesos do Design System MPRS. Disponíveis como CSS Variables (
      <code>--mprs-font-*</code>) e tokens TypeScript.
    </p>

    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2332', marginBottom: 16 }}>
      Famílias Tipográficas
    </h2>
    <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {Object.entries(typography.fontFamily).map(([key, val]) => (
        <div
          key={key}
          style={{
            padding: 16,
            borderRadius: 0,
            border: '1px solid #E5E5E5',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#E8891C',
              fontFamily: 'var(--mprs-font-family-mono)',
              minWidth: 80,
              textTransform: 'uppercase',
            }}
          >
            {key}
          </span>
          <span style={{ fontFamily: val, fontSize: 18, color: '#1A2332' }}>
            MPRS — Design System 0123456789
          </span>
        </div>
      ))}
    </div>

    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2332', marginBottom: 16 }}>
      Escala de Tamanho
    </h2>
    <div style={{ marginBottom: 40 }}>
      {Object.entries(typography.fontSize).map(([key, val]) => (
        <TypeSample key={key} name={key} size={val} weight={400} />
      ))}
    </div>

    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2332', marginBottom: 16 }}>Pesos</h2>
    <div style={{ marginBottom: 40 }}>
      {Object.entries(typography.fontWeight).map(([key, val]) => (
        <WeightSample key={key} name={key} weight={val} />
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Fundações/Tipografia',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Escala: Story = {
  render: () => <TypographyPage />,
};
