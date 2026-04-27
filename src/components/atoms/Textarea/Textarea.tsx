import React, { forwardRef, useId } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import './Textarea.css';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  size?: TextareaSize;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      size = 'md',
      fullWidth = false,
      resize = 'vertical',
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
      'mprs-textarea-wrapper',
      fullWidth ? 'mprs-textarea-wrapper--full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const fieldClasses = [
      'mprs-textarea__field',
      `mprs-textarea__field--${size}`,
      hasError ? 'mprs-textarea__field--error' : '',
      disabled ? 'mprs-textarea__field--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="mprs-textarea__label">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={inputId}
          className={fieldClasses}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={
            errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          style={{ resize }}
          {...rest}
        />

        {errorMessage && (
          <span id={`${inputId}-error`} className="mprs-textarea__message mprs-textarea__message--error" role="alert">
            {errorMessage}
          </span>
        )}

        {!errorMessage && helperText && (
          <span id={`${inputId}-helper`} className="mprs-textarea__message mprs-textarea__message--helper">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
export default Textarea;
