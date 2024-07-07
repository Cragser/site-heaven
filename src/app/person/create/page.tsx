'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { PersonType } from '@lib/types/person.type';
import PersonForm from '@modules/forms/person-form';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    resource: ResourceEnum.person,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <PersonForm {...formProps} />
    </Create>
  );
}
