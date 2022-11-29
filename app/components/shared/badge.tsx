import {twMerge} from 'tailwind-merge';
import {clsx} from 'clsx';

import type {ComponentSize, ComponentColor} from './types';

interface Props {
  text: string;
  className?: string;
  size?: ComponentSize;
  color?: ComponentColor;
}

export default function Badge({className, color = 'primary', size = 'lg', text}: Props) {
  return (
    <span
      className={twMerge(
        'badge-outline badge',
        className,
        clsx({
          'badge-primary': color === 'primary',
          'badge-secondary': color === 'secondary',
          'badge-accent': color === 'accent',
          'badge-info': color === 'info',
          'badge-success': color === 'success',
          'badge-warning': color === 'warning',
          'badge-error': color === 'error',
          'badge-xs': size === 'xs',
          'badge-sm': size === 'sm',
          'badge-md': size === 'md',
          'badge-lg': size === 'lg',
        }),
      )}
    >
      {text}
    </span>
  );
}
