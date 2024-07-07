'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { EducationType } from '@lib/types/education.type';
import EducationForm from '@modules/forms/education-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<EducationType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personEducation,
        values: { educationId: id, personId: personId },
      });
    },
    resource: ResourceEnum.education,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <EducationForm {...formProps} />
    </Create>
  );
}
