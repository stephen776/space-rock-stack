import type {HTMLAttributes} from 'react';
import {forwardRef} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {IconX} from '@tabler/icons';

import type {ComponentSize} from './types';

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  size?: ComponentSize;
  open?: boolean;
  onClose?: () => void;
  title?: string;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({children, open, onClose, className, title, size = 'md', ...props}, ref): JSX.Element => {
    return (
      <Dialog.Root open={open} onOpenChange={(open) => !open && onClose && onClose()}>
        <Dialog.Portal>
          <Dialog.Overlay forceMount className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="modal modal-open" ref={ref}>
            <div className="rounded-t-box rounded-b-box relative w-11/12 max-w-lg overflow-y-auto bg-base-100 p-6 shadow transition duration-200 ease-in-out">
              <Dialog.Close className=" btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
                <IconX className="h-4 w-4 text-primary" />
              </Dialog.Close>
              {title && (
                <Dialog.Title className="text-sm font-medium text-gray-900" asChild>
                  <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
                </Dialog.Title>
              )}
              <div className="pt-4">{children}</div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
