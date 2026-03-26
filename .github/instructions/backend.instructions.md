---
applyTo: "src/api/**/*.cs, src/api/**/*.csproj"
---

# Regras para backend .NET

## Arquitetura
- Manter separação clara entre API, aplicação, domínio e infraestrutura.
- Reutilizar padrões existentes antes de criar novas abstrações.
- Não expor entidades de domínio diretamente nos endpoints.
- Usar DTOs explícitos para request e response.
- Não misturar regra de negócio com controller, endpoint ou camada de transporte.
- Evitar acoplamento desnecessário entre camadas.

## Implementação
- Validar toda entrada antes de executar regra de negócio.
- Padronizar respostas e tratamento de erros.
- Preservar contratos públicos já existentes, salvo quando a mudança for intencional e explicitamente sinalizada.
- Ao criar endpoints, considerar paginação, filtros, ordenação e versionamento quando fizer sentido.
- Preferir nomes claros, orientados ao domínio.
- Reaproveitar serviços, handlers e validators já existentes sempre que possível.

## Integração
- Garantir compatibilidade com o frontend Next.js.
- Criar modelos de request e response consistentes, previsíveis e fáceis de consumir.
- Sinalizar incompatibilidades entre backend e frontend antes de implementar mudanças que quebrem integração.
- Evitar respostas ambíguas ou excessivamente acopladas à estrutura interna da aplicação.

## Qualidade
- Fazer mudanças pequenas, coesas e fáceis de revisar.
- Priorizar legibilidade e manutenção.
- Preservar comportamento existente em refatorações.
- Priorizar testes unitários para regras de negócio.
- Priorizar testes de integração para endpoints e fluxos HTTP.
- Garantir compatibilidade com build, testes e contratos atuais do projeto.

## Fluxo de implementação
- Antes de editar múltiplos arquivos, apresentar um plano curto.
- Ao criar uma nova funcionalidade, considerar:
  - request DTO
  - response DTO
  - validação
  - serviço, handler ou caso de uso
  - endpoint ou controller
  - tratamento de erros
  - testes relevantes
- Ao final, resumir:
  - o que foi alterado
  - arquivos impactados
  - riscos técnicos
  - impactos em contrato, autenticação ou persistência
  - testes recomendados