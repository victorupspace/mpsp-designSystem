# MPRS Design System

> Design System do **Ministério Público do Rio Grande do Sul** — Storybook + React + TypeScript + Vite

---

## 🚀 Quick Start

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o Storybook
npm run storybook

# 3. Acessar no navegador
# → http://localhost:6006
```

---

## 📁 Estrutura do Projeto

```
mprs-design-system/
├── .storybook/
│   ├── main.ts              # Config principal do Storybook
│   ├── manager.ts           # Aplica tema MPRS ao painel do Storybook
│   ├── mprs-theme.ts        # Temas Light + Dark customizados
│   └── preview.ts           # Decorators, CSS globals, theme toggle
│
├── public/
│   └── assets/
│       └── logo-mprs.svg    # ⚠️ Substituir pela logo oficial (ver abaixo)
│
├── src/
│   ├── tokens/
│   │   └── index.ts         # Design Tokens (TS) — cores, tipografia, spacing, etc.
│   │
│   ├── styles/
│   │   └── globals.css      # CSS Variables globais + dark mode
│   │
│   ├── docs/
│   │   ├── Introduction.mdx # Página inicial do Storybook
│   │   ├── Colors.stories.tsx
│   │   ├── Typography.stories.tsx
│   │   └── Spacing.stories.tsx
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/      # Button (.tsx, .css, .stories.tsx)
│   │   │   ├── Badge/       # Badge (.tsx, .css, .stories.tsx)
│   │   │   ├── Card/        # Card (.tsx, .css, .stories.tsx)
│   │   │   ├── Checkbox/    # Checkbox (.tsx, .css, .stories.tsx)
│   │   │   ├── Input/       # Input (.tsx, .css, .stories.tsx)
│   │   │   ├── Select/      # Select (.tsx, .css, .stories.tsx)
│   │   │   ├── Tag/         # Tag (.tsx, .css, .stories.tsx)
│   │   │   └── Textarea/    # Textarea (.tsx, .css, .stories.tsx)
│   │
│   └── index.ts             # Barrel export público
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Como exportar assets do Figma

### Logo SVG

1. Abra o arquivo no Figma: [MPRS Design System](https://www.figma.com/design/TfCxXUl4Aqdt5PxhDdiCxE/MPRS---Design-System)
2. Selecione o componente da **logo** na página principal
3. No painel direito, seção **"Export"**, selecione **SVG**
4. Clique em **"Export Logo"**
5. Renomeie o arquivo para `logo-mprs.svg`
6. Cole em: `public/assets/logo-mprs.svg`

### Ícones

1. Selecione o ícone desejado no Figma
2. Exporte como **SVG** com a opção "Include 'id' attribute" desabilitada
3. Cole em: `src/assets/icons/`

### Tokens / Variáveis

Se o Figma tiver variáveis definidas (Colors, Typography, etc):

1. Instale o plugin **"Design Tokens"** ou **"Tokens Studio"** no Figma
2. Exporte as variáveis como JSON
3. Atualize o arquivo `src/tokens/index.ts` com os valores exportados
4. Atualize o arquivo `src/styles/globals.css` correspondentemente

---

## 🖌️ Customização do Tema do Storybook

O tema do painel do Storybook é definido em `.storybook/mprs-theme.ts`.

Para alterar:

| Propriedade | O que muda |
|---|---|
| `brandImage` | Logo na sidebar |
| `colorPrimary` | Cor de destaque principal |
| `colorSecondary` | Cor de seleção e links ativos |
| `appBg` | Fundo da sidebar |
| `barBg` | Fundo da toolbar |
| `fontBase` | Fonte dos textos |
| `fontCode` | Fonte de código |

---

## 🧩 Como criar um novo componente

```bash
# 1. Criar pasta do componente
mkdir -p src/components/atoms/NomeDoComponente

# 2. Criar arquivos
touch src/components/atoms/NomeDoComponente/NomeDoComponente.tsx
touch src/components/atoms/NomeDoComponente/NomeDoComponente.css
touch src/components/atoms/NomeDoComponente/NomeDoComponente.stories.tsx
touch src/components/atoms/NomeDoComponente/index.ts
```

Padrão CSF3 para stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NomeDoComponente } from './NomeDoComponente';

const meta: Meta<typeof NomeDoComponente> = {
  title: 'Componentes/Atoms/NomeDoComponente',
  component: NomeDoComponente,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NomeDoComponente>;

export const Default: Story = {
  args: { /* props */ },
};
```

Não esqueça de exportar em `src/index.ts`.

---

## 📦 Build

```bash
# Typecheck
npm run typecheck

# Lint
npm run lint

# Build da biblioteca
npm run build

# Build do Storybook estático
npm run build-storybook
```

## Uso em aplicações

```tsx
import { Button } from '@mprs/design-system';
import '@mprs/design-system/styles.css';

export function Example() {
  return <Button>Confirmar</Button>;
}
```

O pacote exporta React e React DOM como `peerDependencies`; a aplicação consumidora deve fornecer essas dependências.

---

## 🔗 Links Úteis

- [Figma — MPRS Design System](https://www.figma.com/design/TfCxXUl4Aqdt5PxhDdiCxE/MPRS---Design-System)
- [Storybook Docs](https://storybook.js.org/docs)
- [Storybook Theming API](https://storybook.js.org/docs/configure/theming)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## 📝 Notas

- **Fontes**: Atualmente usando Bitter para títulos e Montserrat para corpo, com Karla e Syne disponíveis nos tokens.
- **Permissões do Figma**: Para sincronizar tokens automaticamente via MCP, o arquivo precisa estar com permissão "Anyone with the link can view".
- **Dark Mode**: O toggle Light/Dark está disponível na toolbar do Storybook.
