import type {LabelHTMLAttributes} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {ComponentSize} from './types';

export type InputGroupProps = LabelHTMLAttributes<HTMLLabelElement> & {
  size?: ComponentSize;
  vertical?: boolean;
};

export default function InputGroup({children, size, vertical, className}: InputGroupProps) {
  return (
    <div
      className={twMerge(
        'input-group',
        className,
        clsx({
          'input-group-xs': size === 'xs',
          'input-group-sm': size === 'sm',
          'input-group-md': size === 'md',
          'input-group-lg': size === 'lg',
          'input-group-vertical': vertical,
        }),
      )}
    >
      {children}
    </div>
  );
}
