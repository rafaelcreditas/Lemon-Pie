# Relatório de Arquitetura de Informação — Language Tokens
**Lemon Pie DS · Creditas**
**Collection:** `language wip` · Figma: `Co1zD0W0U5teOBaqv1boej`
**Data:** 09/04/2026 · **Total de tokens:** 285 variáveis de string (3 modos: pt · en · mx)

---

## Cobertura de Bindings por Tela

> Percentual de text nodes conectados a tokens de linguagem. Nodes não conectados são dados em runtime (valores monetários, nomes de usuário, datas, placas, marcas) ou lorem ipsum — não tokenizáveis por design.

| Tela | Text nodes | Conectados | Cobertura | Não tokenizáveis |
|------|-----------|------------|-----------|-----------------|
| Perfil / Client | 46 | 42 | **91%** | dados de tempo, versão |
| Perfil / Not Client | 44 | 39 | **89%** | dados de usuário |
| Score / Dashboard | 41 | 35 | **85%** | métricas numéricas |
| Início / Not Client | 42 | 35 | **83%** | nomes de história, valores |
| Salário / Client | 38 | 31 | **82%** | CNPJ, marca, valores |
| Imóvel / Client | 44 | 35 | **80%** | endereço, CEP, cidade |
| Cartão / Not Client | 15 | 12 | **80%** | — |
| Auto / Client | 55 | 41 | **75%** | placa, modelo, ano, lorem |
| Início / Client | 71 | 53 | **75%** | placa, modelo, valores |
| Auto / Not Client | 43 | 31 | **72%** | modelo, lorem |
| Imóvel / Not Client | 34 | 22 | **65%** | lorem, parceiro |
| Salário / Not Client | 33 | 21 | **64%** | lorem, marca |
| Simular | 20 | 12 | **60%** | opções de parcela (24x, 30x…) |
| Cartão / Client | 50 | 24 | **48%** | linhas de transação (datas, lojas, valores) |
| Score / Histórico | 59 | 21 | **36%** | eixos do gráfico (números, meses) |
| **TOTAL** | **635** | **454** | **~72%** | ~181 runtime/lorem |

> **Cobertura de UX copy real ≈ 95%** — excluindo os ~181 nodes de dados em runtime (valores financeiros, nomes de usuário, datas, marcas, labels de eixo de gráfico) e lorem ipsum.

---

## Estrutura de Grupos (Screens)

| Grupo | Descrição | Qtd. tokens |
|-------|-----------|-------------|
| `global/` | Ações, seções e labels reutilizáveis | 20 |
| `app/tabs/` | Labels do menu de navegação inferior | 10 |
| `home/` | Tela inicial — cliente, não-cliente, marketing | 25 |
| `simular/` | Fluxo de simulação de crédito | 10 |
| `auto/` | Tela Auto — veículos, crédito e ofertas | 27 |
| `imovel/` | Tela Imóvel — produtos e não-cliente | 14 |
| `salario/` | Tela Salário — conta, consignado, benefícios | 28 |
| `cartao/` | Tela Cartão — fatura, ações, empty state | 18 |
| `perfil/` | Tela Perfil — conta, seções, suporte | 40 |
| `score/` | Tela Score — pontuação, dicas, histórico | 33 |

---

## Tokens por Grupo

### 🌐 Global — Ações e Seções Compartilhadas

| Token | pt | en | mx |
|-------|----|----|-----|
| `global/action/ver_detalhes` | Ver detalhes | See details | Ver detalles |
| `global/action/mais_opcoes` | Mais opções | More options | Más opciones |
| `global/action/ver_todos` | Ver todos | See all | Ver todos |
| `global/action/ver_tudo` | Ver tudo | See all | Ver todo |
| `global/action/pagar` | Pagar | Pay | Pagar |
| `global/action/simular` | Simular | Simulate | Simular |
| `global/actions/rate_screen` | Avalie essa tela | Rate this screen | Califica esta pantalla |
| `global/actions/know_more` | Saiba mais | Learn more | Saber más |
| `global/actions/back` | Voltar | Back | Volver |
| `global/feedback/nos_ajude` | Nos ajude a construir uma experiência melhor | Help us build a better experience | Ayúdanos a construir una mejor experiencia |
| `global/section/produtos_contratados` | Produtos contratados e ativos | Active contracted products | Productos contratados y activos |
| `global/section/conheca_outros_produtos` | Conheça outros produtos | Discover other products | Descubre otros productos |
| `global/section/solucoes_para_voce` | Soluções para você | Solutions for you | Soluciones para ti |
| `global/section/solucoes_subtitle` | Produtos e serviços pensados no seu uso | Products and services designed for your use | Productos y servicios pensados para ti |
| `global/product/limite_disponivel` | Limite disponível | Available limit | Límite disponible |
| `global/product/limite_utilizado` | Limite utilizado | Used limit | Límite utilizado |
| `global/product/boleto_disponivel` | Boleto disponível | Bill available | Boleto disponible |
| `global/feedback/avalie_tela` | Avalie essa tela | Rate this screen | Califica esta pantalla |

---

### 📱 App Tabs — Menu de Navegação Inferior

> **Nota:** Existem dois conjuntos de labels de navegação. Os tokens `menu inferior/` refletem o conteúdo original extraído das telas; os tokens `app/tabs/[tela]/[tela]` são os tokens consolidados recomendados para uso nos componentes.

| Token | pt | en | mx |
|-------|----|----|-----|
| `app/tabs/inicio/inicio` | Início | Home | Inicio |
| `app/tabs/auto/auto` | Auto | Auto | Auto |
| `app/tabs/casas/casas` | Casas | Properties | Casas |
| `app/tabs/salario/salario` | Salário | Salary | Salario |
| `app/tabs/perfil/perfil` | Perfil | Profile | Perfil |
| `app/tabs/menu inferior/Início` | Início | Start | Início |
| `app/tabs/menu inferior/Carros` | Carros | Auto | Auto |
| `app/tabs/menu inferior/Casas` | Casas | Home | Casas |
| `app/tabs/menu inferior/Salário` | Salário | Salary | Salario |
| `app/tabs/menu inferior/Cartão` | Cartão | Card | Tarjeta |

---

### 🏠 Home — Tela Inicial

| Token | pt | en | mx |
|-------|----|----|-----|
| `home/section/my_products_title` | Meus produtos | My products | Mis productos |
| `home/quick_access/title` | Acesso rápido | Quick access | Acceso rápido |
| `home/quick_access/subtitle` | Navegue pelos principais produtos | Browse the main products | Navega por los principales productos |
| `home/quick_access/simulate_credit` | Simular crédito | Simulate credit | Simular crédito |
| `home/quick_access/fines_taxes` | Ver multas e IPVA | See fines and vehicle tax | Ver multas e impuestos |
| `home/quick_access/insurance` | Ver meu seguro | See my insurance | Ver mi seguro |
| `home/quick_access/credit_profile` | Meu perfil de crédito | My credit profile | Mi perfil de crédito |
| `home/product/due_date` | Vencimento em {date} | Due on {date} | Vencimiento el {date} |
| `home/product/current_installment` | Parcela atual | Current installment | Cuota actual |
| `home/header/loan_title` | Crédito em garantia | Secured credit | Crédito con garantía |
| `home/header/loan_description` | Você tem até R$ {credit_limit} disponíveis para serem pagos em até {max_installments}x de R$ {installment_value} | You have up to R$ {credit_limit} available, repayable in up to {max_installments}x of R$ {installment_value} | Tienes hasta R$ {credit_limit} disponibles para pagar en hasta {max_installments} cuotas de R$ {installment_value} |
| `home/header/view_offer_button` | Ver oferta | See offer | Ver oferta |
| `home/header/hide_notification` | Ocultar notificação | Hide notification | Ocultar notificación |
| `home/not_client/simulation_title` | Faça sua simulação | Simulate your loan | Simula tu préstamo |
| `home/not_client/simulation_min_value` | Mínimo de R$ 5.000,00 | Minimum of R$ 5,000.00 | Mínimo de R$ 5,000.00 |
| `home/not_client/vehicle_message` | Insira as informações do seu veículo para obter benefícios e aumentar seu score de crédito | Enter your vehicle information to get benefits and improve your credit score | Ingresa los datos de tu vehículo para obtener beneficios y mejorar tu puntaje crediticio |
| `home/not_client/vehicle_cta` | Inserir dados do veículo | Add vehicle data | Agregar datos del vehículo |
| `home/success_stories/title` | Histórias de sucesso | Success stories | Historias de éxito |
| `home/success_stories/subtitle` | Como a Creditas impulsiona a vida das pessoas | How Creditas drives people's lives forward | Cómo Creditas impulsa la vida de las personas |

---

### 🧮 Simular — Fluxo de Simulação

| Token | pt | en | mx |
|-------|----|----|-----|
| `simular/header/title` | Fazer simulação | Make a simulation | Hacer una simulación |
| `simular/header/simulation_title` | Faça sua simulação | Simulate your loan | Simula tu préstamo |
| `simular/header/subtitle` | A análise pode demorar até 72 horas | Analysis may take up to 72 hours | El análisis puede tardar hasta 72 horas |
| `simular/amount/question` | De quanto você precisa? | How much do you need? | ¿Cuánto necesitas? |
| `simular/amount/min_value` | Valor mínimo de R$ 3.000 | Minimum value of R$ 3,000 | Valor mínimo de R$ 3,000 |
| `simular/installments/question` | Escolha o número de parcelas | Choose the number of installments | Elige el número de cuotas |
| `simular/installments/warning` | O valor pode ser alterado após análise de crédito | The amount may change after credit analysis | El monto puede cambiar tras el análisis de crédito |
| `simular/result/title` | Você irá pagar | You will pay | Pagarás |
| `simular/result/interest_info` | Juros de {rate}% ao mês | {rate}% monthly interest | Intereses del {rate}% mensual |
| `simular/result/additional_info` | Nova parcela já somada à atual | New installment already added to the current one | Nueva cuota ya sumada a la actual |

---

### 🚗 Auto — Tela de Veículos

| Token | pt | en | mx |
|-------|----|----|-----|
| `auto/header/my_vehicles` | Meus veículos | My vehicles | Mis vehículos |
| `auto/actions/add_car` | Adicionar carro | Add car | Agregar auto |
| `auto/actions/simulate_credit` | Simular crédito | Simulate credit | Simular crédito |
| `auto/actions/fines_taxes` | Ver multas e IPVA | See fines and vehicle tax | Ver multas e impuestos |
| `auto/loans/title` | Meus empréstimos | My loans | Mis préstamos |
| `auto/loans/due_date` | Vencimento em {date} | Due on {date} | Vencimiento el {date} |
| `auto/credit/title` | Crédito disponível | Available credit | Crédito disponible |
| `auto/credit/value_label` | Valor do crédito | Credit value | Valor del crédito |
| `auto/credit/payment_terms_label` | Para pagar em {installments}x de | To pay in {installments} installments of | Para pagar en {installments} cuotas de |
| `auto/credit/interest_rate` | com juros de {rate}% ao mês | with {rate}% monthly interest | con intereses del {rate}% mensual |
| `auto/credit/validity` | Válida até dia {date} | Valid until {date} | Válida hasta el {date} |
| `auto/credit/edit_offer` | Editar oferta | Edit offer | Editar oferta |
| `auto/credit/car_pay_off` | Quitaremos seu carro | We will pay off your car | Liquidaremos tu auto |
| `auto/credit/cash_in_account` | Valor que cai na sua conta | Amount deposited in your account | Monto que llega a tu cuenta |
| `auto/credit/guarantee` | Garantia: | Guarantee: | Garantía: |
| `auto/credit/disclaimer` | * Essa oferta pode ser alterada ou encerrada após nossa análise interna. | * This offer may be changed or cancelled after our internal review. | * Esta oferta puede modificarse o cancelarse tras nuestro análisis interno. |
| `auto/not_client/detran_message` | Veja seus débitos em aberto com o Detran | See your open vehicle debts | Ve tus deudas pendientes |
| `auto/not_client/plate_cta` | Inserir placa | Add license plate | Agregar placa |
| `auto/not_client/shortcut_trade_sell` | Troca ou venda | Trade or sell | Intercambio o venta |
| `auto/not_client/shortcut_buy` | Compra | Buy | Compra |
| `auto/special_offers/title` | Ofertas especiais | Special offers | Ofertas especiales |

---

### 🏡 Imóvel — Tela de Imóveis

| Token | pt | en | mx |
|-------|----|----|-----|
| `imovel/header/my_properties` | Meus imóveis | My properties | Mis inmuebles |
| `imovel/actions/advance_rent` | Antecipar aluguel | Advance rent payment | Anticipar alquiler |
| `imovel/actions/home_insurance` | Seguro casa | Home insurance | Seguro de casa |
| `imovel/actions/pay_debts` | Quitar dívidas | Pay off debts | Liquidar deudas |
| `imovel/actions/deposit_insurance` | Seguro calção | Deposit insurance | Seguro de depósito |
| `imovel/products/home_insurance` | Seguro residencial | Home insurance | Seguro residencial |
| `imovel/products/renovation` | Financiamento de reforma | Renovation financing | Financiamiento de remodelación |
| `imovel/products/advance_sale` | Venda antecipada | Advance sale | Venta anticipada |
| `imovel/info/connect_projects` | Saiba mais o que podemos fazer para conectar você com seus projetos. | Learn more about what we can do to connect you with your projects. | Conoce más sobre lo que podemos hacer para conectarte con tus proyectos. |
| `imovel/not_client/message` | Insira as informações do seu imóvel | Enter your property information | Ingresa los datos de tu inmueble |

---

### 💰 Salário — Tela de Conta e Consignado

| Token | pt | en | mx |
|-------|----|----|-----|
| `salario/header/title` | Salário | Salary | Salario |
| `salario/header/my_balance` | Meu saldo | My balance | Mi saldo |
| `salario/header/balance_value` | R$ {balance} | $ {balance} | $ {balance} |
| `salario/actions/transfer` | Transferir | Transfer | Transferir |
| `salario/actions/pay` | Pagar | Pay | Pagar |
| `salario/actions/pix` | Pix | Pix | Pix |
| `salario/actions/recharge` | Recarga | Recharge | Recarga |
| `salario/consignado/title` | Crédito consignado | Payroll loan | Crédito nómina |
| `salario/consignado/available` | Disponível para contratar | Available to hire | Disponible para contratar |
| `salario/consignado/simulate` | Simular empréstimo | Simulate loan | Simular préstamo |
| `salario/consignado/credit_value` | Até R$ {credit_limit} | Up to $ {credit_limit} | Hasta $ {credit_limit} |
| `salario/consignado/rate` | A partir de {rate}% ao mês | Starting at {rate}% per month | Desde {rate}% mensual |
| `salario/benefits/title` | Benefícios | Benefits | Beneficios |
| `salario/benefits/vale_refeicao` | Vale refeição | Meal voucher | Vale de comida |
| `salario/benefits/vale_transporte` | Vale transporte | Transportation voucher | Vale de transporte |
| `salario/statement/title` | Extrato | Statement | Estado de cuenta |
| `salario/statement/income` | Receitas | Income | Ingresos |
| `salario/statement/expenses` | Despesas | Expenses | Gastos |
| `salario/not_client/title` | Receba seu salário na Creditas | Receive your salary at Creditas | Recibe tu salario en Creditas |
| `salario/not_client/description` | Abra sua conta e aproveite benefícios exclusivos para quem recebe salário aqui. | Open your account and enjoy exclusive benefits for those who receive their salary here. | Abre tu cuenta y disfruta de beneficios exclusivos para quienes reciben su salario aquí. |
| `salario/not_client/cta` | Abrir conta | Open account | Abrir cuenta |

---

### 💳 Cartão — Tela de Cartão de Crédito

| Token | pt | en | mx |
|-------|----|----|-----|
| `cartao/header/title` | Cartão | Card | Tarjeta |
| `cartao/header/limit` | Limite disponível | Available limit | Límite disponible |
| `cartao/header/limit_value` | R$ {credit_limit} | $ {credit_limit} | $ {credit_limit} |
| `cartao/bill/current` | Fatura atual | Current bill | Factura actual |
| `cartao/bill/due_date` | Vence em {date} | Due on {date} | Vence el {date} |
| `cartao/bill/pay` | Pagar fatura | Pay bill | Pagar factura |
| `cartao/bill/minimum` | Pagamento mínimo | Minimum payment | Pago mínimo |
| `cartao/actions/block` | Bloquear cartão | Block card | Bloquear tarjeta |
| `cartao/actions/virtual_card` | Cartão virtual | Virtual card | Tarjeta virtual |
| `cartao/benefits/cashback_title` | Cashback | Cashback | Cashback |
| `cartao/benefits/cashback_value` | {cashback_percent}% de volta nas compras | {cashback_percent}% back on purchases | {cashback_percent}% de vuelta en compras |
| `cartao/benefits/no_annual_fee` | Sem anuidade | No annual fee | Sin cuota anual |
| `cartao/not_client/title` | Peça seu cartão Creditas | Apply for your Creditas card | Solicita tu tarjeta Creditas |
| `cartao/not_client/description` | Sem anuidade e com cashback em todas as compras. | No annual fee and cashback on every purchase. | Sin cuota anual y cashback en todas tus compras. |
| `cartao/not_client/cta` | Pedir cartão | Apply for card | Solicitar tarjeta |

---

### 👤 Perfil — Tela de Conta do Usuário

| Token | pt | en | mx |
|-------|----|----|-----|
| `perfil/header/greeting` | Olá, {user_name} | Hello, {user_name} | Hola, {user_name} |
| `perfil/header/level` | Nível {level} | Level {level} | Nivel {level} |
| `perfil/header/points` | {points} pontos | {points} points | {points} puntos |
| `perfil/account/title` | Minha conta | My account | Mi cuenta |
| `perfil/account/personal_data` | Dados pessoais | Personal data | Datos personales |
| `perfil/account/documents` | Documentos | Documents | Documentos |
| `perfil/account/address` | Endereço | Address | Dirección |
| `perfil/account/income` | Renda | Income | Ingresos |
| `perfil/account/employment` | Vínculo empregatício | Employment status | Vínculo laboral |
| `perfil/security/title` | Segurança | Security | Seguridad |
| `perfil/security/password` | Alterar senha | Change password | Cambiar contraseña |
| `perfil/security/biometrics` | Biometria | Biometrics | Biometría |
| `perfil/security/two_factor` | Autenticação em dois fatores | Two-factor authentication | Autenticación en dos factores |
| `perfil/notifications/title` | Notificações | Notifications | Notificaciones |
| `perfil/notifications/push` | Notificações push | Push notifications | Notificaciones push |
| `perfil/notifications/email` | E-mail | Email | Correo electrónico |
| `perfil/notifications/sms` | SMS | SMS | SMS |
| `perfil/support/help` | Ajuda e suporte | Help & support | Ayuda y soporte |
| `perfil/support/terms` | Termos e política de privacidade | Terms and privacy policy | Términos y política de privacidad |
| `perfil/support/logout` | Sair da conta | Log out | Cerrar sesión |

---

### 📊 Score — Tela de Score de Crédito

| Token | pt | en | mx |
|-------|----|----|-----|
| `score/header/title` | Score | Score | Score |
| `score/header/your_score` | Seu score | Your score | Tu score |
| `score/header/score_value` | {score_value} pontos | {score_value} points | {score_value} puntos |
| `score/header/updated` | Atualizado em {date} | Updated on {date} | Actualizado el {date} |
| `score/range/very_low` | Muito baixo | Very low | Muy bajo |
| `score/range/low` | Baixo | Low | Bajo |
| `score/range/fair` | Regular | Fair | Regular |
| `score/range/good` | Bom | Good | Bueno |
| `score/range/excellent` | Excelente | Excellent | Excelente |
| `score/tips/title` | Como melhorar seu score | How to improve your score | Cómo mejorar tu score |
| `score/history/title` | Histórico | History | Historial |
| `score/not_client/title` | Consulte seu score de crédito | Check your credit score | Consulta tu score de crédito |
| `score/not_client/description` | Monitore sua saúde financeira e receba dicas personalizadas. | Monitor your financial health and receive personalized tips. | Monitorea tu salud financiera y recibe consejos personalizados. |

---

## Placeholders Dinâmicos Utilizados

| Placeholder | Descrição | Exemplo de uso |
|-------------|-----------|----------------|
| `{user_name}` | Nome do usuário | `perfil/header/greeting` |
| `{credit_limit}` | Valor do crédito disponível | `home/header/loan_description` |
| `{date}` | Data de vencimento ou atualização | `home/product/due_date` |
| `{rate}` | Taxa de juros mensal | `auto/credit/interest_rate` |
| `{installments}` | Número de parcelas | `auto/credit/payment_terms_label` |
| `{installment_value}` | Valor de cada parcela | `home/header/loan_description` |
| `{max_installments}` | Número máximo de parcelas | `home/header/loan_description` |
| `{balance}` | Saldo em conta | `salario/header/balance_value` |
| `{cashback_percent}` | Percentual de cashback | `cartao/benefits/cashback_value` |
| `{score_value}` | Valor numérico do score | `score/header/score_value` |
| `{level}` | Nível do usuário | `perfil/header/level` |
| `{points}` | Pontos acumulados | `perfil/header/points` |

---

## Observações e Próximos Passos

### Duplicatas a resolver
Os seguintes tokens têm conteúdo redundante e devem ser consolidados em uma revisão futura:
- `global/action/mais_opcoes` ↔ `global/actions/more_options` — mesmo conteúdo
- `global/action/ver_detalhes` ↔ `global/actions/see_details` — mesmo conteúdo
- `global/action/simular` ↔ `global/actions/simulate` — mesmo conteúdo
- `global/feedback/avalie_tela` ↔ `global/actions/rate_screen` — mesmo conteúdo
- `app/tabs/[tela]/[tela]` ↔ `app/tabs/menu inferior/[Label]` — dois conjuntos de nav labels

### Recomendação de convenção
Adotar o padrão `global/action/[verb]` (singular, sem `s`) e remover os tokens `global/actions/` duplicados na próxima sprint de limpeza.

### Tokens de `app/tabs/menu inferior/`
Os valores em inglês neste grupo usam a tradução literal da tela extraída (ex: `Casas` → `"Home"`, `Carros` → `"Auto"`). Revisar se essas traduções devem ser padronizadas com os tokens `app/tabs/[tela]/[tela]`.
