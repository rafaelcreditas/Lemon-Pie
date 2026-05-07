# Lemon Pie Design System — Regras Completas

> Fonte: [Figma — Lemon Pie DS](https://www.figma.com/design/Co1zD0W0U5teOBaqv1boej/Lemon-Pie-DS?node-id=2028-9925)
> Última extração: 27 de abril de 2026

---

## 1. Arquitetura de Tokens

O Lemon Pie DS organiza seus tokens em três camadas hierárquicas, todas gerenciadas como **Figma Variables**:

| Camada | Collection no Figma | Descrição |
|---|---|---|
| **Primitivos** | `primitive: type` | Valores brutos (tamanhos de fonte em px, pesos, line-heights em %). Nunca devem ser usados diretamente em componentes. |
| **Números & Efeitos** | `🔢 numbers&effects` | Border radius, elevation/shadow parameters. Tokens de forma e profundidade. |
| **Tema de Cor (Semânticos)** | `🎨 colorTheme` | Cores semânticas por função (text, icon, surface, background, action). Suportam temas (light/dark). |
| **Type Zoom** | `🔢 typeZoom` | Escala tipográfica responsiva — line-heights e font-sizes por papel semântico (title, body, caption…). |

**Regra fundamental:** Componentes e telas devem referenciar apenas tokens semânticos (`🎨 colorTheme` e `🔢 typeZoom`). Tokens primitivos são reservados como aliases internos.

---

## 2. Cores — Color Theme (`🎨 colorTheme`)

### 2.1 Estrutura Semântica

Cada token de cor segue o padrão de nomenclatura:

```
{categoria}/{intenção}/{intensidade}
```

Onde:

- **Categoria:** `text`, `icon`, `surface`, `background`, `action`
- **Intenção:** `neutral`, `branded`, `positive`, `negative`, `warning`, `information`
- **Intensidade:** `veryLow`, `low`, `default`, `high`, `veryHigh`, `onColor`

### 2.2 Tokens de Texto (`text/`)

Escopo: `TEXT_FILL`

| Token | Uso |
|---|---|
| `text/neutral/veryLow` | Placeholders, metadados e textos de menor importância hierárquica |
| `text/neutral/low` | Subtítulos, captions e textos de suporte secundário |
| `text/neutral/default` | Cor principal de corpo de texto, parágrafos e conteúdo de leitura |
| `text/neutral/high` | Headings principais, labels de formulário e textos críticos |
| `text/neutral/veryHigh` | Labels sobre superfícies de altíssima ênfase |
| `text/neutral/onColor` | Texto neutro sobre fundos coloridos — garante legibilidade |
| `text/branded/onColor` | Texto da marca sobre fundos limeGreen — garante contraste |
| `text/positive/onColor` | Texto positivo sobre fundos verdes |
| `text/negative/onColor` | Texto de erro sobre fundos vermelhos |
| `text/warning/onColor` | Texto de alerta sobre fundos amarelos |
| `text/information/low` | Texto informativo sutil — **usar apenas sobre `surface/information/low`**, não em fundo branco |
| `text/information/default` | Mensagens de dica, notas contextuais e conteúdo de apoio |
| `text/information/high` | Títulos e labels de seções com conteúdo de apoio ou dicas |
| `text/information/onColor` | Texto informativo sobre fundos teal — garante contraste |

### 2.3 Tokens de Ícone (`icon/`)

Escopo: `FRAME_FILL`, `SHAPE_FILL`, `STROKE`

| Token | Uso |
|---|---|
| **Neutral** | |
| `icon/neutral/veryLow` | Ícones desativos, placeholders gráficos, mínima ênfase |
| `icon/neutral/low` | Ícones de apoio, indicadores e elementos de menor ênfase |
| `icon/neutral/default` | Cor base de ícones de interface, ações secundárias e decorativos |
| `icon/neutral/high` | Ícones de ação primária, navegação principal, alta ênfase |
| `icon/neutral/veryHigh` | Ícones de ações ou CTAs de altíssima ênfase |
| `icon/neutral/onColor` | Ícone neutro sobre fundos coloridos — garante contraste |
| **Branded** | |
| `icon/branded/low` | Ícones da marca em estado inativo ou de menor ênfase |
| `icon/branded/default` | Ícones com identidade visual Creditas |
| `icon/branded/high` | Ícones da Creditas em hover/pressed e destaques da marca |
| `icon/branded/onColor` | Ícone da marca sobre fundos limeGreen |
| **Positive** | |
| `icon/positive/low` | Ícones de apoio em contextos de sucesso de menor destaque |
| `icon/positive/default` | Ícones de status de sucesso, confirmação e aprovação |
| `icon/positive/high` | Checkmarks de conclusão e aprovação (sucesso crítico) |
| `icon/positive/onColor` | Ícone positivo sobre fundos verdes |
| **Negative** | |
| `icon/negative/low` | Ícones de apoio em contextos de erro de menor destaque |
| `icon/negative/default` | Validação de formulário, status de erro, falhas de processo |
| `icon/negative/high` | Ícones de erro crítico, alertas de bloqueio e falhas |
| `icon/negative/onColor` | Ícone de erro sobre fundos vermelhos |
| **Warning** | |
| `icon/warning/low` | Ícones de apoio em contextos de aviso de menor destaque |
| `icon/warning/default` | Ícones de aviso, notificações de risco, indicadores de atenção |
| `icon/warning/high` | Ícones de aviso crítico que exigem atenção imediata |
| `icon/warning/onColor` | Ícone de alerta sobre fundos amarelos |
| **Information** | |
| `icon/information/low` | Ícones de apoio em contextos informativos de menor ênfase |
| `icon/information/default` | Ícones de tooltip, ajuda contextual, indicadores de informação |
| `icon/information/high` | Ícones de dica crítica e apoio de alto destaque |
| `icon/information/onColor` | Ícone informativo sobre fundos teal |

### 2.4 Tokens de Superfície (`surface/`)

Escopo: `FRAME_FILL`, `SHAPE_FILL`, `STROKE`

| Token | Uso |
|---|---|
| **Neutral** | |
| `surface/neutral/low` | Áreas de destaque suave (linhas alternadas em tabelas) |
| `surface/neutral/default` | Fundo da maioria dos cards e painéis |
| `surface/neutral/high` | Cards elevados, dropdowns, elementos flutuantes |
| `surface/neutral/onColor` | Superfície sobre fundos coloridos — garante contraste |
| **Branded** | |
| `surface/branded/low` | Botões da marca em estado desabilitado ou sutil |
| `surface/branded/default` | Fundo na cor da marca (limeGreen) — headers, banners, CTAs |
| `surface/branded/high` | Botões primários da marca em hover ou pressed |
| `surface/branded/onColor` | Ação sobre fundos da marca (textos/ícones sobre limeGreen) |
| **Positive** | |
| `surface/positive/low` | Backgrounds de seções de status positivo |
| `surface/positive/default` | Badges, chips e alertas de sucesso |
| `surface/positive/high` | Banners de sucesso e toasts de confirmação |
| `surface/positive/onColor` | Elementos sobrepostos a áreas verdes |
| **Negative** | |
| `surface/negative/low` | Background de seções com status de erro |
| `surface/negative/default` | Badges de erro, chips de alerta, banners de falha |
| `surface/negative/high` | Banners críticos, toasts de erro, alertas de bloqueio |
| `surface/negative/onColor` | Elementos sobre áreas de alerta vermelho |
| **Warning** | |
| `surface/warning/low` | Backgrounds de conteúdo que requer atenção |
| `surface/warning/default` | Badges de aviso e indicadores de atenção |
| `surface/warning/high` | Banners de atenção e toasts de aviso crítico |
| `surface/warning/onColor` | Elementos sobre áreas amarelas de aviso |
| **Information** | |
| `surface/information/low` | Backgrounds de conteúdo explicativo ou dicas |
| `surface/information/default` | Tooltips, dicas contextuais e badges informativos |
| `surface/information/high` | Banners informativos e toasts de dica |
| `surface/information/onColor` | Elementos sobre áreas de informação |

### 2.5 Tokens de Background (`background/`)

Escopo: `FRAME_FILL`, `SHAPE_FILL` (sem `STROKE`)

| Token | Uso |
|---|---|
| **Neutral** | |
| `background/neutral/low` | Fundo de menor contraste para hierarquia entre camadas (seções secundárias) |
| `background/neutral/default` | Fundo padrão de telas e containers — cor base da maioria das superfícies |
| `background/neutral/high` | Background principal de páginas e modais (alto contraste) |
| **Branded** | |
| `background/branded/low` | Botões da marca em estado desabilitado ou sutil |
| `background/branded/default` | Fundo na cor limeGreen — headers, banners e CTAs de alto destaque |
| `background/branded/high` | Botões primários da marca em hover ou pressed |

### 2.6 Tokens de Ação (`action/`)

Escopo: `FRAME_FILL`, `SHAPE_FILL`, `STROKE`

| Token | Uso |
|---|---|
| **Branded** | |
| `action/branded/low` | Botões da marca em estado desabilitado ou sutil |
| `action/branded/default` | Cor principal de CTAs Creditas, botões primários e links da marca (limeGreen) |
| `action/branded/high` | Botões primários em hover ou pressed |
| `action/branded/onColor` | Textos e ícones sobre backgrounds limeGreen |
| **Neutral** | |
| `action/neutral/veryLow` | Backgrounds de hover, estados focados e ações passivas de mínima ênfase |
| `action/neutral/veryHigh` | Botões primários de ação de altíssima ênfase |
| **Information** | |
| `action/information/low` | Hover states de links informativos e ações secundárias |
| `action/information/default` | Links de ajuda, botões de dica, ações de suporte |
| `action/information/high` | Botões informativos em hover/pressed, links de apoio críticos |
| `action/information/onColor` | Ícones e textos sobre backgrounds de informação |

### 2.7 Tokens de Elevation (Sombras)

Collection: `🔢 numbers&effects`

O DS define um estilo de elevação composto por **5 camadas de sombra** (`elevation/default`), cada uma com cor própria:

| Token | Tipo | Descrição |
|---|---|---|
| `elevation/default/effect 1/color` | `COLOR` (EFFECT_COLOR) | Camada de sombra 1 |
| `elevation/default/effect 2/color 2` | `COLOR` (EFFECT_COLOR) | Camada de sombra 2 |
| `elevation/default/effect 3/color 3` | `COLOR` (EFFECT_COLOR) | Camada de sombra 3 |
| `elevation/default/effect 4/color 4` | `COLOR` (EFFECT_COLOR) | Camada de sombra 4 |
| `elevation/default/effect 5/color 5` | `COLOR` (EFFECT_COLOR) | Camada de sombra 5 |

**Regra:** Não usar as variáveis de cor diretamente — aplicar o **Effect Style** `elevation/default` correspondente, que agrupa todos os parâmetros (X, Y, blur, spread, color).

---

## 3. Tipografia

### 3.1 Primitivos de Fonte (`primitive: type`)

Font sizes brutos em px. **Não usar diretamente** — são aliases para Text Styles e tokens semânticos.

| Token | Valor |
|---|---|
| `fontSize/8` | 8px |
| `fontSize/10` | 10px |
| `fontSize/12` | 12px |
| `fontSize/14` | 14px |
| `fontSize/16` | 16px |
| `fontSize/18` | 18px |
| `fontSize/20` | 20px |
| `fontSize/28` | 28px |
| `fontSize/32` | 32px |
| `fontSize/48` | 48px |
| `fontSize/56` | 56px |
| `fontSize/64` | 64px |
| `fontSize/72` | 72px |
| `fontSize/80` | 80px |

### 3.2 Line Heights Primitivos (`primitive: type`)

| Token | Valor |
|---|---|
| `lineHeight/120%` | 120% |
| `lineHeight/125%` | 125% |
| `lineHeight/130%` | 130% |
| `lineHeight/133%` | 133% |
| `lineHeight/140%` | 140% |
| `lineHeight/150%` | 150% |

### 3.3 Escala Tipográfica Semântica (`🔢 typeZoom`)

Tokens responsivos que definem o papel de cada estilo de texto. Cada um possui `fontSize` e `lineHeight`:

| Papel Semântico | Descrição |
|---|---|
| `title 1` | Título principal de página, hero |
| `title 2` | Título de seção |
| `title 3` | Subtítulo, título de card |
| `headline` | Destaque editorial, valor numérico grande |
| `body` | Corpo de texto padrão, parágrafos |
| `callout` | Texto de destaque em contexto, CTAs de texto |
| `caption` | Rótulos de apoio, metadados de lista |
| `footnote` | Notas de rodapé, disclaimers, textos legais |

**Regra:** Usar sempre os papéis semânticos (`title 1`, `body`, etc.) e não valores primitivos (`fontSize/16`). O `typeZoom` permite ajuste de escala entre plataformas (mobile vs. desktop) sem alterar os componentes.

---

## 4. Border Radius

Collection: `🔢 numbers&effects` — Escopo: `CORNER_RADIUS`

| Token | Uso |
|---|---|
| `border/radius/large` | Modais de grande formato, elementos de alta curvatura |
| `border/radius/full` | Avatares e badges grandes (arredondamento total, ex: 9999px) |

**Observação:** O DS provavelmente possui tokens intermediários (none, small, medium) que podem não estar publicados como variáveis na library. Consulte a página de tokens no Figma para valores exatos.

---

## 5. Regras de Uso por Intenção

### 5.1 Neutral

Uso padrão da interface — textos de leitura, ícones de navegação, superfícies de cards, backgrounds de tela.

A escala de intensidade segue: `veryLow → low → default → high → veryHigh`

- **veryLow:** placeholders, estados desativos, mínima ênfase
- **low:** texto de suporte, captions, ícones secundários
- **default:** corpo de texto, ícones padrão, cards
- **high:** headings, ícones de ação principal, cards elevados
- **veryHigh:** labels sobre superfícies de altíssima ênfase, botões primários

### 5.2 Branded

Identidade visual Creditas. A cor da marca é **limeGreen**.

- Use `action/branded/default` como cor principal de CTAs e botões primários
- Use `surface/branded/default` para headers, banners e áreas de destaque da marca
- Use `background/branded/default` para fundos de grande área com identidade Creditas
- **onColor:** sempre que texto, ícone ou superfície estiver **sobre** um fundo limeGreen

### 5.3 Positive

Sucesso, confirmação, aprovação.

- `surface/positive/low` para backgrounds sutis de seções de sucesso
- `surface/positive/high` para banners de sucesso e toasts de confirmação
- `icon/positive/default` para checkmarks e ícones de status

### 5.4 Negative

Erros, falhas, alertas de bloqueio.

- `surface/negative/low` para backgrounds de seções de erro
- `surface/negative/high` para banners críticos e alertas de bloqueio
- `icon/negative/default` para ícones de validação de formulário e status de erro

### 5.5 Warning

Avisos que requerem atenção do usuário.

- `surface/warning/low` para backgrounds com conteúdo de atenção
- `surface/warning/high` para banners de aviso crítico
- `icon/warning/default` para ícones de notificação de risco

### 5.6 Information

Dicas, tooltips, conteúdo explicativo. A cor base é **teal**.

- `surface/information/low` para backgrounds de dicas e conteúdo explicativo
- `surface/information/default` para tooltips e badges informativos
- `text/information/low` deve ser usado **exclusivamente sobre** `surface/information/low` — nunca sobre fundo branco
- `action/information/default` para links de ajuda e ações de suporte

---

## 6. Regras de Contraste (`onColor`)

Cada intenção possui tokens `onColor` para **texto**, **ícone**, **surface** e **action**. Esses tokens **devem ser usados obrigatoriamente** quando o conteúdo é sobreposto a um fundo colorido da mesma intenção.

| Fundo | Texto | Ícone | Surface |
|---|---|---|---|
| `surface/branded/*` ou `background/branded/*` | `text/branded/onColor` | `icon/branded/onColor` | `surface/branded/onColor` |
| `surface/positive/*` | `text/positive/onColor` | `icon/positive/onColor` | `surface/positive/onColor` |
| `surface/negative/*` | `text/negative/onColor` | `icon/negative/onColor` | `surface/negative/onColor` |
| `surface/warning/*` | `text/warning/onColor` | `icon/warning/onColor` | `surface/warning/onColor` |
| `surface/information/*` | `text/information/onColor` | `icon/information/onColor` | `surface/information/onColor` |
| Qualquer fundo colorido (genérico) | `text/neutral/onColor` | `icon/neutral/onColor` | `surface/neutral/onColor` |

---

## 7. Componentes Publicados

### 7.1 Componentes da Library `Lemon Pie DS`

| Componente | Tipo | Descrição |
|---|---|---|
| `ShortcutPill` | Component Set | Pill-shaped shortcut/filter button com estados `active` e `default` |
| `BottomNavBar` | Component Set | Barra de navegação inferior do app |

### 7.2 Componentes Identificados nas Telas (por uso)

A análise da página "org dos tokens" revelou os seguintes componentes em uso recorrente:

| Componente | Instâncias | Contexto de Uso |
|---|---|---|
| Chevron | ~100 | Navegação entre telas, expandir/colapsar itens |
| Icon (genérico) | ~39 | Placeholder de ícone em diversas posições |
| Primary / Text Only (Button) | ~12 | Botão primário com label de texto |
| Menu inferior (BottomNavBar) | ~11 | Navegação principal do app |
| Help Icon | ~10 | Ícone de ajuda contextual |
| Notification Icon | ~9 | Ícone de notificações |
| Switch / Large | — | Toggle on/off para configurações |
| Status Bar | — | Barra de status do sistema (iOS) |
| Badge | — | Indicadores numéricos e de status |
| Tabs | — | Navegação por abas dentro de seções |

---

## 8. Bibliotecas Conectadas

O arquivo Lemon Pie DS utiliza as seguintes bibliotecas:

| Biblioteca | Fonte | Descrição |
|---|---|---|
| `[WIP] Components` | Team | Componentes em desenvolvimento |
| `Lemon Pie DS` | Team | A própria library de tokens e componentes |
| `[Teste] Lib nova` | Team | Library de teste/experimentação |
| `❖ UI kit App` | Team | Kit de UI para plataforma App |
| `❖ Grafismos` | Team | Elementos gráficos e ilustrações |
| `(Antigo) Design Tokens` | Team | Library de tokens legada (em depreciação) |
| `[Teste] Lib meio termo` | Team | Library de teste intermediária |
| `❖ UI kit Web` | Team | Kit de UI para plataforma Web |
| `❖ Ferramentas para Figma` | Team | Utilitários e ferramentas de design |

---

## 9. Estrutura de Telas no Arquivo

A página "org dos tokens" (node `2028:9925`) contém telas de referência organizadas por **vertical de produto** e **perfil de usuário**:

| Vertical | Cliente | Não-Cliente |
|---|---|---|
| **Início** (Home/Dashboard) | `4396:9662` | `4396:9786` |
| **Auto** (Empréstimo com Veículo) | `4396:10402` | `4396:10701` |
| **Imóvel** (Empréstimo com Imóvel) | `4396:10194` | `4396:10028` |
| **Salário** (Crédito Consignado) | `4396:11047` | `4396:10905` |
| **Cartão** (Cartão de Crédito) | `4396:11289` | `4396:11225` |
| **Perfil** (Conta do Usuário) | `4396:11648` | `4428:6623` |
| **Score** (Score de Crédito) | `4396:11783` (Dashboard) | `4396:11972` (Histórico) |

---

## 10. Regras Gerais de Aplicação

1. **Sempre use tokens semânticos**, nunca valores hard-coded. Cores em hex, font-sizes em px e border-radius fixos são proibidos.

2. **Respeite a hierarquia de intensidade.** A escala `veryLow → low → default → high → veryHigh` define a hierarquia visual. Um heading não deve usar `text/neutral/low`; um placeholder não deve usar `text/neutral/high`.

3. **Tokens `onColor` são obrigatórios sobre fundos coloridos.** Sempre que uma superfície usa uma cor de intenção (branded, positive, negative, warning, information), o conteúdo sobreposto deve usar o token `onColor` correspondente.

4. **`text/information/low` é restrito.** Esse token só funciona sobre `surface/information/low`. Usá-lo sobre fundo branco viola as regras de contraste.

5. **Elevation via Effect Style.** Nunca aplique as variáveis de sombra individualmente. Use o Effect Style `elevation/default` que agrupa todas as 5 camadas.

6. **Tipografia por papel semântico.** Use os nomes de papel (`title 1`, `body`, `caption`, etc.) do `typeZoom`, não os primitivos (`fontSize/16`). Isso garante que a escala responsiva funcione entre plataformas.

7. **Border radius por token.** Use `border/radius/large` para modais e elementos de alta curvatura, `border/radius/full` para avatares e badges circulares.

8. **Background vs. Surface.** `background/` é para áreas de página completa (telas, modais, seções). `surface/` é para elementos contidos como cards, chips, badges e banners. Background tokens não incluem `STROKE` no escopo; surface tokens incluem.

9. **Action tokens para interação.** Use `action/` para estados interativos de botões, links e CTAs. `action/branded/default` (limeGreen) é a cor primária de CTA da Creditas.

10. **Cor da marca Creditas = limeGreen.** Todos os tokens `branded` referenciam a cor verde-limão da identidade Creditas. É a cor de CTAs primários, headers de marca e elementos de destaque institucional.
