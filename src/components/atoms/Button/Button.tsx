import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

/* ─── Types ─────────────────────────────────────────────────────────────────── */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Conteúdo do botão */
  children: ReactNode;
  /** Variante visual do botão */
  variant?: ButtonVariant;
  /** Tamanho do botão */
  size?: ButtonSize;
  /** Largura total do container */
  fullWidth?: boolean;
  /** Estado de carregamento */
  loading?: boolean;
  /** Ícone à esquerda do label */
  iconLeft?: ReactNode;
  /** Ícone à direita do label */
  iconRight?: ReactNode;
}

/* ─── Component ─────────────────────────────────────────────────────────────── */

/**
 * Botão principal do Design System MPRS.
 *
 * Suporta 5 variantes visuais, 3 tamanhos, ícones e estado de loading.
 *
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Confirmar
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  ...rest
}) => {
  const classNames = [
    'mprs-btn',
    `mprs-btn--${variant}`,
    `mprs-btn--${size}`,
    fullWidth ? 'mprs-btn--full' : '',
    loading ? 'mprs-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <span className="mprs-btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="12" cy="12" r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="50 14"
            />
          </svg>
        </span>
      )}

      {!loading && iconLeft && (
        <span className="mprs-btn__icon mprs-btn__icon--left">{iconLeft}</span>
      )}

      <span className="mprs-btn__label">{children}</span>

      {!loading && iconRight && (
        <span className="mprs-btn__icon mprs-btn__icon--right">{iconRight}</span>
      )}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
