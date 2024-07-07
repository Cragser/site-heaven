'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Divider, Typography } from 'antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { JudicialProcessType } from '@lib/types/judicial-process.type';
import TrialList from '@modules/lists/trial-list';
import { useJudicialProcessTitle } from '@client/hooks/titles/use-judicial-process-title';

const { Title } = Typography;
interface LegalPage {
  params: {
    judicialProcessId: string;
  };
}
export default function JudicialProcessShowPage({
  params: { judicialProcessId },
}: Readonly<LegalPage>) {
  const { queryResult } = useShow<JudicialProcessType, HttpError>({
    id: judicialProcessId,
    resource: ResourceEnum.judicialProcess,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();
  const { title } = useJudicialProcessTitle(
    judicialProcessId,
    LangTag['judicial-process.titles.show']
  );
  if (isError || !record) {
    return null;
  }

  return (
    <Show title={title} isLoading={isLoading}>
      <Title level={5}>
        {translate(LangTag[`judicial-process.fields.name`])}
      </Title>
      <TextField value={record.name} />

      <Title level={5}>
        {translate(LangTag[`judicial-process.fields.comments`])}
      </Title>
      <TextField value={record.comments} />
      <Divider />
      <TrialList params={{ id: judicialProcessId }} />
    </Show>
  );
}
