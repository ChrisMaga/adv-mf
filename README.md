# Advocacia Site — Next.js + TypeScript

Site institucional para escritório de advocacia com páginas de Direito Previdenciário e Trabalhista.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS-in-JS com CSS Variables (sem dependências extras)
- **Fontes:** Raleway (Google Fonts) + Helvetica Neue (sistema)

## Paleta de Cores

| Variável               | Hex       | Uso                      |
|------------------------|-----------|--------------------------|
| `--color-deepnavy`     | `#071720` | Background principal     |
| `--color-navy`         | `#0C3546` | Sections secundárias     |
| `--color-slate`        | `#A3AAB5` | Texto secundário, ícones |
| `--color-light`        | `#EFEFEF` | Texto principal          |
| `--color-whatsapp`     | `#2EB760` | Botões WhatsApp apenas   |

## Tipografia

- **Títulos:** Raleway (Google Fonts)
- **Corpo:** Helvetica Neue / Helvetica / Arial

## Páginas

- `/` — Home (Hero, Especialidades, Diferenciais, Por que nos escolher, Contato)
- `/previdenciario` — Direito Previdenciário (6 serviços + etapas + CTA)
- `/trabalhista` — Direito Trabalhista (6 serviços + alertas + CTA)

## Componentes

```
src/components/
├── Navbar.tsx          # Navegação fixa com scroll effect + menu mobile
├── Footer.tsx          # Rodapé com links e informações
├── Hero.tsx            # Seção principal da home
├── Especialidades.tsx  # Cards das 3 áreas de atuação
├── Diferenciais.tsx    # Grid de diferenciais do escritório
├── PorQueEscolher.tsx  # Lista de razões com layout sticky
├── Contato.tsx         # Formulário + informações de contato
└── WhatsAppFloat.tsx   # Botão flutuante do WhatsApp
```

## Como iniciar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

## Personalização

### Número do WhatsApp
Substitua `5511999999999` pelo número real em todos os componentes. Use o formato: `55` + DDD + número.

### Informações do escritório
- `src/components/Contato.tsx` — endereço, email, telefone, horário
- `src/components/Footer.tsx` — dados e OAB
- `src/components/Navbar.tsx` — nome do escritório / logo

### Logo
Para adicionar logo real, substitua o texto `ADVOCACIA` no Navbar por uma tag `<Image>` do Next.js.

## Deploy

Compatível com Vercel (recomendado), Netlify, e qualquer hospedagem Node.js.

```bash
npm run build
```
