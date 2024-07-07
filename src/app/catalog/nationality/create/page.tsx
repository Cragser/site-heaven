'use client';

import { Create, useForm } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { NationalityType } from '@lib/types/helper/nationality.type';
import NationalityHelperForm from '@modules/forms/nationality-helper-form';
import {HttpError} from "@refinedev/core";

export default function Page() {
  const { formProps, saveButtonProps } = useForm<NationalityType, HttpError>({
    resource: ResourceEnum.nationalityHelper,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <NationalityHelperForm {...formProps} />
    </Create>
  );
}
