'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialType } from '@lib/types/trial.type';
import TrialForm from '@modules/forms/trial-form';

interface JudicialProcessPage {
  params: {
    judicialProcessId: string;
  };
}

export default function Page({
  params: { judicialProcessId },
}: Readonly<JudicialProcessPage>) {
  const { formProps, saveButtonProps } = useForm<TrialType, HttpError>({
    resource: ResourceEnum.trial,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <TrialForm formProps={formProps} judicialProcessId={judicialProcessId} />
    </Create>
  );
}
