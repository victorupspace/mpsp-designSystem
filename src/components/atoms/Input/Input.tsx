import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  size?: InputSize;
  state?: InputState;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      size = 'md',
      state = 'default',
      iconLeft,
      iconRight,
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
    const computedState = errorMessage ? 'error' : state;

    const wrapperClasses = [
      'mprs-input-wrapper',
      fullWidth ? 'mprs-input-wrapper--full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const fieldClasses = [
      'mprs-input__field',
      `mprs-input__field--${size}`,
      `mprs-input__field--${computedState}`,
      iconLeft ? 'mprs-input__field--has-icon-left' : '',
      iconRight ? 'mprs-input__field--has-icon-right' : '',
      disabled ? 'mprs-input__field--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="mprs-input__label">
            {label}
          </label>
        )}

        <div className="mprs-input__container">
          {iconLeft && (
            <span className="mprs-input__icon mprs-input__icon--left">{iconLeft}</span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={fieldClasses}
            disabled={disabled}
            aria-invalid={computedState === 'error'}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...rest}
          />

          {iconRight && (
            <span className="mprs-input__icon mprs-input__icon--right">{iconRight}</span>
          )}
        </div>

        {errorMessage && (
          <span id={`${inputId}-error`} className="mprs-input__message mprs-input__message--error" role="alert">
            {errorMessage}
          </span>
        )}

        {!errorMessage && helperText && (
          <span id={`${inputId}-helper`} className="mprs-input__message mprs-input__message--helper">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
