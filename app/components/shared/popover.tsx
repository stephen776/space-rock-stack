import type {ReactElement, ReactNode} from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';

interface PopoverProps {
  children?: ReactElement<PopoverTargetProps | PopoverContentProps>[];
}

interface PopoverTargetProps {
  children: ReactNode;
}

interface PopoverContentProps {
  children: ReactNode;
}

function PopoverTarget({children}: PopoverTargetProps) {
  return <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>;
}

function PopoverContent({children}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={clsx(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'mx-4 rounded-lg p-4 shadow-md',
          'bg-white',
        )}
      >
        <PopoverPrimitive.Arrow className="fill-current text-white" />
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

function Popover({children}: PopoverProps) {
  return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
}

export default Object.assign(Popover, {Target: PopoverTarget, Content: PopoverContent});
