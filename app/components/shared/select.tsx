import {forwardRef} from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {Label} from '@radix-ui/react-label';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {IconChevronDown, IconChevronUp, IconCheck} from '@tabler/icons';

import type {ComponentColor, ComponentSize} from './types';

interface SelectItem {
  value: string;
  label: string;
}

export type SelectProps = SelectPrimitive.SelectProps & {
  id?: string;
  name?: string;
  label?: string;
  error?: string;
  withAsterisk?: boolean;
  placeholder?: string;
  size?: ComponentSize;
  color?: ComponentColor;
  className?: string;
  bordered?: boolean;
  borderOffset?: boolean;
  data?: SelectItem[];
  onChange?: (value: string) => void;
};

export type SelectOptionProps = SelectPrimitive.SelectItemProps;

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      bordered = true,
      borderOffset,
      children,
      className,
      color,
      data,
      error,
      label,
      name,
      placeholder,
      size,
      withAsterisk,
      ...props
    },
    ref,
  ) => (
    <div className="form-control w-full">
      {label && (
        <Label htmlFor={name} className="label">
          <span className="label-text">
            {label} {withAsterisk && <span className="text-error">*</span>}
          </span>
        </Label>
      )}
      <SelectPrimitive.Root name={name} {...props}>
        <SelectPrimitive.Trigger ref={ref} aria-label={label} asChild>
          <button
            className={twMerge(
              'select items-center',
              className,
              'group',
              'radix-state-open:bg-gray-50',
              'radix-state-on:bg-gray-50',
              'radix-state-delayed-open:bg-gray-50 radix-state-instant-open:bg-gray-50',
              clsx({
                'select-xs': size === 'xs',
                'select-sm': size === 'sm',
                'select-md': size === 'md',
                'select-lg': size === 'lg',
                'select-primary': color === 'primary',
                'select-secondary': color === 'secondary',
                'select-accent': color === 'accent',
                'select-info': color === 'info',
                'select-success': color === 'success',
                'select-warning': color === 'warning',
                'select-error': color === 'error' || error,
                'select-ghost': color === 'ghost',
                'focus:outline-offset-0': !borderOffset,
                'select-bordered': bordered,
              }),
            )}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
          </button>
        </SelectPrimitive.Trigger>
        {/* <SelectPrimitive.Portal> */}
        <SelectPrimitive.Content className="overflow-hidden border shadow-sm">
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 ">
            <IconChevronUp />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="rounded-lg bg-white p-2 shadow-lg">
            {data &&
              data.map((item) => (
                <Item key={item.value} value={item.value} textValue={item.label}>
                  {item.label}
                </Item>
              ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700">
            <IconChevronDown />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
        {/* </SelectPrimitive.Portal> */}
      </SelectPrimitive.Root>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  ),
);

const Item = forwardRef<HTMLDivElement, SelectOptionProps>(({children, ...props}, ref) => {
  return (
    <SelectPrimitive.Item
      {...props}
      ref={ref}
      className={clsx(
        'relative flex items-center rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 ',
        'radix-disabled:opacity-50',
        'select-none focus:outline-none',
      )}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
        <IconCheck />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

Select.displayName = 'Select';
Item.displayName = 'SelectItem';

export default Select;
