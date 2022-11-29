import {ValidatedForm} from 'remix-validated-form';
import {withZod} from '@remix-validated-form/with-zod';
import {zfd} from 'zod-form-data';
import {z} from 'zod';

import {TextInput} from '~/components/forms';

interface Props {
  formId?: string;
  placeholder?: string;
  className?: string;
}

export const tableSearchValidator = withZod(
  zfd.formData({
    search: zfd.text(z.string().optional()),
  }),
);

export default function TableSearchFilter({formId, placeholder, className}: Props) {
  return (
    <div className={className}>
      <ValidatedForm
        id={formId ?? 'tableSearchFilterForm'}
        validator={tableSearchValidator}
        method="get"
      >
        <TextInput
          name="search"
          placeholder={placeholder ?? 'Search by any field'}
          className="mb-4"
        />
      </ValidatedForm>
    </div>
  );
}
