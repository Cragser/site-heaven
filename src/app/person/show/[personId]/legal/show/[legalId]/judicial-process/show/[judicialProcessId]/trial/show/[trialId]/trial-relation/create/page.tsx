'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialRelationType } from '@lib/types/trial-relation.type';
import TrialRelationForm from '@modules/forms/trial-relation-form';

interface TrialPage {
  params: {
    trialId: string;
  };
}

export default function Page({ params: { trialId } }: Readonly<TrialPage>) {
  const { formProps, saveButtonProps } = useForm<TrialRelationType, HttpError>({
    resource: ResourceEnum.trialRelation,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <TrialRelationForm formProps={formProps} trialId={trialId} />
    </Create>
  );
}
