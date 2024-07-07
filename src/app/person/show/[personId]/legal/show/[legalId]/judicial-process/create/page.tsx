'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { JudicialProcessType } from '@lib/types/judicial-process.type';
import JudicialProcessForm from '@modules/forms/judicial-process-form';
import { useLegalTitle } from '@client/hooks/titles/use-legal-title';
import { LangTag } from '@lib/enums/language.enum';

interface LegalPage {
  params: {
    legalId: string;
  };
}

export default function Page({ params: { legalId } }: Readonly<LegalPage>) {
  const { formProps, saveButtonProps } = useForm<
    JudicialProcessType,
    HttpError
  >({
    resource: ResourceEnum.judicialProcess,
  });
  const { title } = useLegalTitle(
    legalId,
    LangTag['judicial-process.titles.create']
  );
  return (
    <Create title={title} saveButtonProps={saveButtonProps}>
      <JudicialProcessForm formProps={formProps} legalId={legalId} />
    </Create>
  );
}
