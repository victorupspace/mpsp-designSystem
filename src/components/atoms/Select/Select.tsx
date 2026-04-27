import React, { forwardRef, useId } from 'react';
import type { SelectHTMLAttributes } from 'react';
import './Select.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  size?: SelectSize;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      size = 'md',
      options,
      placeholder,
      fullWidth = false,
      disabled = false,
      id,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasError = Boolean(errorMessage);

    const wrapperClasses = [
      'mprs-select-wrapper',
      fullWidth ? 'mprs-select-wrapper--full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const fieldClasses = [
      'mprs-select__field',
      `mprs-select__field--${size}`,
      hasError ? 'mprs-select__field--error' : '',
      disabled ? 'mprs-select__field--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="mprs-select__label">
            {label}
          </label>
        )}

        <div className="mprs-select__container">
          <select
            ref={ref}
            id={inputId}
            className={fieldClasses}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <span className="mprs-select__chevron" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {errorMessage && (
          <span id={`${inputId}-error`} className="mprs-select__message mprs-select__message--error" role="alert">
            {errorMessage}
          </span>
        )}

        {!errorMessage && helperText && (
          <span id={`${inputId}-helper`} className="mprs-select__message mprs-select__message--helper">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';
export default Select;
