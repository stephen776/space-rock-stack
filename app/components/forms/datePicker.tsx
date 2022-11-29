import {useField} from 'remix-validated-form';
import {format} from 'date-fns';

import type {InputProps} from '../shared';
import {Input} from '../shared';

interface Props extends InputProps {
  name: string;
}

export function DatePicker({name, ...rest}: Props) {
  const {error, getInputProps, defaultValue} = useField(name);

  return (
    <Input
      type="date"
      error={error}
      {...getInputProps({id: name, ...rest})}
      defaultValue={defaultValue ? format(defaultValue, 'yyyy-MM-dd') : undefined}
    />
  );
}
