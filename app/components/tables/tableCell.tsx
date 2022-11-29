import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

export interface TableCellProps {
  colSpan?: number;
  className?: string;
  dataLabel?: string;
  children: ReactNode;
}

export default function TableCell({className, children, dataLabel, ...props}: TableCellProps) {
  return (
    <td
      {...props}
      data-label={dataLabel}
      className={twMerge(
        'py-4 px-6 sm:py-6 ',
        'border-b-0 sm:border-b',
        'before:block before:font-bold before:text-gray-400 before:content-[attr(data-label)] first:before:hidden sm:before:hidden',
        'flex-1 basis-1/2',
        'first:basis-full first:font-bold  sm:first:font-normal',
        className,
      )}
    >
      {children}
    </td>
  );
}
