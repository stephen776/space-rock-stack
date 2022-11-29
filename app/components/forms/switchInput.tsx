import {useField} from 'remix-validated-form';

import type {SwitchProps} from '../shared';
import {Switch} from '../shared';

interface Props extends SwitchProps {
  name: string;
}

export function SwitchInput({name, ...rest}: Props) {
  const {error, getInputProps} = useField(name);
  return <Switch error={error} {...getInputProps({id: name, ...rest})} />;
}
