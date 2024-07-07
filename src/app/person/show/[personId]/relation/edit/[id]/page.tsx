'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { PersonType } from '@lib/types/person.type';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import RelationForm from '@modules/forms/relation-form';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function RelationEditPage(
  props: Readonly<PersonAndChildPageType>
) {
  const id = props?.params?.id;
  const personId = props?.params?.personId;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.personRelation,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <RelationForm personId={personId} formProps={formProps} />
    </Edit>
  );
}
