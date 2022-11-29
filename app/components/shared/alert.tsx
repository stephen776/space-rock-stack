import type {HTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

import type {ComponentStatus} from './types';

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'color'> & {
  icon?: ReactNode;
  status?: ComponentStatus;
  title: string;
  children?: ReactNode;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({children, className, icon, status, title, ...props}, ref) => {
    const classes = twMerge(
      'alert',
      className,
      clsx({
        'btn-info': status === 'info',
        'btn-success': status === 'success',
        'btn-warning': status === 'warning',
        'btn-error': status === 'error',
      }),
    );

    return (
      <div role="alert" {...props} ref={ref} className={classes}>
        <div className="flex items-start pl-2">
          {icon && icon}
          <div className="flex flex-col font-bold">
            <b>{title}</b>
            {children && <div className="pt-2">{children}</div>}
          </div>
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export default Alert;
