---
applyTo: "src/web/**/*.ts, src/web/**/*.tsx"
---

# Regras para frontend Next.js

## Arquitetura
- Usar Next.js com App Router como padrão.
- Respeitar a organização baseada em `app/`, `layout.tsx`, `page.tsx`, `loading.tsx` e `error.tsx` quando aplicável.
- Antes de criar novos arquivos ou abstrações, verificar se já existe padrão semelhante no projeto.
- Priorizar organização por responsabilidade:
  - rotas e páginas em `app/`
  - componentes reutilizáveis em `components/`
  - integrações e utilitários em `lib/` ou `services/`
  - hooks em `hooks/`
  - tipos em `types/`

## Componentes e renderização
- Avaliar sempre se a solução deve ser Server Component ou Client Component.
- Usar `"use client"` apenas quando necessário.
- Preferir Server Components para leitura de dados e renderização inicial quando fizer sentido.
- Usar Client Components apenas para interatividade, estado local, eventos do navegador ou hooks de cliente.
- Evitar componentes grandes e com múltiplas responsabilidades.
- Priorizar composição e reuso.

## Tipagem e integração
- Usar TypeScript explícito.
- Evitar `any`.
- Criar tipos claros para request, response, filtros, paginação e modelos de exibição.
- Respeitar os contratos existentes da API .NET.
- Sinalizar incompatibilidades entre frontend e backend antes de implementar adaptações locais.
- Não duplicar tipos já existentes sem necessidade.

## Consumo de dados
- Separar lógica de integração da camada visual.
- Centralizar chamadas HTTP em `lib/` ou `services/`, conforme padrão do projeto.
- Evitar misturar fetch, transformação de dados e markup no mesmo componente quando isso reduzir clareza.
- Ao criar fluxo que consome dados, tratar obrigatoriamente:
  - loading state
  - error state
  - empty state
- Ao implementar listas, considerar paginação, filtros e ordenação quando o caso de uso exigir.

## UX e qualidade
- Priorizar acessibilidade básica, clareza visual e legibilidade.
- Usar nomes claros e orientados ao domínio.
- Preservar consistência entre telas, componentes e padrões de navegação.
- Não colocar regra de negócio pesada em componentes visuais.
- Em formulários, manter validação previsível e mensagens claras.

## Fluxo de implementação
- Antes de editar múltiplos arquivos, apresentar um plano curto.
- Fazer mudanças pequenas, coesas e fáceis de revisar.
- Ao criar uma nova funcionalidade, pensar no fluxo completo:
  - rota/página
  - componentes
  - tipos
  - integração com API
  - tratamento de estados
- Ao final, resumir:
  - o que foi alterado
  - arquivos impactados
  - riscos ou pendências
  - testes recomendados

## Qualidade final
- Garantir compatibilidade com build e tipagem.
- Preservar comportamento existente em refatorações.
- Reutilizar padrões existentes antes de criar novas abordagens.