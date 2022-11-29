import {useIsSubmitting} from 'remix-validated-form';

import type {ButtonProps} from '../shared';
import {Button} from '../shared';

type Props = Omit<ButtonProps, 'loading'>;

export function SubmitButton({children, ...rest}: Props) {
  const isSubmitting = useIsSubmitting();
  return (
    <Button type="submit" color="primary" loading={isSubmitting} {...rest}>
      {children}
    </Button>
  );
}
