import {twMerge} from 'tailwind-merge';
import {clsx} from 'clsx';

import type {ComponentSize} from './types';

interface Props {
  size?: ComponentSize;
}

export default function LoadingSpinner({size = 'md'}: Props) {
  return (
    <div>
      <div
        className={twMerge(
          'animate-spin rounded-full',
          'border-solid border-primary border-t-transparent',
          clsx(
            size === 'xs' && ['h-8 w-8 border-2'],
            size === 'sm' && ['h-12 w-12 border-2'],
            size === 'md' && ['h-20 w-20 border-4'],
            size === 'lg' && ['h-32 w-32 border-8'],
          ),
        )}
      ></div>
    </div>
  );
}
