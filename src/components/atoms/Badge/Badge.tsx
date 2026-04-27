import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';

export type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  ...rest
}) => {
  const classNames = [
    'mprs-badge',
    `mprs-badge--${variant}`,
    `mprs-badge--${size}`,
    dot ? 'mprs-badge--dot' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...rest}>
      {dot && <span className="mprs-badge__dot" />}
      {!dot && children}
    </span>
  );
};

Badge.displayName = 'Badge';
export default Badge;
