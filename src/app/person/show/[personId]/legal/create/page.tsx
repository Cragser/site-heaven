'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { LegalType } from '@lib/types/legal.type';
import LegalForm from '@modules/forms/legal-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<LegalType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personLegal,
        values: { legalId: id, personId: personId },
      });
    },
    resource: ResourceEnum.legal,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <LegalForm {...formProps} />
    </Create>
  );
}
