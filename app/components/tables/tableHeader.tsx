import type {ReactElement, ThHTMLAttributes, HTMLAttributes} from 'react';
import {Link} from '@remix-run/react';
import {twMerge} from 'tailwind-merge';
import {IconSelector, IconChevronDown, IconChevronUp} from '@tabler/icons';

export type HeaderRowProps = Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'> & {
  children: ReactElement<HeaderColProps>[] | ReactElement<HeaderColProps>;
};

export type HeaderColProps = ThHTMLAttributes<HTMLTableCellElement> & {
  sortBy: string;
  sortDirection?: 'asc' | 'desc' | null;
  sorted: boolean;
};

function HeaderCol({children, className, sortBy, sortDirection, sorted, ...props}: HeaderColProps) {
  const nextSort = sortDirection === 'asc' ? 'desc' : 'asc';
  const Icon = sorted ? (sortDirection === 'asc' ? IconChevronUp : IconChevronDown) : IconSelector;

  return (
    <th {...props} className={twMerge('hover:bg-gray-00 py-4 px-6 text-gray-400', className)}>
      <Link to={`?sortBy=${sortBy}&sortDirection=${nextSort}`}>
        <div className="flex w-full items-center justify-between">
          <span>
            <b>{children}</b>
          </span>
          <div>
            <Icon size={14} stroke={1.5} />
          </div>
        </div>
      </Link>
    </th>
  );
}

function TableHeader({children, className, ...props}: HeaderRowProps) {
  return (
    <thead {...props} className={twMerge('hidden uppercase md:table-header-group', className)}>
      <tr>{children}</tr>
    </thead>
  );
}

export default Object.assign(TableHeader, {HeaderCol});
