'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { RelationType } from '@lib/types/relation.type';
import RelationForm from '@modules/forms/relation-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { formProps, saveButtonProps } = useForm<RelationType, HttpError>({
    resource: ResourceEnum.personRelation,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <RelationForm personId={personId} formProps={formProps} />
    </Create>
  );
}
