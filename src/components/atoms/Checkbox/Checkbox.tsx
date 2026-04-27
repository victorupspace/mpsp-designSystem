import React, { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label: string;
  description?: string;
  size?: 'sm' | 'md';
  indeterminate?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  size = 'md',
  indeterminate = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div
      className={[
        'mprs-checkbox',
        `mprs-checkbox--${size}`,
        disabled ? 'mprs-checkbox--disabled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        ref={inputRef}
        type="checkbox"
        id={inputId}
        className="mprs-checkbox__input"
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={inputId} className="mprs-checkbox__label-wrapper">
        <span className="mprs-checkbox__box">
          <svg className="mprs-checkbox__check" viewBox="0 0 16 16" fill="none">
            <path
              d="M3.5 8.5L6.5 11.5L12.5 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg className="mprs-checkbox__indeterminate" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 8H12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="mprs-checkbox__content">
          <span className="mprs-checkbox__label">{label}</span>
          {description && <span className="mprs-checkbox__description">{description}</span>}
        </span>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
