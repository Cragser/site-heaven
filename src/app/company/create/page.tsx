'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyType } from '@lib/types/company.type';
import CompanyForm from '@modules/forms/company-form';

export default function Page() {
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    resource: ResourceEnum.company,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <CompanyForm {...formProps} />
    </Create>
  );
}
