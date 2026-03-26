/**
 * Tipos compartilhados e reutilizáveis
 */

/**
 * Resposta padrão da API .NET
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Erro da API
 */
export interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Resultado de operação com paginação
 */
export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Parâmetros de paginação
 */
export interface PaginationParams {
  pageNumber: number;
  pageSize: number;
}

/**
 * Parâmetros de filtro e ordenação
 */
export interface FilterParams {
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
