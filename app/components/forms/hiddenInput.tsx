import {useField} from 'remix-validated-form';

import {Alert} from '~/components/shared';

interface Props {
  name: string;
}

export function HiddenInput({name}: Props) {
  const {error, getInputProps} = useField(name);

  if (error)
    return (
      <div className="pb-4">
        <Alert title={`Form Error: ${name}`} status="error">
          {error}
        </Alert>
      </div>
    );

  return <input type="hidden" {...getInputProps({id: name})} />;
}
