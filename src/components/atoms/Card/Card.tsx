import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  children: ReactNode;
}

export const Card = ({
  icon,
  children,
  className = '',
  type = 'button',
  ...rest
}: CardProps) => {
  const classNames = ['mprs-card', className].filter(Boolean).join(' ');

  return (
    <button className={classNames} type={type} {...rest}>
      <span className="mprs-card__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="mprs-card__label">{children}</span>
    </button>
  );
};

Card.displayName = 'Card';
export default Card;
