# Auditoria Lemon Pie DS — Variáveis & Estilos
**Data:** 08/04/2026 | **Arquivo:** [Lemon-Pie-DS](https://www.figma.com/design/Co1zD0W0U5teOBaqv1boej/Lemon-Pie-DS?node-id=2028-9925) | **Total de variáveis:** 324

---

## 📋 Sumário

- [Pilar 1 — Auditoria de Bugs e Inconsistências](#pilar-1--auditoria-de-bugs-e-inconsistências)
- [Pilar 2 — Tabela de Auditoria Completa](#pilar-2--tabela-de-auditoria-completa)
- [Pilar 3 — Relatório de Popularidade](#pilar-3--relatório-de-popularidade)

---

## Pilar 1 — Auditoria de Bugs e Inconsistências

### 🔴 Bugs Críticos

#### B1 · `spacing/1` tem valor 0 — duplicata de `spacing/0`

`spacing/0 = 0px` e `spacing/1 = 0px` são idênticos. Se `spacing/1` deveria representar `1px`, o valor está errado. Se é intencional, o token é redundante e deve ser removido.

**Ação:** Corrigir o valor para `1px` ou deletar `spacing/1`.

---

#### B2 · Valores duplicados nos tokens semânticos de fonte (`🔢 semantic: font size`)

| Token | Valor | Duplica |
|-------|-------|---------|
| `body` | 10px | `caption` |
| `caption` | 10px | `body` |
| `mini` | 8px | `micro` e `overline` |
| `micro` | 8px | `mini` e `overline` |
| `overline` | 8px | `mini` e `micro` |

Cinco dos nove tokens semânticos de fonte compartilham apenas dois valores distintos. Isso gera ambiguidade sobre qual usar e infla a coleção desnecessariamente. Faz sentido para o `overline` ter 8px se seu destaque vem do `letterSpacing/wide` aplicado no Text Style, não do tamanho. Já `mini`, `micro` e `body`/`caption` precisam de revisão.

**Ação:** Diferenciar os valores ou consolidar tokens redundantes. Avaliar se `micro` deve ser deletado (0 usos).

---

#### B3 · Tokens semânticos redundantes — mesmo valor primitivo em light mode

| Tokens com valor idêntico | Primitiva apontada |
|---|---|
| `text/neutral/veryHigh`, `text/neutral/high`, `text/neutral/default`, `text/neutral/onColor` | `grayscale/900` |
| `icon/neutral/veryHigh`, `icon/neutral/high`, `icon/neutral/onColor` | `grayscale/900` |
| `background/default/high`, `background/default/default`, `surface/default/onColor` | `grayscale/50` |

Em light mode, esses tokens são indistinguíveis. Isso é aceitável se os modos dark e dark-dim os divergem — mas se a lógica dark não diferencia `veryHigh` de `high`, os tokens extras são bloat. `text/neutral/veryHigh` tem **0 usos**.

**Ação:** Verificar valores nos modos dark/dark-dim. Se não há diferença, consolidar ou documentar explicitamente a intenção futura.

---

#### B4 · `grayscale/Modal` — nome fora da convenção da escala de cinzas

Todos os outros primitivos de cinza usam a escala numérica (`grayscale/50` a `grayscale/900`). O token `grayscale/Modal` quebra o padrão e deveria ser um token semântico, não um primitivo.

**Ação:** Mover para a coleção semântica como `background/modal/overlay` (o token semântico `background/modal/default` já aponta para ele — confirmar se faz sentido consolidar). Remover da coleção primitiva.

---

#### B5 · Floating point em `letterSpacing/tight`

O valor armazenado é `0.30000001192092896` em vez de `0.3`. Isso ocorre por imprecisão de ponto flutuante e pode gerar inconsistências ao exportar tokens para código.

**Ação:** Recriar a variável com o valor exato `0.3`.

---

### 🟠 Descrições Incorretas (Copy-Paste Errors)

#### D1 · `icon/information/*` — descriptions copiadas de `surface/information/*`

As quatro variáveis abaixo têm descrições que falam em "superfície" e "fundo", sendo que são tokens de **ícone**:

| Token | Descrição atual (errada) |
|-------|--------------------------|
| `icon/information/high` | "Superfície informativa em alta intensidade. Use em banners informativos…" |
| `icon/information/default` | "Superfície informativa padrão. Fundo de tooltips…" |
| `icon/information/low` | "Superfície informativa sutil. Use em backgrounds de seções…" |
| `icon/information/onColor` | "Superfície sobre fundos informativos. Cor de fundo para elementos sobrepostos…" |

**Ação:** Reescrever com contexto de ícone (ver sugestões na Tabela de Auditoria).

---

#### D2 · `text/information/*` — descriptions copiadas de `surface/information/*`

Mesmo problema. Os quatro tokens `text/information/high/default/low/onColor` têm descrições que mencionam "superfície", "fundo" e "backgrounds" — contexto de surface, não de texto.

**Ação:** Reescrever com contexto de texto (ver sugestões na Tabela de Auditoria).

---

#### D3 · `icon/positive/high` e `icon/positive/default` — descriptions trocadas entre si

| Token | Descrição atual | O que deveria ser |
|-------|-----------------|-------------------|
| `icon/positive/high` | "Ícone em estado desabilitado…" | Descrição de ícone positivo de alta intensidade |
| `icon/positive/default` | "Ícone de feedback positivo em alta intensidade…" | Descrição de ícone positivo padrão |

Parece que houve um shift nas descrições ao criar a série. A descrição do `icon/positive/high` é na verdade a do `icon/disabled`.

**Ação:** Corrigir as descrições (ver sugestões na Tabela).

---

#### D4 · `decorative/graphs/graph 2 - low` — descrição de "default"

A variável `graph 2 - low` tem a descrição: *"Cor padrão da série 2 de gráficos (laranja)"* — que é a descrição do token `graph 2 - default`.

**Ação:** Corrigir para: *"Cor sutil da série 2 de gráficos. Use na variação clara do laranja para legendas e áreas de fundo."*

---

#### D5 · `icon/branded/onColor` — description com tab (`\t`) no início

O texto começa com um caractere tab invisível: `"\tÍcone da marca sobre fundos limeGreen…"`. Isso não impacta a interface, mas é uma inconsistência no dado.

**Ação:** Remover o caractere inicial.

---

### 🟡 Problemas de Acessibilidade (WCAG)

> **Contexto:** Os pares abaixo assumem uso sobre `background/default/default` (grayscale/50 = `#ffffff`). Todos os tokens marcados com ❌ falham WCAG AA (4.5:1 para texto normal, 3:1 para texto grande).

| Token de Texto | Primitiva → Hex | Contraste estimado | WCAG AA | Observação |
|----------------|-----------------|-------------------|---------|------------|
| `text/neutral/veryLow` | grayscale/400 `#a8b2af` | ~2.3:1 | ❌ FALHA | Placeholder — isento? Verificar uso |
| `text/branded/low` | limeGreen/200 `#cbee8a` | ~1.4:1 | ❌ FALHA | Verde claro em branco |
| `text/positive/low` | green/200 `#aed28a` | ~2.5:1 | ❌ FALHA | Verde claro em branco |
| `text/negative/low` | red/200 `#f0a2a9` | ~2.1:1 | ❌ FALHA | Rosa claro em branco |
| `text/warning/default` | yellow/600 `#e8bf2a` | ~2.7:1 | ❌ FALHA | Amarelo em branco |
| `text/warning/low` | yellow/200 `#ffea9f` | ~1.2:1 | ❌ FALHA | Extremamente baixo |
| `text/information/low` | teal/200 `#9dc5d0` | ~2.1:1 | ❌ FALHA | Teal claro em branco |

**Recomendação:** Tokens `*/low` de texto não devem ser aplicados em texto legível sobre fundo branco. Documentar explicitamente que são **exclusivos para uso sobre fundos coloridos** (ex: dentro de `surface/*/low`). Considerar adicionar uma restrição de escopo ou aviso na descrição.

---

### 🔵 Problemas de Escopo (Scopes)

#### E1 · `spacing/*` restrito apenas a `GAP`

Os 12 tokens de espaçamento têm escopo exclusivo de `GAP` (espaço entre filhos em auto-layout). Isso impede seu uso em **padding** horizontal e vertical — um dos usos mais comuns de spacing tokens. Designers precisarão usar valores hardcoded para padding.

**Ação:** Adicionar `HORIZONTAL_PADDING` e `VERTICAL_PADDING` aos scopes da coleção de spacing.

---

#### E2 · `grayscale/Modal` tem scopes explícitos, diferente de todos os outros primitivos

Todos os outros 80 primitivos de cor têm `scopes: []` (vazio), delegando a decisão de uso para o token semântico. `grayscale/Modal` é o único com scopes preenchidos (`FRAME_FILL`, `SHAPE_FILL`), criando uma inconsistência na camada primitiva.

**Ação:** Mover `grayscale/Modal` para a coleção semântica (ver B4) e manter o primitivo sem scopes, ou documentar claramente por que é exceção.

---

#### E3 · `border/radius/*` — sem scopes definidos no contexto de `language`

Os tokens da coleção `ℹ️ language` têm escopo `TEXT_CONTENT`, correto. Porém, os nomes como `app/tabs/inicio/inicio` (com segmento duplicado) e valores como "pt" (apenas o idioma, sem o texto real) sugerem uma coleção incompleta ou em desenvolvimento.

**Ação:** Completar os valores dos tokens de language ou remover os incompletos até que estejam prontos.

---

## Pilar 2 — Tabela de Auditoria Completa

> Legenda: ✅ OK | ⚠️ Atenção | 🐛 Bug | 📝 Sem descrição

### Coleção: 🎨 Primitive Colors (81 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `limeGreen/50–900` (10 tokens) | COLOR | ✅ Scopes corretos (`[]`). Nomenclatura consistente. | "Primitive limeGreen [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `green/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive green [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `orange/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive orange [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `pink/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive pink [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `teal/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive teal [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `yellow/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive yellow [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `red/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive red [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `grayscale/50–900` (10 tokens) | COLOR | ✅ OK | "Primitive grayscale [N] — `#hex`. Reservado para uso exclusivo de tokens semânticos." |
| `grayscale/Modal` | COLOR | 🐛 **B4** Nome fora da convenção numérica. Scopes preenchidos (**E2**). | "Overlay semitransparente de modal — `#000000a6` (66% opacidade). Exclusivo para `background/modal/default`." |

---

### Coleção: 🎨 Semantic Colors (131 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `action/neutral/veryHigh` | COLOR | ✅ Descrição OK | — |
| `action/neutral/high` | COLOR | ✅ Descrição OK | — |
| `action/neutral/default` | COLOR | ✅ Descrição OK | — |
| `action/neutral/low` | COLOR | ✅ Descrição OK | — |
| `action/neutral/veryLow` | COLOR | ✅ Descrição OK | — |
| `action/neutral/onColor` | COLOR | ✅ Descrição OK | — |
| `action/branded/high` | COLOR | ✅ Descrição OK | — |
| `action/branded/default` | COLOR | ✅ Descrição OK | — |
| `action/branded/low` | COLOR | ✅ Descrição OK | — |
| `action/branded/onColor` | COLOR | ✅ Descrição OK | — |
| `action/positive/high` | COLOR | ✅ OK | — |
| `action/positive/default` | COLOR | ✅ OK | — |
| `action/positive/low` | COLOR | ✅ OK | — |
| `action/positive/onColor` | COLOR | ✅ OK | — |
| `action/negative/high` | COLOR | ✅ OK | — |
| `action/negative/default` | COLOR | ✅ OK | — |
| `action/negative/low` | COLOR | ✅ OK | — |
| `action/negative/onColor` | COLOR | ✅ OK | — |
| `action/warning/high` | COLOR | ✅ OK | — |
| `action/warning/default` | COLOR | ✅ OK | — |
| `action/warning/low` | COLOR | ✅ OK | — |
| `action/warning/onColor` | COLOR | ✅ OK | — |
| `action/information/high` | COLOR | ✅ OK | — |
| `action/information/default` | COLOR | ✅ OK | — |
| `action/information/low` | COLOR | ✅ OK | — |
| `action/information/onColor` | COLOR | ✅ OK | — |
| `action/disabled` | COLOR | ⚠️ 0 usos. Descrição OK. | — |
| `background/default/high` | COLOR | 🐛 **B3** Mesmo valor de `background/default/default` em light (`grayscale/50`). | — |
| `background/default/default` | COLOR | ✅ OK | — |
| `background/default/low` | COLOR | ✅ OK | — |
| `background/secondary/high` | COLOR | ✅ OK | — |
| `background/secondary/default` | COLOR | ✅ OK | — |
| `background/secondary/low` | COLOR | ✅ OK | — |
| `background/modal/default` | COLOR | ✅ OK | — |
| `surface/default/high` | COLOR | ✅ OK | — |
| `surface/default/default` | COLOR | ✅ OK | — |
| `surface/default/low` | COLOR | ✅ OK | — |
| `surface/default/onColor` | COLOR | 🐛 **B3** Mesmo valor de `background/default/default` em light. | — |
| `surface/positive/high` | COLOR | ✅ OK | — |
| `surface/positive/default` | COLOR | ✅ OK | — |
| `surface/positive/low` | COLOR | ✅ OK | — |
| `surface/positive/onColor` | COLOR | ✅ OK | — |
| `surface/negative/high` | COLOR | ✅ OK | — |
| `surface/negative/default` | COLOR | ✅ OK | — |
| `surface/negative/low` | COLOR | ✅ OK | — |
| `surface/negative/onColor` | COLOR | ✅ OK | — |
| `surface/warning/high` | COLOR | ✅ OK | — |
| `surface/warning/default` | COLOR | ✅ OK | — |
| `surface/warning/low` | COLOR | ✅ OK | — |
| `surface/warning/onColor` | COLOR | ✅ OK | — |
| `surface/information/high` | COLOR | ✅ OK | — |
| `surface/information/default` | COLOR | ✅ OK | — |
| `surface/information/low` | COLOR | ✅ OK | — |
| `surface/information/onColor` | COLOR | ✅ OK | — |
| `text/neutral/veryHigh` | COLOR | 🐛 **B3** Mesmo valor de `text/neutral/high` em light. 0 usos. | — |
| `text/neutral/high` | COLOR | ✅ OK | — |
| `text/neutral/default` | COLOR | ✅ OK | — |
| `text/neutral/low` | COLOR | ✅ OK | — |
| `text/neutral/veryLow` | COLOR | ⚠️ **WCAG** Contraste ~2.3:1 em branco. Uso restrito a placeholders. | — |
| `text/neutral/onColor` | COLOR | 🐛 **B3** Mesmo valor de `text/neutral/high` e `text/neutral/default` em light. | — |
| `text/branded/high` | COLOR | ✅ OK | — |
| `text/branded/default` | COLOR | ✅ OK | — |
| `text/branded/low` | COLOR | ⚠️ **WCAG** Contraste ~1.4:1. Não usar em texto legível sobre fundo branco. | — |
| `text/branded/onColor` | COLOR | ✅ OK | — |
| `text/disabled` | COLOR | ✅ OK (estados desabilitados são isentos WCAG) | — |
| `text/positive/high` | COLOR | ✅ OK | — |
| `text/positive/default` | COLOR | ✅ OK | — |
| `text/positive/low` | COLOR | ⚠️ **WCAG** Contraste ~2.5:1 em branco. Usar apenas sobre `surface/positive/low`. | — |
| `text/positive/onColor` | COLOR | ✅ OK | — |
| `text/negative/high` | COLOR | ✅ OK | — |
| `text/negative/default` | COLOR | ✅ OK | — |
| `text/negative/low` | COLOR | ⚠️ **WCAG** Contraste ~2.1:1 em branco. Usar apenas sobre `surface/negative/low`. | — |
| `text/negative/onColor` | COLOR | ✅ OK | — |
| `text/warning/high` | COLOR | ✅ OK | — |
| `text/warning/default` | COLOR | ⚠️ **WCAG** yellow/600 `#e8bf2a` em branco: ~2.7:1. Não usar em texto legível sobre fundo branco. | — |
| `text/warning/low` | COLOR | ⚠️ **WCAG** Contraste ~1.2:1. Nunca usar como texto legível. | — |
| `text/warning/onColor` | COLOR | ✅ OK | — |
| `text/information/high` | COLOR | 🐛 **D2** Descrição menciona "Superfície informativa" — contexto errado para token de texto. | "Texto informativo de alta intensidade. Use em títulos e labels de seções com conteúdo de apoio ou dicas." |
| `text/information/default` | COLOR | 🐛 **D2** Descrição menciona "Fundo de tooltips" — contexto de surface. | "Texto informativo padrão. Use em mensagens de dica, notas contextuais e conteúdo de apoio." |
| `text/information/low` | COLOR | 🐛 **D2** + ⚠️ **WCAG** (~2.1:1 em branco) + 0 usos. Descrição de surface. | "Texto informativo sutil. Usar apenas sobre `surface/information/low` — não aplicar em fundo branco." |
| `text/information/onColor` | COLOR | 🐛 **D2** 0 usos. Descrição de surface. | "Texto informativo sobre fundos teal. Garante contraste em textos sobrepostos a superfícies informativas." |
| `icon/neutral/veryHigh` | COLOR | 🐛 **B3** Mesmo valor de `icon/neutral/high`. 0 usos. | — |
| `icon/neutral/high` | COLOR | ✅ OK | — |
| `icon/neutral/default` | COLOR | ✅ OK | — |
| `icon/neutral/low` | COLOR | ✅ OK | — |
| `icon/neutral/veryLow` | COLOR | ✅ OK | — |
| `icon/neutral/onColor` | COLOR | 🐛 **B3** Mesmo valor de `icon/neutral/high` em light. | — |
| `icon/branded/high` | COLOR | ✅ OK | — |
| `icon/branded/default` | COLOR | ✅ OK | — |
| `icon/branded/low` | COLOR | ✅ OK | — |
| `icon/branded/onColor` | COLOR | 🐛 **D5** Tab no início da descrição. | Remover `\t` inicial |
| `icon/disabled` | COLOR | ✅ OK | — |
| `icon/positive/high` | COLOR | 🐛 **D3** Descrição é na verdade a do `icon/disabled`. | "Ícone de feedback positivo em alta intensidade. Use em ícones de sucesso críticos como checkmarks de conclusão e aprovação." |
| `icon/positive/default` | COLOR | 🐛 **D3** Descrição é a do `icon/positive/high`. | "Ícone de feedback positivo padrão. Use em ícones de status de sucesso, confirmação e aprovação." |
| `icon/positive/low` | COLOR | 🐛 **D3** Descrição é a do `icon/positive/default`. | "Ícone de feedback positivo sutil. Use em ícones de apoio em contextos de sucesso de menor destaque." |
| `icon/positive/onColor` | COLOR | ✅ OK | — |
| `icon/negative/high` | COLOR | ✅ OK | — |
| `icon/negative/default` | COLOR | ✅ OK | — |
| `icon/negative/low` | COLOR | ✅ OK | — |
| `icon/negative/onColor` | COLOR | ✅ OK | — |
| `icon/warning/high` | COLOR | ✅ OK | — |
| `icon/warning/default` | COLOR | ✅ OK | — |
| `icon/warning/low` | COLOR | ✅ OK | — |
| `icon/warning/onColor` | COLOR | ✅ OK | — |
| `icon/information/high` | COLOR | 🐛 **D1** 0 usos. Descrição de surface. | "Ícone informativo de alta intensidade. Use em ícones de dica crítica e elementos de apoio de alto destaque." |
| `icon/information/default` | COLOR | 🐛 **D1** 0 usos. Descrição de surface. | "Ícone informativo padrão. Use em ícones de tooltip, ajuda contextual e indicadores de informação." |
| `icon/information/low` | COLOR | 🐛 **D1** 0 usos. Descrição de surface. | "Ícone informativo sutil. Use em ícones de apoio em contextos informativos de menor ênfase." |
| `icon/information/onColor` | COLOR | 🐛 **D1** 0 usos. Descrição de surface. | "Ícone informativo sobre fundos teal. Garante contraste de ícones sobrepostos a superfícies informativas." |
| `decorative/avatar/high` | COLOR | ✅ OK | — |
| `decorative/avatar/default` | COLOR | ✅ OK | — |
| `decorative/avatar/low` | COLOR | ✅ OK | — |
| `decorative/avatar/onColor` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 1 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 1 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 1 - low` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 2 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 2 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 2 - low` | COLOR | 🐛 **D4** Descrição do default copiada para o low. | "Cor sutil da série 2 de gráficos. Use na variação clara do laranja para legendas e áreas de fundo." |
| `decorative/graphs/graph 3 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 3 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 3 - low` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 4 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 4 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 4 - low` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 5 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 5 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 5 - low` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 6 - default` | COLOR | ✅ OK | — |
| `decorative/graphs/graph 6 - high` | COLOR | ⚠️ 0 usos | — |
| `decorative/graphs/graph 6 - low` | COLOR | ✅ OK | — |

---

### Coleção: 🔤 Primitive Type (41 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `fontFamily/primary` | STRING | 📝 Sem descrição | "Família tipográfica primária do sistema. Helvetica Now Display — uso em todos os textos de interface." |
| `fontFamily/secondary` | STRING | 📝 Sem descrição | "Família tipográfica secundária. Maison Neue Extended — reservada para títulos de marketing e peças editoriais." |
| `fontWeight/regular` | STRING | 📝 Sem descrição | "Peso de fonte regular. Use em corpo de texto, parágrafos e conteúdo de leitura." |
| `fontWeight/semibold` | STRING | 📝 0 usos + sem descrição | "Peso de fonte semibold. Use em labels de formulário e textos de ênfase moderada." |
| `fontWeight/bold` | STRING | 📝 Sem descrição | "Peso de fonte bold. Use em títulos, headings e textos de alta ênfase." |
| `fontSize/8–80` (12 tokens) | FLOAT | 📝 Sem descrição | "Tamanho de fonte primitivo — [N]px. Alias exclusivo de Text Styles e tokens semânticos." |
| `lineHeight/8–72` (18 tokens) | FLOAT | 📝 Sem descrição | "Altura de linha primitiva — [N]px. Alias exclusivo de Text Styles." |
| `letterSpacing/wide` | FLOAT | 📝 Sem descrição | "Espaçamento entre letras amplo — 1.5px. Use em overlines, eyebrows e textos em caixa alta." |
| `letterSpacing/normal` | FLOAT | 📝 Sem descrição | "Espaçamento entre letras normal — 0.5px. Use em títulos de maior destaque." |
| `letterSpacing/tight` | FLOAT | 🐛 **B5** Valor com imprecisão float: `0.30000001192092896`. | "Espaçamento entre letras padrão — 0.3px. Use em corpo de texto e a maioria dos componentes." |

---

### Coleção: 📐 Breakpoints (5 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `xl` | FLOAT | 📝 0 usos + sem descrição | "Breakpoint extra-large — 440px. Largura máxima de tela mobile suportada." |
| `lg` | FLOAT | 📝 0 usos + sem descrição | "Breakpoint large — 412px. Referência para dispositivos Android de tela grande (ex: Pixel 6)." |
| `md` | FLOAT | 📝 Sem descrição | "Breakpoint médio — 375px. Referência padrão iPhone (iPhone SE/12/13 mini)." |
| `sm` | FLOAT | 📝 Sem descrição | "Breakpoint pequeno — 360px. Referência para dispositivos Android compactos." |
| `xs` | FLOAT | 📝 0 usos + sem descrição | "Breakpoint extra-small — 320px. Largura mínima suportada (iPhone SE 1ª geração)." |

---

### Coleção: ℹ️ Language (10 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `app/tabs/menu inferior/Início` | STRING | ✅ OK (valor: "Início") | "Label da aba Início no menu inferior do app." |
| `app/tabs/menu inferior/Carros` | STRING | ✅ OK | "Label da aba Carros no menu inferior do app." |
| `app/tabs/menu inferior/Casas` | STRING | ✅ OK | "Label da aba Casas no menu inferior do app." |
| `app/tabs/menu inferior/Salário` | STRING | ✅ OK | "Label da aba Salário no menu inferior do app." |
| `app/tabs/menu inferior/Cartão` | STRING | ✅ OK | "Label da aba Cartão no menu inferior do app." |
| `app/tabs/inicio/inicio` | STRING | 🐛 Segmento duplicado no path (`/inicio/inicio`). Valor "pt" em vez do texto real. Coleção incompleta. | "Identificador de locale da aba Início. Renomear para `app/tabs/inicio/locale`." |
| `app/tabs/auto/auto` | STRING | 🐛 Segmento duplicado. Valor "pt" — incompleto. | "Identificador de locale da aba Carros/Auto. Renomear para `app/tabs/auto/locale`." |
| `app/tabs/casas/casas` | STRING | 🐛 Segmento duplicado. Valor "pt" — incompleto. | "Identificador de locale da aba Casas. Renomear para `app/tabs/casas/locale`." |
| `app/tabs/salario/salario` | STRING | 🐛 Segmento duplicado. Valor "pt" — incompleto. | "Identificador de locale da aba Salário. Renomear para `app/tabs/salario/locale`." |
| `app/tabs/perfil/perfil` | STRING | 🐛 Segmento duplicado. Valor "pt" — incompleto. | "Identificador de locale da aba Perfil. Renomear para `app/tabs/perfil/locale`." |

---

### Coleção: 🔢 Semantic Numbers (35 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `border/radius/none` | FLOAT (0) | 📝 Sem descrição. **#1 mais usado (36.245 usos)** | "Border radius nulo — 0px. Use em elementos sem arredondamento: tabelas, dividers e barras." |
| `border/radius/tiny` | FLOAT (2) | 📝 Sem descrição | "Border radius mínimo — 2px. Use em tags, badges compactos e chips de menor hierarquia." |
| `border/radius/small` | FLOAT (4) | 📝 Sem descrição | "Border radius pequeno — 4px. Use em inputs, selects e elementos de formulário." |
| `border/radius/mid` | FLOAT (8) | 📝 Sem descrição. **#5 mais usado (996 usos)** | "Border radius médio — 8px. Raio padrão de cards, modais e containers de conteúdo." |
| `border/radius/default` | FLOAT (10) | 📝 Sem descrição | "Border radius padrão — 10px. Raio de botões e elementos de ação interativos." |
| `border/radius/large` | FLOAT (16) | 📝 Sem descrição. **#9 mais usado (500 usos)** | "Border radius grande — 16px. Use em bottom sheets, drawers e containers de destaque." |
| `border/radius/huge` | FLOAT (20) | 📝 Sem descrição | "Border radius amplo — 20px. Use em cards de grande destaque e containers de marketing." |
| `border/radius/super` | FLOAT (24) | 📝 Sem descrição | "Border radius super — 24px. Use em modais de grande formato e elementos de alta curvatura." |
| `border/radius/full` | FLOAT (40) | 📝 Sem descrição. ⚠️ Nome `full` normalmente indica `9999px` em outros sistemas — pode confundir. | "Border radius full — 40px. Use em elementos de grande arredondamento como avatares e badges grandes." |
| `border/radius/rounded` | FLOAT (9999) | 📝 Sem descrição | "Border radius pílula — 9999px. Garante formato completamente oval em qualquer proporção de elemento." |
| `border/weight/none` | FLOAT (0) | 📝 Sem descrição | "Espessura de borda nula — 0px. Remove bordas visíveis." |
| `border/weight/default` | FLOAT (1) | 📝 Sem descrição. **#6 mais usado (994 usos)** | "Espessura de borda padrão — 1px. Use na maioria das bordas de inputs, cards e separadores." |
| `border/weight/medium` | FLOAT (1.5) | 📝 Sem descrição | "Espessura de borda média — 1.5px. Use em bordas de foco (focus ring) e elementos de destaque." |
| `border/weight/big` | FLOAT (2) | 📝 Sem descrição | "Espessura de borda grande — 2px. Use em bordas de seleção ativa e componentes de alta ênfase." |
| `opacity/off` | FLOAT (0) | 📝 0 usos + sem descrição | "Opacidade 0% — elemento invisível. Use em animações de entrada/saída e elementos ocultos." |
| `opacity/low` | FLOAT (25) | 📝 Sem descrição | "Opacidade baixa — 25%. Use em overlays sutis e efeitos de fade secundário." |
| `opacity/disabled` | FLOAT (40) | 📝 Sem descrição | "Opacidade de estado desabilitado — 40%. Aplique em componentes inativos para reduzir sua ênfase visual." |
| `opacity/medium` | FLOAT (50) | 📝 Sem descrição | "Opacidade média — 50%. Use em overlays e elementos de meia visibilidade." |
| `opacity/semi` | FLOAT (75) | 📝 0 usos + sem descrição | "Opacidade semi-transparente — 75%. Use em overlays de média intensidade e elementos de transição." |
| `opacity/high` | FLOAT (100) | 📝 Sem descrição. **#2 mais usado (13.817 usos)** | "Opacidade total — 100%. Estado padrão de visibilidade plena." |
| `elevation/default/x–color` (5 tokens) | FLOAT/COLOR | 📝 Sem descrição. Tokens construtores de sombra — raro usar isolado. | "Parâmetro X/Y/blur/spread/color do efeito `elevation/default`. Use o Effect Style correspondente." |
| `elevation/low/x–color` (5 tokens) | FLOAT/COLOR | 📝 0 usos + sem descrição | "Parâmetro da sombra `elevation/low`. Use o Effect Style correspondente em vez de manipular isolado." |
| `elevation/high/x–color` (5 tokens) | FLOAT/COLOR | 📝 0 usos + sem descrição | "Parâmetro da sombra `elevation/high`. Use o Effect Style correspondente em vez de manipular isolado." |

---

### Coleção: 🔢 Semantic Font Size (9 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `display` | FLOAT (18px) | 📝 Sem descrição | "Tamanho de fonte para displays e títulos principais — 18px. Responsivo via modos 80%–150%." |
| `heading` | FLOAT (16px) | 📝 Sem descrição | "Tamanho de fonte para headings de seção — 16px. Responsivo via modos 80%–150%." |
| `title` | FLOAT (14px) | 📝 Sem descrição | "Tamanho de fonte para títulos de componente — 14px. Responsivo via modos 80%–150%." |
| `subtitle` | FLOAT (12px) | 📝 Sem descrição | "Tamanho de fonte para subtítulos — 12px. Responsivo via modos 80%–150%." |
| `body` | FLOAT (10px) | 🐛 **B2** Mesmo valor de `caption` (10px). | "Tamanho de fonte para corpo de texto — 10px. Responsivo via modos 80%–150%." |
| `caption` | FLOAT (10px) | 🐛 **B2** Mesmo valor de `body` (10px). | "Tamanho de fonte para captions — 10px. Responsivo via modos 80%–150%. Diferenciar de `body` com lineHeight." |
| `mini` | FLOAT (8px) | 🐛 **B2** Mesmo valor de `micro` e `overline`. | "Tamanho de fonte mínimo — 8px. Use em textos de menor hierarquia como disclaimers." |
| `micro` | FLOAT (8px) | 🐛 **B2** 0 usos. Mesmo valor de `mini` e `overline`. Candidato à remoção. | "Tamanho de fonte micro — 8px. Avaliar consolidação com `mini` (valores idênticos, 0 usos)." |
| `overline` | FLOAT (8px) | 🐛 **B2** Mesmo valor de `mini` e `micro`. | "Tamanho de fonte para overlines — 8px. Diferenciado pelo `letterSpacing/wide` no Text Style correspondente." |

---

### Coleção: 📏 Spacing (12 variáveis)

| Nome do Token | Tipo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|---|
| `spacing/0` | FLOAT (0) | ✅ Descrição OK. **#4 mais usado (2.908 usos)** | — |
| `spacing/1` | FLOAT (0) | 🐛 **B1** Valor 0 — idêntico a `spacing/0`. Bug de valor. | "Micro — 1px. Separadores inline e dividers sutis. (CORRIGIR: valor atual é 0px)" |
| `spacing/2` | FLOAT (2) | ✅ Descrição OK | — |
| `spacing/3` | FLOAT (4) | ✅ Descrição OK. **#12 mais usado (403 usos)** | — |
| `spacing/4` | FLOAT (8) | ✅ Descrição OK | — |
| `spacing/5` | FLOAT (10) | ✅ Descrição OK. **#19 mais usado (192 usos)** | — |
| `spacing/6` | FLOAT (12) | ✅ Descrição OK. **#18 mais usado (211 usos)** | — |
| `spacing/7` | FLOAT (16) | ✅ Descrição OK. **#13 mais usado (361 usos)** | — |
| `spacing/8` | FLOAT (20) | ✅ Descrição OK | — |
| `spacing/9` | FLOAT (24) | ✅ Descrição OK | — |
| `spacing/10` | FLOAT (32) | ✅ Descrição OK | — |
| `spacing/11` | FLOAT (40) | ✅ Descrição OK | ⚠️ **Escopo E1** — todos os spacing tokens estão restritos a `GAP`. Adicionar `HORIZONTAL_PADDING` e `VERTICAL_PADDING`. |

---

### Text Styles (17 estilos)

| Nome do Estilo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|
| `title 1/Regular` | ✅ Descrição OK | — |
| `title 1/Bold` | ✅ Descrição OK | — |
| `title 2/Regular` | ✅ Descrição OK | — |
| `title 2/Bold` | ✅ Descrição OK | — |
| `title 3/Regular` | ✅ Descrição OK | — |
| `title 3/Bold` | ✅ Descrição OK | — |
| `headline/Regular` | ✅ Descrição OK | — |
| `headline/Bold` | ✅ Descrição OK | — |
| `body/Regular` | ✅ Descrição OK | — |
| `body/Bold` | ✅ Descrição OK | — |
| `callout/Regular` | ✅ Descrição OK | — |
| `callout/Bold` | ✅ Descrição OK | — |
| `footnote/Regular` | ✅ Descrição OK | — |
| `footnote/Bold` | ✅ Descrição OK | — |
| `caption/Regular` | ✅ Descrição OK | — |
| `caption/Bold` | ✅ Descrição OK | — |
| `overline/Bold` | ✅ Descrição OK | — |

---

### Effect Styles (3 estilos)

| Nome do Estilo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|
| `elevation/low` | ✅ Descrição OK | — |
| `elevation/default` | ✅ Descrição OK | — |
| `elevation/high` | ✅ Descrição OK | — |

---

### Grid Styles (2 estilos)

| Nome do Estilo | Problema Encontrado | Sugestão de Descrição |
|---|---|---|
| `grid/mobile` | ✅ Descrição OK | — |
| `grid/tablet` | ✅ Descrição OK | — |

---

## Pilar 3 — Relatório de Popularidade

> Dados coletados via varredura de `boundVariables` em todos os nós de todas as páginas do arquivo.
> **324 variáveis totais** distribuídas em 8 coleções.

---

### 🏆 Top 5 — Tokens Mais Utilizados

| # | Token | Coleção | Usos | Por que é o core do sistema |
|---|-------|---------|------|----------------------------|
| 1 | `border/radius/none` | 🔢 semantic: numbers | **36.245** | Valor padrão implícito de border radius. A enorme liderança sugere que a maioria dos elementos reseta o raio para 0 — provável que seja um default automático aplicado em novos frames ou que muitos componentes mobile usam formas retas. |
| 2 | `opacity/high` | 🔢 semantic: numbers | **13.817** | Representa 100% de opacidade. Alta contagem provavelmente por ser o valor padrão explicitamente vinculado a muitos nós para controle de estados de animação ou visibilidade. |
| 3 | `grayscale/50` | 🎨 primitive: colors | **3.110** | Branco `#ffffff` — a cor de fundo e superfície mais utilizada. Indica que os designers usam diretamente a primitiva em alguns casos, o que é um ponto de atenção (tokens semânticos como `surface/default/default` deveriam ser preferidos). |
| 4 | `spacing/0` | 📏 spacing | **2.908** | Gap zero em auto-layout. Alta contagem esperada para containers sem espaçamento interno. |
| 5 | `border/radius/mid` | 🔢 semantic: numbers | **996** | O border radius de 8px é o raio padrão de cards, modais e containers — coração da linguagem visual arredondada do DS. |

> ⚠️ **Alerta no #3:** `grayscale/50` (primitiva) aparece mais do que qualquer token semântico de cor, o que sugere uso direto de primitivas em componentes. Recomenda-se uma auditoria de componentes para substituir por `surface/default/default` ou `background/default/default`.

---

### 📉 Bottom — Tokens de Baixo ou Zero Uso (candidatos à revisão)

| Token | Usos | Recomendação |
|-------|------|-------------|
| `text/neutral/veryHigh` | 0 | ⚠️ **Avaliar remoção.** Mesmo valor de `text/neutral/high` em light e potencialmente em dark. Se dark mode não o diferencia, é redundante. |
| `icon/neutral/veryHigh` | 0 | ⚠️ **Avaliar remoção.** Mesmo argumento — indistinguível de `icon/neutral/high` na prática. |
| `action/disabled` | 0 | ⚠️ **Manter, mas investigar.** Deve ser usado em botões desabilitados. Zero usos indica que os componentes usam `opacity/disabled` em vez deste token. Verificar e documentar o padrão correto. |
| `fontWeight/semibold` | 0 | 🗑️ **Avaliar remoção.** Nenhum Text Style usa semibold. Manter apenas se houver intenção de uso futuro — documentar na descrição. |
| `opacity/semi` (75%) | 0 | ⚠️ **Avaliar uso.** Tier de opacidade que nenhum componente usa. Manter apenas se houver casos de uso documentados. |
| `opacity/off` (0%) | 0 | ⚠️ **Avaliar.** Pode ser útil para animações — manter mas documentar o caso de uso. |
| `micro` (font size 8px) | 0 | 🗑️ **Remover.** Mesmo valor de `mini` e `overline`, zero usos. Bloat claro. |
| `elevation/low/*` (5 tokens) | 0 cada | ⚠️ **Manter, mas orientar.** Os parâmetros de sombra são tokens construtores — designers devem usar o **Effect Style** `elevation/low`, não as variáveis individuais. Adicionar descrição explicando isso. |
| `elevation/high/*` (5 tokens) | 0 cada | ⚠️ Mesmo caso do `elevation/low`. | Idem |
| `decorative/graphs/*-high` (6 tokens) | 0 cada | ⚠️ **Manter.** Tokens de dataviz têm uso contextual — zero usos indica que dashboards/gráficos ainda não foram desenvolvidos. Manter e sinalizar como "em planejamento" na descrição. |
| `text/information/low` | 0 | ⚠️ Avaliar. Além de 0 usos, falha WCAG se usado em fundo branco. |
| `text/information/onColor` | 0 | ⚠️ Avaliar necessidade. |
| `icon/information/high/low/onColor` | 0 cada | ⚠️ Avaliar — toda a série `icon/information` tem problemas de descrição (D1) e zero usos. |
| `breakpoints/xs` e `breakpoints/lg` | 0 cada | ⚠️ Manter como referência de especificação, mas documentar. |

---

## Resumo Executivo

| Categoria | Qtd | Severidade |
|-----------|-----|-----------|
| Bugs de valor | 2 | 🔴 Alta |
| Copy-paste de descrições | 5 ocorrências | 🟠 Média |
| Tokens sem descrição | ~80 variáveis | 🟡 Baixa |
| Falhas de contraste WCAG | 7 tokens de texto | 🔴 Alta |
| Problema de escopo | 2 coleções | 🟠 Média |
| Tokens redundantes (mesmo valor) | 8+ casos | 🟠 Média |
| Tokens com 0 usos | 30+ variáveis | 🟡 Baixa |

**Ações prioritárias:**
1. Corrigir `spacing/1` (valor 0px → 1px) — **B1**
2. Adicionar aviso de WCAG nas descrições dos 7 tokens `*/low` de texto — **Acessibilidade**
3. Corrigir as 5 séries de descrições copiadas incorretamente — **D1-D5**
4. Adicionar scopes de padding ao `spacing/*` — **E1**
5. Avaliar e possivelmente remover `micro`, `fontWeight/semibold`, `text/neutral/veryHigh`, `icon/neutral/veryHigh`
