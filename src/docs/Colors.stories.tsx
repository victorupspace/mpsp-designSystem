import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../tokens';

const ColorSwatch: React.FC<{ name: string; value: string; dark?: boolean }> = ({
  name,
  value,
  dark,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: 140 }}>
    <div
      style={{
        width: '100%',
        height: 72,
        borderRadius: 0,
        backgroundColor: value,
        border: '1px solid rgba(0,0,0,0.08)',
        marginBottom: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    />
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#1A2332',
        fontFamily: 'var(--mprs-font-family-body)',
        lineHeight: 1.3,
        wordBreak: 'break-all',
      }}
    >
      {name}
    </span>
    <span
      style={{
        fontSize: 12,
        color: '#737373',
        fontFamily: 'var(--mprs-font-family-mono)',
        marginTop: 2,
      }}
    >
      {value}
    </span>
  </div>
);

const ColorGroup: React.FC<{ title: string; colors: Record<string, string> }> = ({
  title,
  colors: colorMap,
}) => (
  <div style={{ marginBottom: 40 }}>
    <h3
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#1A2332',
        marginBottom: 16,
        paddingBottom: 8,
        borderBottom: '2px solid #E8891C',
        display: 'inline-block',
        fontFamily: 'var(--mprs-font-family-body)',
      }}
    >
      {title}
    </h3>
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {Object.entries(colorMap).map(([key, val]) =>
        typeof val === 'string' && !val.startsWith('linear') ? (
          <ColorSwatch key={key} name={key} value={val} />
        ) : null,
      )}
    </div>
  </div>
);

const ColorsPage: React.FC = () => (
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
      Cores
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
      Paleta de cores do Design System MPRS. Todos os valores estão disponíveis como
      CSS Variables (<code>--mprs-color-*</code>) e TypeScript tokens.
    </p>

    <ColorGroup title="Brand" colors={colors.brand as unknown as Record<string, string>} />
    <ColorGroup title="Neutras" colors={colors.neutral} />
    <ColorGroup title="Texto" colors={colors.text} />
    <ColorGroup title="Superfícies" colors={colors.surface as unknown as Record<string, string>} />
    <ColorGroup title="Bordas" colors={colors.border} />
    <ColorGroup title="Feedback" colors={colors.feedback} />
  </div>
);

const meta: Meta = {
  title: 'Fundações/Cores',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

type Story = StoryObj;

export const Paleta: Story = {
  render: () => <ColorsPage />,
};
