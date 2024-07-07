'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Divider, Typography } from 'antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { LegalType } from '@lib/types/legal.type';
import JudicialProcessList from '@modules/lists/judicial-process-list';

const { Title } = Typography;

interface Props {
  params: {
    legalId: string;
  };
}

export default function LegalShowPage({
  params: { legalId },
}: Readonly<Props>) {
  const { queryResult } = useShow<LegalType, HttpError>({
    id: legalId,
    resource: ResourceEnum.legal,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(LangTag[`legal.fields.name`])}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(LangTag[`legal.fields.comments`])}</Title>
      <TextField value={record.comments} />
      <Divider />
      <JudicialProcessList params={{ legalId }} />
    </Show>
  );
}
