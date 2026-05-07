# Lemon Pie DS — Storybook

Documentação interativa dos tokens do Lemon Pie Design System.

## Setup

```bash
npm install
npm run storybook
```

O Storybook abre em `http://localhost:6006`.

## Estrutura

```
src/
  tokens/          # CSS custom properties e dados de token (auto-gerados)
  stories/         # Stories do Storybook
    CoresPrimitivas    — 8 paletas primitivas (50→900)
    CoresSemanticas    — 135 tokens semânticos (light/dark)
    Spacing            — 12 tokens × 3 densidades
    NumerosEfeitos     — Radius, weight, opacity, elevation
    Tipografia         — 9 text styles × 6 zoom levels × regular/bold
```

## Tokens

Os tokens são exportados do Figma (Lemon Pie DS) e convertidos para CSS custom properties.
Cada collection tem seus modes representados via `data-*` attributes ou media queries.

## Build estático

```bash
npm run build-storybook
```

Gera o build em `storybook-static/` para deploy.
