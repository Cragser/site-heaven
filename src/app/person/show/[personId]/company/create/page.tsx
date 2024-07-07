'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { CompanyType } from '@lib/types/company.type';
import CompanyForm from '@modules/forms/company-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personCompany,
        values: { companyId: id, personId: personId },
      });
    },
    redirect: false,
    resource: ResourceEnum.company,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <CompanyForm {...formProps} />
    </Create>
  );
}
