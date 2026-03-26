---
applyTo: "**"
---

# Regras gerais do projeto

## Fluxo de trabalho
- Sempre proponha um plano curto antes de editar múltiplos arquivos.
- Faça mudanças pequenas, coesas e fáceis de revisar.
- Antes de alterar contratos públicos, explique impacto e riscos.
- Sempre verificar impacto em build, testes, tipagem e integração entre frontend e backend.
- Reutilize padrões existentes do projeto antes de criar novas abstrações.

## Backend .NET API
- Preferir separação clara entre API, aplicação, domínio e infraestrutura.
- Não expor entidades de domínio diretamente nos endpoints.
- Criar DTOs de request e response.
- Validar entrada antes de executar regra de negócio.
- Padronizar respostas e tratamento de erros.
- Priorizar testes unitários para regras de negócio e testes de integração para endpoints.
- Preservar autenticação, autorização e contratos já existentes.
- Ao criar endpoints, considerar paginação, filtros, ordenação e versionamento quando fizer sentido.

## Frontend Next.js
- Usar Next.js com App Router como padrão.
- Avaliar sempre se a solução deve ser Server Component ou Client Component.
- Usar `"use client"` apenas quando realmente necessário.
- Manter separação clara entre:
  - rotas e páginas em `app/`
  - componentes reutilizáveis em `components/`
  - integrações e utilitários em `lib/` ou `services/`
  - hooks em `hooks/`
  - tipos em `types/`
- Usar TypeScript explícito e evitar `any`.
- Tratar loading, error e empty state em páginas e componentes que consomem dados.
- Evitar lógica de negócio pesada dentro de componentes visuais.
- Priorizar acessibilidade, legibilidade e reuso.
- Respeitar os contratos da API .NET antes de criar adaptações no frontend.

## Integração entre frontend e backend
- Sempre alinhar request e response com contratos explícitos.
- Sinalizar incompatibilidades entre API e frontend antes de implementar workarounds.
- Preferir tipagem forte para payloads, filtros e modelos de exibição.
- Ao criar uma nova funcionalidade, pensar no fluxo completo:
  - contrato da API
  - implementação backend
  - consumo no frontend
  - tratamento de estados
  - testes relevantes

## Qualidade e manutenção
- Evitar acoplamento desnecessário entre camadas.
- Preferir nomes claros, orientados ao domínio.
- Não criar arquivos ou abstrações sem necessidade real.
- Quando fizer refatoração, preservar comportamento existente.
- Ao final de cada tarefa, resumir:
  - o que foi alterado
  - arquivos impactados
  - riscos ou pendências
  - testes recomendados

## Definition of Done
- Código consistente com os padrões existentes.
- Build sem erros.
- Tipagem sem erros.
- Testes relevantes criados ou ajustados.
- Mudança pronta para revisão, com resumo claro e impacto identificado.