'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import NationalityHelperForm from '@modules/forms/nationality-helper-form';

export default function EditPage(props: any) {
  const id = props?.params?.NationalityHelperId;
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    id,
    resource: ResourceEnum.nationalityHelper,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <NationalityHelperForm {...formProps} />
    </Edit>
  );
}
