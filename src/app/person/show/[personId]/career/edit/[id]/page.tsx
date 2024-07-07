'use client';

import { Edit, useForm } from '@refinedev/antd';
import { PersonType } from '@lib/types/person.type';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import CareerForm from '@modules/forms/career-form';

export default function BlogPostEdit({
  params: { id },
}: Readonly<PersonAndChildPageType>) {
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.career,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <CareerForm {...formProps} />
    </Edit>
  );
}
