'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { JudicialProcessType } from '@lib/types/judicial-process.type';
import TrialForm from '@modules/forms/trial-form';

export default function TrialEditPage(props: any) {
  const trialId = props?.params?.trialId;
  const judicialProcessId = props?.params?.judicialProcessId;
  const { formProps, saveButtonProps } = useForm<
    JudicialProcessType,
    HttpError
  >({
    id: trialId,
    resource: ResourceEnum.trial,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TrialForm formProps={formProps} judicialProcessId={judicialProcessId} />
    </Edit>
  );
}
