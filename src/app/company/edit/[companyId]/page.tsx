'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonType } from '@lib/types/person.type';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import CompanyForm from '@modules/forms/company-form';

interface CompanyPage {
  params: {
    companyId: string;
  };
}

export default function PersonEditPage({
  params: { companyId },
}: Readonly<CompanyPage>) {
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id: companyId,
    resource: ResourceEnum.company,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <CompanyForm {...formProps} />
    </Edit>
  );
}
