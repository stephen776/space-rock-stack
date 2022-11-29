import type {HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export default function TableBody({children, className}: TableBodyProps) {
  return <tbody className={twMerge('flex-1 sm:flex-none', className)}>{children}</tbody>;
}
