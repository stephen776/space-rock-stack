import {useField} from 'remix-validated-form';

import {Alert} from '~/components/shared';

const GENERAL_VALIDATION_ERROR_FIELD = '__error__';

export function GeneralValidationError() {
  const {error} = useField(GENERAL_VALIDATION_ERROR_FIELD);

  if (!error) return null;

  return (
    <div className="pb-4">
      <Alert title="Validation Error" status="error">
        {error}
      </Alert>
    </div>
  );
}
