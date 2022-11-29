import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {ComponentColor, ComponentShape, ComponentSize} from './types';

type ButtonVariant = 'outline' | 'link';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  to?: string;
  variant?: ButtonVariant;
  shape?: ComponentShape;
  size?: ComponentSize;
  color?: ComponentColor;
  fullWidth?: boolean;
  responsive?: boolean;
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      to,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      loading,
      active,
      disabled,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const classes = twMerge(
      'btn',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        'btn-circle': shape === 'circle',
        'btn-square': shape === 'square',
        'btn-outline': variant === 'outline',
        'btn-link': variant === 'link',
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',
        'btn-ghost': color === 'ghost',
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-md': size === 'md',
        'btn-lg': size === 'lg',
        'btn-block': fullWidth,
        'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
        'btn-active': active,
        'btn-disabled': disabled,
        loading,
      }),
    );

    if (to) {
      return (
        <Link className={classes} style={style} to={to}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </Link>
      );
    }

    return (
      <button {...props} ref={ref} className={classes} style={style} disabled={disabled}>
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
