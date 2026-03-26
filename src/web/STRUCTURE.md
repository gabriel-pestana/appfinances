# AppFinance - Frontend

Frontend Next.js com App Router para aplicação de gestão financeira.

## Estrutura do Projeto

```
src/web/
├── app/              # Rotas e páginas (Next.js App Router)
│   ├── layout.tsx    # Layout raiz
│   ├── page.tsx      # Página inicial
│   └── globals.css   # Estilos globais
├── components/       # Componentes reutilizáveis
├── services/         # Integrações com API
│   └── api.ts        # Cliente HTTP para a API .NET
├── hooks/            # Custom React hooks
│   └── useApi.ts     # Hook para chamadas de API
├── types/            # Tipos TypeScript reutilizáveis
│   └── index.ts      # Tipos principais
└── public/           # Assets estáticos
```

## Padrões e Convenções

### Server vs Client Components
- **Server Components** (padrão): Use para renderização inicial e leitura de dados
- **Client Components** (`"use client"`): Use apenas para interatividade, estado local ou eventos

### Integração com API
- Todas as chamadas HTTP centralizadas em `services/api.ts`
- Use tipos em `types/index.ts` para payloads e respostas
- Tratamento de `loading`, `error` e `empty state` obrigatório

### Organização de Tipos
- Tipos reutilizáveis em `types/index.ts`
- Tipos específicos de features em arquivos de features
- Sempre usar TypeScript implícito, evitar `any`

### Componentes
- Máximo de uma responsabilidade por componente
- Nomes claros e orientados ao domínio
- Props tipadas explicitamente
- Acessibilidade básica sempre

## Desenvolvimento

### Instalação
```bash
cd src/web
pnpm install
```

### Executar
```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build
```bash
pnpm build
pnpm start
```

### Lint
```bash
pnpm lint
```

## Variáveis de Ambiente

Configure em `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5039
```

## Tecnologias

- **Next.js 16.2.1** - Framework React com App Router
- **React 19.2.4** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Utilitários de estilo
- **pnpm** - Gerenciador de pacotes

## Referências de Padrões

Ver instruções detalhadas em:
- `.github/instructions/nextjs.instructions.md`
- `.github/agents/nextjs-ui.agent.md`
