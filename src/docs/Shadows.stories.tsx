import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { shadows } from '../tokens';

const ShadowSample: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div
      style={{
        width: 120,
        height: 80,
        borderRadius: 8,
        backgroundColor: 'var(--mprs-color-surface-primary, #FFFFFF)',
        boxShadow: value,
        border: value === 'none' ? '1px dashed #D4D4D4' : 'none',
      }}
    />
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#1A2332',
        fontFamily: 'var(--mprs-font-family-body)',
      }}
    >
      {name}
    </span>
    <span
      style={{
        fontSize: 10,
        color: '#A3A3A3',
        fontFamily: 'var(--mprs-font-family-mono)',
        maxWidth: 160,
        textAlign: 'center',
        lineHeight: 1.4,
        wordBreak: 'break-all',
      }}
    >
      --mprs-shadow-{name}
    </span>
  </div>
);

const ShadowsPage: React.FC = () => (
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
      Sombras
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
      Escala de sombras do Design System MPRS para elevação e hierarquia visual.
      Use <code>--mprs-shadow-*</code> em CSS.
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 32,
        padding: '24px 0',
      }}
    >
      {Object.entries(shadows).map(([key, val]) => (
        <ShadowSample key={key} name={key} value={val} />
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Fundações/Sombras',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Escala: Story = {
  render: () => <ShadowsPage />,
};
