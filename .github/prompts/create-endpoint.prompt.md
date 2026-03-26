---
name: create-endpoint
description: Cria ou evolui um endpoint completo em .NET API
agent: DotNet API
---

Crie uma funcionalidade no backend para ${input:feature:exemplo "listar clientes com paginação"}.

Siga este fluxo:
1. Analise os padrões atuais do projeto.
2. Retorne um plano curto antes de editar múltiplos arquivos.
3. Implemente a solução completa considerando:
   - request DTO
   - response DTO
   - validação
   - serviço, handler ou caso de uso
   - endpoint ou controller
   - tratamento de erros
   - testes relevantes
4. Preserve os contratos existentes, salvo se a mudança for intencional e devidamente sinalizada.
5. Ao final, informe:
   - o que foi alterado
   - arquivos impactados
   - riscos técnicos
   - impactos em autenticação, banco ou integração
   - testes recomendados