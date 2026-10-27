# Site Macedo Faria Advogados — macedofaria.com.br

Site institucional do escritório Macedo Faria Advogados (Santo André – SP). Site por CM Digital.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Estilo:** Tailwind CSS 4 (tema em `src/app/globals.css`)
- **Fontes:** Montserrat (títulos) + Poppins (texto), servidas pelo próprio site via `@fontsource`
- **Ícones:** lucide-react (marcas em `src/components/Icons.tsx`)
- **Formulário:** Resend (`src/app/api/contato/route.ts`), envia para contato@macedofaria.com.br

## Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Home |
| `/previdenciario` | Aposentadoria e INSS |
| `/trabalhista` | Direitos do trabalhador |
| `/isencoes-fiscais` | Isenções e direitos PcD, TEA e TDAH |
| `/privacidade` | Política de Privacidade (LGPD) |
| `/links` | Página de links da bio do Instagram (fora do Google) |

As páginas de área usam o modelo `src/components/AreaPage.tsx`. Telefones, e-mails, endereço e redes ficam em `src/lib/site.ts`.

## Variáveis de ambiente

| Variável | Para quê |
|----------|----------|
| `RESEND_API_KEY` | Envio do formulário de contato |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (ex.: `G-XXXXXXX`). Só carrega depois que a pessoa aceita os cookies. Opcional. |

## Identidade

| Token | Hex | Uso |
|-------|-----|-----|
| `noturno` | `#071720` | Fundo escuro principal |
| `petroleo` | `#0C3546` | Seções e cards escuros |
| `gelo` | `#EFEFEF` | Fundo claro / texto em fundo escuro |
| `prata` | `#A3AAB5` | Texto secundário |
| `ouro` | `#C9A45C` | Destaques e botões (em fundo escuro) |
| `ouro-escuro` | `#7A5C22` | Rótulos em fundo claro |

## Antes de publicar

- Preencher a data em `src/app/(site)/privacidade/page.tsx` (`ULTIMA_ATUALIZACAO`).
- Textos jurídicos revisados pelo Dr. Eduardo (regras da OAB e LGPD).

## Como iniciar

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção
npm start
```
