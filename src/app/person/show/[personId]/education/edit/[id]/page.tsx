'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { PersonType } from '@lib/types/person.type';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import EducationForm from '@modules/forms/education-form';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function EducationEditPage(
  props: Readonly<PersonAndChildPageType>
) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.education,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <EducationForm {...formProps} />
    </Edit>
  );
}
