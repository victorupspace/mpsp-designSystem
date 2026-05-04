import type { HTMLAttributes, ReactNode } from 'react';
import './Tag.css';

export type TagVariant = 'black' | 'white' | 'brand';
export type TagSize = 'sm' | 'md';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
}

export const Tag = ({
  children,
  variant = 'black',
  size = 'md',
  className = '',
  ...rest
}: TagProps) => {
  const classNames = [
    'mprs-tag',
    `mprs-tag--${variant}`,
    `mprs-tag--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

Tag.displayName = 'Tag';
export default Tag;
