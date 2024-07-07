'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialType } from '@lib/types/trial.type';
import TrialRelationForm from '@modules/forms/trial-relation-form';

interface TrialRelationEditPageProps {
  trialRelation: unknown
}

export default function TrialRelationEditPage(
  props: any
) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<TrialType, HttpError>({
    id: '',
    resource: ResourceEnum.trialRelation,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TrialRelationForm formProps={formProps} trialId={'123091723'}/>
    </Edit>
  );
}
