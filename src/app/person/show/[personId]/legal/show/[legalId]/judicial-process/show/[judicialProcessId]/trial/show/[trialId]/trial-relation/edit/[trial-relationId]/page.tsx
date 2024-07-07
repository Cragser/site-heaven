'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialType } from '@lib/types/trial.type';
import TrialRelationForm from '@modules/forms/trial-relation-form';

export default function TrialRelationEditPage(
  props: Readonly<TrialRelationAndChildPageType>
) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<TrialType, HttpError>({
    id: trialRelationId,
    resource: ResourceEnum.trialRelation,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TrialRelationForm formProps={formProps} trialRelation={trialRelation} />
    </Edit>
  );
}
