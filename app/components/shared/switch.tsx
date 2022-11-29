import type {InputHTMLAttributes} from 'react';
import {forwardRef} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {ComponentBrandColors, ComponentSize} from './types';

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: string;
  error?: string;
  withAsterisk?: boolean;
  color?: ComponentBrandColors;
  size?: ComponentSize;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({className, color, label, name, error, size, withAsterisk, ...props}, ref): JSX.Element => {
    const classes = twMerge(
      'toggle',
      className,
      clsx({
        'toggle-xs': size === 'xs',
        'toggle-sm': size === 'sm',
        'toggle-md': size === 'md',
        'toggle-lg': size === 'lg',
        'toggle-primary': color === 'primary',
        'toggle-secondary': color === 'secondary',
        'toggle-accent': color === 'accent',
      }),
    );

    return (
      <div className="form-control py-2">
        <label htmlFor={name} className="label cursor-pointer justify-start font-bold">
          <span className="label-text">
            {label} {withAsterisk && <span className="pr-4 text-error">*</span>}
          </span>
          <input {...props} ref={ref} name={name} type="checkbox" className={classes} />
        </label>
        {error && (
          <label className="label">
            <span className="label-text-alt text-error">{error}</span>
          </label>
        )}
      </div>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
