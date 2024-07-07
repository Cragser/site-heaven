'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Typography } from 'antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { TrialType } from '@lib/types/trial.type';
import TrialRelationList from '@modules/lists/trial-relation-list';
import TrialNotificationList from '@modules/lists/trial-notification-list';
import { useForTrialShow } from '@client/hooks/titles/use-for-trial-show';

const { Title } = Typography;

interface Props {
  params: {
    trialId: string;
    judicialProcessId: string;
  };
}

export default function TrialShowPage({
  params: { judicialProcessId, trialId },
}: Readonly<Props>) {
  console.log(trialId, judicialProcessId);
  const { queryResult } = useShow<TrialType, HttpError>({
    id: trialId,
    resource: ResourceEnum.trial,
  });
  const { data, isError, isLoading } = queryResult;

  const record = data?.data;
  const translate = useTranslate();

  const { title } = useForTrialShow(
    trialId,
    judicialProcessId,
    LangTag['trial.titles.show']
  );

  if (isError || !record) {
    return null;
  }

  return (
    <section
      style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: '1fr ',
      }}
    >
      <Show title={title} isLoading={isLoading}>
        {/*<Title level={5}>{translate(LangTag[`trial.fields.name`])}</Title>*/}
        <TextField value={record.name} />

        {/*<Title level={5}>{translate(LangTag[`trial.fields.courtName`])}</Title>*/}
        <TextField value={record.courtName} />

        {/*<Title level={5}>{translate(LangTag[`trial.fields.summary`])}</Title>*/}
        <TextField value={record.summary} />

        <Title level={5}>{translate(LangTag[`trial.fields.startDate`])}</Title>
        <TextField value={record.startDate} />

        <Title level={5}>{translate(LangTag[`trial.fields.endDate`])}</Title>
        <TextField value={record.endDate} />

        <Title level={5}>{translate(LangTag[`trial.fields.type`])}</Title>
        <TextField value={record.type} />

        {/*<Title level={5}>{translate(LangTag[`trial.fields.scope`])}</Title>*/}
        <TextField value={record.scope} />
      </Show>
      <TrialNotificationList trialId={trialId} />
      <TrialRelationList trialId={trialId} />
    </section>
  );
}
