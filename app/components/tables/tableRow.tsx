import type {ReactElement} from 'react';
import {twMerge} from 'tailwind-merge';

import type {TableCellProps} from './tableCell';
import {default as TableCell} from './tableCell';

export interface TableRowProps {
  children?: ReactElement<TableCellProps>[] | ReactElement<TableCellProps>;
  className?: string;
  onClick?: () => void;
}

function TableRow({children, className, onClick}: TableRowProps) {
  return (
    <tr
      className={twMerge(
        'hover flex flex-wrap rounded sm:table-row',
        'mb-4 sm:mb-0',
        'border shadow sm:border-none sm:shadow-none',
        className,
      )}
      onClick={() => onClick && onClick()}
    >
      {children}
    </tr>
  );
}

export default Object.assign(TableRow, {TableCell});
