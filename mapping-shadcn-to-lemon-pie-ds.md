# Mapeamento: shadcn UI Kit → Lemon Pie DS

Spec gerado a partir da análise real do arquivo `Lemon Pie DS` (Co1zD0W0U5teOBaqv1boej) e dos padrões de uso observados nas telas do app Creditas.

---

## 1. Tokens de Referência

### 📏 Spacing (`spacing/N`)

| Token | Valor | Uso típico |
|---|---|---|
| `spacing/0` | 0px | Sem espaço |
| `spacing/1` | 0px | Alias de 0 |
| `spacing/2` | 2px | Micro gaps |
| `spacing/3` | 4px | Gap entre badge/icon |
| `spacing/4` | 8px | Padding interno de chips/badges |
| `spacing/5` | 10px | Padding compacto |
| `spacing/6` | 12px | Padding de botões small |
| `spacing/7` | 16px | Padding padrão de containers |
| `spacing/8` | 20px | Padding de cards |
| `spacing/9` | 24px | Padding de seções |
| `spacing/10` | 32px | Padding de telas |
| `spacing/11` | 40px | Espaço extra-grande |

### 🔢 Border Radius (`border/radius/*`)

| Token | Valor | Uso típico |
|---|---|---|
| `border/radius/none` | 0px | Sem radius (status bar, separators) |
| `border/radius/tiny` | 2px | Tags, badges menores |
| `border/radius/small` | 4px | Inputs, chips |
| `border/radius/mid` | 8px | Cards menores, selects |
| `border/radius/default` | 10px | Radius padrão de cards |
| `border/radius/large` | 16px | Cards principais, modais |
| `border/radius/huge` | 20px | Blocos de destaque |
| `border/radius/super` | 24px | Containers de alto nível |
| `border/radius/full` | 40px | Botões pill, avatares |
| `border/radius/rounded` | 9999px | Círculos perfeitos |

### 🔢 Border Weight (`border/weight/*`)

| Token | Valor | Uso |
|---|---|---|
| `border/weight/none` | 0px | Sem borda |
| `border/weight/default` | 1px | Bordas padrão (inputs, cards) |
| `border/weight/medium` | 1.5px | Bordas de foco/ênfase |
| `border/weight/big` | 2px | Bordas de destaque |

### 🔢 Opacity (`opacity/*`)

| Token | Valor | Uso |
|---|---|---|
| `opacity/off` | 0% | Invisível |
| `opacity/low` | 25% | Overlay muito leve |
| `opacity/disabled` | 40% | Componentes desabilitados |
| `opacity/medium` | 50% | Overlay médio |
| `opacity/semi` | 75% | Semi-transparente |
| `opacity/high` | 100% | Totalmente opaco |

### 🔢 Tipografia Semântica (`semantic:type`)

| Token | Valor px | Uso shadcn equivalente |
|---|---|---|
| `overline/fontSize` | 8px | Overline/label topo |
| `footnote/fontSize` | 8px | Texto de rodapé/disclaimer |
| `caption/fontSize` | 8px | Caption, helper text |
| `callout/fontSize` | 10px | Labels, badges, tooltips |
| `body/fontSize` | 10px | Corpo de texto, parágrafos |
| `headline/fontSize` | 12px | Subtítulos, section headers |
| `title 3/fontSize` | 14px | Títulos de componente |
| `title 2/fontSize` | 16px | Títulos de card/dialog |
| `title 1/fontSize` | 18px | Títulos de tela/hero |

### 🔤 Tipografia Primitiva (`primitive: type`)

| Token | Uso |
|---|---|
| `fontFamily/primary` | Fonte principal (todas as telas) |
| `fontFamily/secondary` | Fonte alternativa (se houver) |
| `fontWeight/regular` | Peso normal |
| `fontWeight/semibold` | Peso semibold |
| `fontWeight/bold` | Peso bold |
| `letterSpacing/tight` | Tracking apertado (títulos grandes) |
| `letterSpacing/normal` | Tracking padrão |
| `letterSpacing/wide` | Tracking aberto (overlines, labels) |

---

## 2. Mapeamento de Cores Semânticas

### 2.1 Fills de Superfície (Fundos de containers/cards)

| Contexto shadcn | Token Lemon Pie DS | Coleção |
|---|---|---|
| Fundo de card padrão | `surface/neutral/default` | 🎨 semantic: colors |
| Fundo de card elevado | `surface/neutral/high` | 🎨 semantic: colors |
| Fundo de card sutil | `surface/neutral/low` | 🎨 semantic: colors |
| Card de sucesso/positivo | `surface/positive/low` | 🎨 semantic: colors |
| Card de erro/destrutivo | `surface/negative/low` | 🎨 semantic: colors |
| Card de aviso/warning | `surface/warning/low` | 🎨 semantic: colors |
| Card de informação | `surface/information/low` | 🎨 semantic: colors |
| Fundo de tela (page bg) | `background/neutral/default` | 🎨 semantic: colors |
| Fundo de tela elevado | `background/neutral/high` | 🎨 semantic: colors |
| Fundo de overlay/modal | `background/modal/default` | 🎨 semantic: colors |
| Fundo branded (header/hero) | `background/branded/default` | 🎨 semantic: colors |

### 2.2 Fills de Ação (Botões e CTAs)

| Estado shadcn | Token Lemon Pie DS |
|---|---|
| Botão primário (default) | `action/branded/default` |
| Botão primário (hover/pressed) | `action/branded/high` |
| Botão primário (subtle/ghost bg) | `action/branded/low` |
| Botão secundário/neutro | `action/neutral/default` |
| Botão neutro (hover) | `action/neutral/high` |
| Botão neutro (ghost/subtle) | `action/neutral/low` |
| Botão neutro (very subtle) | `action/neutral/veryLow` |
| Botão destrutivo | `action/negative/default` |
| Botão destrutivo (hover) | `action/negative/high` |
| Botão destrutivo (subtle) | `action/negative/low` |
| Botão de sucesso | `action/positive/default` |
| Botão de aviso | `action/warning/default` |
| Botão informativo | `action/information/default` |

### 2.3 Cores de Texto

| Contexto shadcn | Token Lemon Pie DS |
|---|---|
| Texto principal (parágrafo) | `text/neutral/default` |
| Texto de alta ênfase (título) | `text/neutral/high` |
| Texto secundário/muted | `text/neutral/low` |
| Placeholder / texto muito suave | `text/neutral/veryLow` |
| Texto sobre fundo colorido | `text/neutral/onColor` |
| Texto de link/brand | `text/branded/default` |
| Texto brand de alta ênfase | `text/branded/high` |
| Texto brand sobre fundo brand | `text/branded/onColor` |
| Texto de erro/destrutivo | `text/negative/default` |
| Texto de erro (forte) | `text/negative/high` |
| Texto de sucesso | `text/positive/default` |
| Texto de aviso | `text/warning/default` |
| Texto desabilitado | `text/neutral/veryLow` + `opacity/disabled` |

### 2.4 Cores de Ícone

| Contexto shadcn | Token Lemon Pie DS |
|---|---|
| Ícone padrão | `icon/neutral/default` |
| Ícone forte | `icon/neutral/high` |
| Ícone suave | `icon/neutral/low` |
| Ícone sobre fundo colorido | `icon/neutral/onColor` |
| Ícone brand | `icon/branded/default` |
| Ícone de erro | `icon/negative/default` |
| Ícone de sucesso | `icon/positive/default` |
| Ícone de aviso | `icon/warning/default` |
| Ícone desabilitado | `icon/neutral/low` + `opacity/disabled` |

---

## 3. Mapeamento por Componente shadcn

### Button

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill (variant primary) | `action/branded/default` |
| Fill (variant secondary) | `action/neutral/low` |
| Fill (variant destructive) | `action/negative/default` |
| Fill (variant ghost) | transparente / sem fill |
| Fill (variant outline) | transparente |
| Stroke (variant outline) | `action/neutral/default` |
| Texto (primary) | `text/neutral/onColor` |
| Texto (secondary) | `text/branded/default` |
| Texto (destructive) | `text/negative/onColor` |
| Ícone leading/trailing | `icon/neutral/onColor` (primary) / `icon/branded/default` (secondary) |
| Corner radius | `border/radius/full` (pill) / `border/radius/default` (rounded) |
| Padding horizontal | `spacing/7` (16px) |
| Padding vertical | `spacing/5` (10px) |
| Gap icon-label | `spacing/4` (8px) |
| Opacity (disabled) | `opacity/disabled` |

### Input / Textarea

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill background | `surface/neutral/default` |
| Stroke default | `action/neutral/default` — weight: `border/weight/default` |
| Stroke focus | `action/branded/default` — weight: `border/weight/medium` |
| Stroke error | `action/negative/default` — weight: `border/weight/default` |
| Texto digitado | `text/neutral/default` |
| Placeholder | `text/neutral/low` |
| Label | `text/neutral/high` |
| Helper text | `text/neutral/low` |
| Mensagem de erro | `text/negative/default` |
| Ícone leading | `icon/neutral/low` |
| Ícone trailing (clear/toggle) | `icon/neutral/default` |
| Corner radius | `border/radius/small` (4px) |
| Padding horizontal | `spacing/7` (16px) |
| Padding vertical | `spacing/5` (10px) |

### Card

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill background | `surface/neutral/default` |
| Sombra (elevation) | variáveis `elevation/default/effect 1..5` |
| Corner radius | `border/radius/large` (16px) |
| Padding interno | `spacing/8` (20px) |
| Título do card | `text/neutral/high` — `title 2/fontSize` |
| Subtítulo/descrição | `text/neutral/low` — `body/fontSize` |
| Stroke (outlined) | `action/neutral/low` — weight: `border/weight/default` |

### Badge / Chip

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill (neutral) | `surface/neutral/low` |
| Fill (success) | `surface/positive/low` |
| Fill (error) | `surface/negative/low` |
| Fill (warning) | `surface/warning/low` |
| Fill (info) | `surface/information/low` |
| Texto (neutral) | `text/neutral/default` |
| Texto (success) | `text/positive/high` |
| Texto (error) | `text/negative/high` |
| Texto (warning) | `text/warning/high` |
| Corner radius | `border/radius/full` (40px) |
| Padding horizontal | `spacing/4` (8px) |
| Padding vertical | `spacing/2` (2px) |
| Font size | `callout/fontSize` |

### Dialog / Modal

| Propriedade / Layer | Token LP DS |
|---|---|
| Overlay fill | `background/modal/default` |
| Fill background do modal | `surface/neutral/default` |
| Corner radius | `border/radius/large` (16px) |
| Título | `text/neutral/high` — `title 1/fontSize` |
| Descrição | `text/neutral/default` — `body/fontSize` |
| Botão primário | → Ver Button (primary) |
| Botão cancel | → Ver Button (secondary/ghost) |
| Padding | `spacing/9` (24px) |

### Alert / Toast (Sonner)

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill (default/info) | `surface/information/low` |
| Fill (success) | `surface/positive/low` |
| Fill (error) | `surface/negative/low` |
| Fill (warning) | `surface/warning/low` |
| Stroke esquerdo (info) | `action/information/default` |
| Stroke esquerdo (success) | `action/positive/default` |
| Stroke esquerdo (error) | `action/negative/default` |
| Stroke esquerdo (warning) | `action/warning/default` |
| Texto título | `text/neutral/high` |
| Texto corpo | `text/neutral/default` |
| Ícone (info) | `icon/information/default` (se existir) / `icon/branded/default` |
| Ícone (success) | `icon/positive/default` |
| Ícone (error) | `icon/negative/default` |
| Ícone (warning) | `icon/warning/default` |
| Corner radius | `border/radius/default` (10px) |
| Padding | `spacing/7` (16px) |

### Select / Dropdown / Combobox

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill trigger | `surface/neutral/default` |
| Stroke trigger | `action/neutral/default` |
| Fill dropdown | `surface/neutral/high` |
| Texto selecionado | `text/neutral/default` |
| Placeholder | `text/neutral/low` |
| Item hover | `surface/neutral/low` |
| Item selecionado (check) | `action/branded/default` |
| Corner radius trigger | `border/radius/small` |
| Corner radius dropdown | `border/radius/mid` |
| Padding item | `spacing/5` (10px) horizontal, `spacing/4` (8px) vertical |

### Checkbox / Radio / Switch

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill unchecked | `surface/neutral/default` |
| Stroke unchecked | `action/neutral/default` |
| Fill checked | `action/branded/default` |
| Ícone check | `icon/neutral/onColor` |
| Fill disabled | `surface/neutral/low` |
| Stroke disabled | `action/neutral/low` |
| Switch track (on) | `action/branded/default` |
| Switch track (off) | `action/neutral/low` |
| Switch thumb | `icon/neutral/onColor` |
| Corner radius checkbox | `border/radius/tiny` (2px) |
| Corner radius radio | `border/radius/rounded` (9999px) |

### Tabs

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill aba ativa | `action/branded/default` |
| Indicador linha ativa | `action/branded/default` — weight: `border/weight/big` |
| Texto aba ativa | `text/branded/default` / `text/neutral/onColor` |
| Texto aba inativa | `text/neutral/low` |
| Fill aba hover | `surface/neutral/low` |
| Separador | `action/neutral/low` — weight: `border/weight/default` |
| Padding aba | `spacing/6` (12px) horizontal |

### Navigation / Sidebar

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill fundo nav | `background/neutral/default` |
| Fill item ativo | `surface/branded/low` → `action/branded/low` |
| Texto item ativo | `text/branded/default` |
| Ícone item ativo | `icon/branded/default` |
| Texto item inativo | `text/neutral/default` |
| Ícone item inativo | `icon/neutral/default` |
| Separador | `action/neutral/low` |
| Padding item | `spacing/7` (16px) horizontal, `spacing/5` (10px) vertical |

### Table

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill header | `surface/neutral/low` |
| Texto header | `text/neutral/high` — `headline/fontSize` |
| Fill row par | transparente |
| Fill row ímpar | `surface/neutral/low` |
| Fill row hover | `surface/neutral/default` |
| Texto cell | `text/neutral/default` — `body/fontSize` |
| Stroke border | `action/neutral/low` — weight: `border/weight/default` |
| Padding cell | `spacing/7` (16px) horizontal, `spacing/5` (10px) vertical |

### Avatar

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill fundo (sem imagem) | `decorative/avatar/default` |
| Texto iniciais | `decorative/avatar/onColor` |
| Fill borda | `surface/neutral/default` |
| Corner radius | `border/radius/rounded` (9999px) |

### Skeleton

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill base | `surface/neutral/low` |
| Animação shimmer | `surface/neutral/default` |
| Corner radius | match do componente correspondente |

### Progress / Slider

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill track (fundo) | `surface/neutral/low` |
| Fill valor preenchido | `action/branded/default` |
| Fill thumb | `action/branded/default` |
| Stroke thumb | `surface/neutral/default` |
| Corner radius track | `border/radius/rounded` |

### Tooltip

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill background | `surface/neutral/high` |
| Texto | `text/neutral/onColor` |
| Corner radius | `border/radius/small` (4px) |
| Padding | `spacing/4` (8px) horizontal, `spacing/3` (4px) vertical |

### Separator

| Propriedade / Layer | Token LP DS |
|---|---|
| Fill / stroke | `action/neutral/low` |
| Espessura | `border/weight/default` (1px) |

---

## 4. Padrões de Binding por Propriedade

### Frames/Containers (paddingLeft/Right/Top/Bottom, itemSpacing)
Usar variáveis da coleção `📏 spacing`. Exemplos reais observados no Lemon Pie DS:
- Container geral: `spacing/7` (16px) em todos os paddings
- Header/section: `spacing/9` (24px)
- Gap entre ícones: `spacing/3` (4px) ou `spacing/4` (8px)

### Corner Radius (topLeftRadius, topRightRadius, etc.)
Todas as 4 propriedades de radius devem apontar para o **mesmo** token `border/radius/*`. Nos componentes do Lemon Pie DS, isso é aplicado uniformemente.

### Texto (fontSize, fontFamily, fontStyle)
Observado nos screens Creditas:
- `fontFamily` → sempre `fontFamily/primary`
- `fontWeight` → `fontWeight/regular` ou `fontWeight/bold`
- `fontSize` → tokens semânticos (`title 2/fontSize`, `body/fontSize`, etc.)

### Fills com variável de cor
O binding vai na propriedade `fills` do paint object, não no nó diretamente. Cada paint pode ter seu próprio `boundVariables.color`.

---

## 5. Variáveis NÃO mapeáveis automaticamente

As seguintes coleções do Lemon Pie DS têm uso muito específico de contexto e **não devem ser aplicadas automaticamente** aos componentes shadcn:

- `🌍 language` — conteúdo de string específico do app Creditas (títulos de tela, labels de menu)
- `📐 breakpoints` — breakpoints responsivos (xs/sm/md/lg/xl), usados em lógica de layout
- `🎨 primitive: colors` — paleta bruta; preferir sempre os tokens semânticos equivalentes

---

## 6. Ordem de Prioridade para Reconexão Manual

Ao reconectar os componentes shadcn no Figma, seguir esta ordem:

1. **Spacing** (paddingLeft/Right/Top/Bottom, itemSpacing) → coleção `📏 spacing`
2. **Corner radius** → coleção `🔢 semantic: numbers`
3. **Fills de superfície/fundo** → `surface/*` e `background/*` da `🎨 semantic: colors`
4. **Fills de ação** (botões, CTAs) → `action/*` da `🎨 semantic: colors`
5. **Texto fills** → `text/*` da `🎨 semantic: colors`
6. **Ícone fills/strokes** → `icon/*` da `🎨 semantic: colors`
7. **Tipografia** (fontSize, fontFamily, fontWeight) → `🔢 semantic:type` + `🔤 primitive: type`
8. **Bordas e opacidade** → `border/weight/*` e `opacity/*` da `🔢 semantic: numbers`
9. **Elevation** (effect styles) → `elevation/default/effect *` da `🔢 semantic: numbers`
