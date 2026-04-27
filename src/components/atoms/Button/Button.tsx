import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

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
