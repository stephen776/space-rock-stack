import type {InputHTMLAttributes} from 'react';
import {forwardRef} from 'react';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {ComponentColor, ComponentSize} from './types';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> & {
  label?: string;
  error?: string;
  withAsterisk?: boolean;
  size?: ComponentSize;
  color?: ComponentColor;
  bordered?: boolean;
  borderOffset?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordered = true,
      borderOffset,
      className,
      color,
      error,
      name,
      label,
      placeholder,
      size,
      type,
      value,
      withAsterisk,
      ...props
    },
    ref,
  ) => (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label">
          <span className="label-text">
            {label} {withAsterisk && <span className="text-error">*</span>}
          </span>
        </label>
      )}
      <input
        {...props}
        ref={ref}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={twMerge(
          'input',
          className,
          clsx({
            'input-xs': size === 'xs',
            'input-sm': size === 'sm',
            'input-md': size === 'md',
            'input-lg': size === 'lg',
            'input-primary': color === 'primary',
            'input-secondary': color === 'secondary',
            'input-accent': color === 'accent',
            'input-info': color === 'info',
            'input-success': color === 'success',
            'input-warning': color === 'warning',
            'input-error': color === 'error' || error,
            'input-ghost': color === 'ghost',
            'focus:outline-offset-0': !borderOffset,
            'input-bordered': bordered,
          }),
        )}
      />
      <label className="label">
        <span className="label-text-alt text-error">{error}</span>
      </label>
    </div>
  ),
);

Input.displayName = 'Input';

export default Input;
