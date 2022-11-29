import {useField} from 'remix-validated-form';

import type {SelectProps} from '../shared';
import {Select as SelectInput} from '../shared';

export type FormSelectProps = Omit<SelectProps, 'name'> & {
  name: string;
};

export default function FormSelect({name, ...rest}: FormSelectProps) {
  const {error, getInputProps, defaultValue} = useField(name);

  return (
    <SelectInput
      error={error}
      {...getInputProps({id: name, ...rest})}
      defaultValue={defaultValue && defaultValue.toString()}
    />
  );
}
