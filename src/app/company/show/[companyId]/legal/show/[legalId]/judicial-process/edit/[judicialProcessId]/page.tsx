'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LegalType } from '@lib/types/legal.type';
import JudicialProcessForm from '@modules/forms/judicial-process-form';
interface LegalPage {
  params: {
    legalId: string;
    judicialProcessId: string;
  };
}
export default function JudicialProcessEditPage({
  params: { judicialProcessId, legalId },
}: Readonly<LegalPage>) {
  const { formProps, saveButtonProps } = useForm<LegalType, HttpError>({
    id: judicialProcessId,
    resource: ResourceEnum.judicialProcess,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <JudicialProcessForm formProps={formProps} legalId={legalId} />
    </Edit>
  );
}
