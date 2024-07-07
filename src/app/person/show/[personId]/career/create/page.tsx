'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { CareerType } from '@lib/types/career.type';
import CareerForm from '@modules/forms/career-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<CareerType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personCareer,
        values: { careerId: id, personId: personId },
      });
    },
    resource: ResourceEnum.career,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <CareerForm {...formProps} />
    </Create>
  );
}
