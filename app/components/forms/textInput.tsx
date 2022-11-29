import {useField} from 'remix-validated-form';

import type {InputProps} from '../shared';
import {Input} from '../shared';

interface Props extends InputProps {
  name: string;
}

export function TextInput({name, ...rest}: Props) {
  const {error, getInputProps} = useField(name);
  return <Input type="text" error={error} {...getInputProps({id: name, ...rest})} />;
}
