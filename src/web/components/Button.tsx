/**
 * Exemplo de componente reutilizável
 * 
 * Padrão a seguir:
 * - Componentes visuais em Client Components apenas quando necessário
 * - Props sempre tipadas
 * - Nomes claros e descritivos
 * - Uma responsabilidade por componente
 */

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded font-medium transition-colors duration-200";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
