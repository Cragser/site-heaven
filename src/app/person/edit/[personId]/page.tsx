'use client';

import { Edit, useForm } from '@refinedev/antd';
import { PersonType } from '@lib/types/person.type';
import { HttpError } from '@refinedev/core/src/interfaces';
import PersonForm from '@modules/forms/person-form';
import { ResourceEnum } from '@lib/enums/resource.enum';

interface Props {
  params: {
    personId: string;
  };
}

export default function BlogPostEdit({ params: { personId } }: Props) {
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id: personId,
    resource: ResourceEnum.person,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <PersonForm {...formProps} />
    </Edit>
  );
}
