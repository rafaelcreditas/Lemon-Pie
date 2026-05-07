# Análise — App Components (shadcn/ui kit for Figma)

**Arquivo:** [App Components](https://www.figma.com/design/GHZkof22Vwi6rxL1eaBoGB/App-Components?node-id=580-9181)
**Base:** shadcn/ui 3.8+ · Tailwind v4 · Fevereiro 2026
**Data da análise:** 16/04/2026

---

## Visão geral do arquivo

O arquivo contém **1 página** chamada "Documentation", com 8 seções de apoio e um menu lateral que indexa todas as páginas de componentes. A estrutura é:

**Seções de documentação:** Welcome, Getting started, Variables, Theming, Components, Development, Theme Preview, Menu.

**Páginas de ícones (6):** Icons, Lucide Icons, Tabler Icons, HugeIcons, Phosphor Icons, Remix Icon.

**Páginas de blocos (4):** Blocks (Official), Pro Blocks (Application), Pro Blocks (Landing Page), Pro Blocks (E-commerce).

**Páginas auxiliares (2):** Academy, Assets.

**Páginas de componentes (55):** listadas e categorizadas abaixo.

---

## Categorização de componentes

### Mobile / Tablet (App Creditas)

Componentes que fazem sentido em interfaces mobile e tablet — seja por serem universais, seja porque seguem padrões nativos de apps (bottom sheets, toasts, formulários touch-friendly).

| Componente | Por que faz sentido no app |
|---|---|
| **Accordion** | Otimiza espaço vertical; padrão comum em FAQs e detalhes de produto no app |
| **Alert** | Feedback contextual funciona em qualquer viewport |
| **Alert Dialog** | Modal de confirmação — essencial para ações destrutivas (cancelar contrato, excluir) |
| **Aspect Ratio** | Controle de proporção para imagens/vídeos responsivos |
| **Avatar** | Perfil da pessoa usuária, identificação visual |
| **Badge** | Status de contratos, notificações, tags de produto |
| **Button** | Universal — ações primárias, secundárias, destrutivas |
| **Button Group** | Grupos de ação compactos (ex.: filtros rápidos) |
| **Calendar** | Seleção de datas para agendamentos e simulações |
| **Card** | Padrão central do app — contratos, ofertas, resumos financeiros |
| **Carousel** | Swipe nativo; banners, onboarding, destaque de produtos |
| **Chart** | Gráficos simplificados de evolução financeira, parcelas |
| **Checkbox** | Formulários, termos de aceite, seleção múltipla |
| **Date Picker** | Seleção de datas em fluxos de simulação e agendamento |
| **Dialog** | Modais de confirmação e informação |
| **Direction** | Suporte RTL — relevante para internacionalização futura |
| **Drawer** | Bottom sheet — padrão nativo mobile para ações e detalhes |
| **Empty** | Estados vazios ("sem contratos", "sem notificações") — essencial para UX mobile |
| **Field** | Campo de formulário com label, validação e mensagem de erro |
| **Form** | Composição de formulários completos |
| **Input** | Campos de texto, busca, valores monetários |
| **Input Group** | Inputs com prefixo/sufixo (R$, %, ícones) |
| **Input OTP** | Verificação por código — fluxo mobile por excelência |
| **Item** | Item de lista — contratos, transações, notificações |
| **Label** | Rótulos de campo de formulário |
| **Popover** | Conteúdo contextual em tap — info de taxas, detalhes |
| **Progress** | Barras de progresso — etapas de contratação, upload |
| **Radio Group** | Seleção única em formulários (tipo de garantia, prazo) |
| **Scroll Area** | Área de scroll customizada para listas longas |
| **Select** | Dropdown de seleção — adapta para picker nativo no mobile |
| **Separator** | Divisor visual entre seções |
| **Sheet** | Painel lateral/inferior — detalhes de contrato, filtros |
| **Skeleton** | Loading state — essencial para percepção de performance |
| **Slider** | Seleção de valores (prazo, valor de empréstimo) — touch-friendly |
| **Sonner** | Toast notifications — feedback de ações (aprovado, enviado) |
| **Spinner** | Indicador de carregamento |
| **Switch** | Toggle on/off — notificações, biometria, preferências |
| **Tabs** | Navegação entre seções (meus contratos, simulações) |
| **Textarea** | Campos de texto longo (observações, mensagens) |
| **Toggle** | Botão de alternância de estado |
| **Toggle Group** | Grupo de alternância (filtros visuais, tipo de visualização) |
| **Typography** | Sistema tipográfico — base de qualquer interface |

**Total: 42 componentes**

---

### Web only (Desktop)

Componentes que fazem sentido apenas em interfaces desktop/web — por dependerem de hover, teclado, viewport amplo ou padrões de navegação exclusivos de desktop.

| Componente | Por que é exclusivo web |
|---|---|
| **Breadcrumb** | Navegação hierárquica por trilha — padrão desktop; no mobile, usa-se back button e navegação por stack |
| **Collapsible** | Similar ao Accordion, mas o padrão é mais comum em sidebars e painéis desktop |
| **Combobox** | Input + dropdown com busca — interação complexa que funciona mal em telas pequenas; no mobile, prefere-se tela dedicada de busca |
| **Command** | Command palette (⌘K) — padrão power-user de desktop, depende de teclado físico |
| **Context Menu** | Menu de clique direito — sem equivalente em touch |
| **Data Table** | Tabelas com ordenação, filtros e paginação — exige viewport largo; no mobile, prefere-se cards ou listas |
| **Dropdown Menu** | Menu dropdown ativado por hover/click — no mobile, o equivalente é Drawer/Sheet (bottom sheet) |
| **Hover Card** | Card que aparece no hover — sem hover em touch screens |
| **Kbd** | Representação visual de atalhos de teclado — sem teclado físico no mobile |
| **Menubar** | Barra de menu horizontal (Arquivo, Editar...) — padrão desktop clássico |
| **Navigation Menu** | Mega menu de navegação com submenus — complexo demais para mobile; usa-se navegação por stack/tabs |
| **Pagination** | Navegação por páginas numeradas — no mobile, prefere-se infinite scroll ou "carregar mais" |
| **Resizable** | Painéis redimensionáveis por drag — depende de cursor e viewport grande |
| **Sidebar** | Navegação lateral persistente — no mobile, vira drawer/hamburger menu |
| **Table** | Tabela simples — exige scroll horizontal em telas pequenas; no mobile, prefere-se cards |
| **Tooltip** | Informação contextual no hover — sem hover em dispositivos touch |

**Total: 16 componentes (incluindo 3 com potencial de adaptação)**

---

## Componentes com potencial de adaptação

Alguns componentes desktop podem ter equivalentes mobile com ajustes significativos:

| Desktop | Equivalente mobile sugerido |
|---|---|
| Dropdown Menu | Drawer (bottom sheet) |
| Sidebar | Drawer com hamburger menu |
| Table / Data Table | Card list ou lista com detalhes expansíveis |
| Tooltip | Popover (ativado por tap) |
| Pagination | Infinite scroll ou botão "carregar mais" |
| Combobox | Tela de busca dedicada (full-screen search) |

---

## Páginas não-componentes

| Página | Plataforma | Observação |
|---|---|---|
| Icons, Lucide, Tabler, HugeIcons, Phosphor, Remix | Ambas | Ícones são universais |
| Blocks (Official) | Web | Blocos de página pré-montados, layout desktop |
| Pro Blocks (Application) | Web | Templates de aplicação desktop |
| Pro Blocks (Landing Page) | Web | Landing pages — viewport desktop |
| Pro Blocks (E-commerce) | Web | E-commerce layouts — desktop-first |
| Academy | Ambas | Conteúdo educacional |
| Assets | Ambas | Recursos visuais compartilhados |

---

## Resumo quantitativo

| Categoria | Quantidade |
|---|---|
| Componentes mobile/tablet | **42** (76%) |
| Componentes web-only | **16** (29%) |
| **Total de componentes** | **55** (com 3 contados em ambas por adaptação) |
| Páginas de ícones | 6 (ambas plataformas) |
| Páginas de blocos | 4 (web-only) |

A maioria dos componentes (76%) é aproveitável no app da Creditas. Os 16 componentes web-only seguem padrões de interação que dependem de hover, teclado físico ou viewport amplo — mas vários deles têm equivalentes mobile naturais que já existem na própria biblioteca (Drawer no lugar de Dropdown Menu, por exemplo).
