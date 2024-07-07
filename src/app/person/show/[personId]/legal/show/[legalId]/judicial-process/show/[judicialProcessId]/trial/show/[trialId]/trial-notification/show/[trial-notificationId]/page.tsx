'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Typography } from 'antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { TrialAndChildPageType } from '@page/types/trial-and-child-page.type';
import { TrialNotificationType } from '@lib/types/trial-notification.type';

const { Title } = Typography;

export default function TrialNotificationShowPage({
  params: { id },
}: Readonly<TrialAndChildPageType>) {
  const { queryResult } = useShow<TrialNotificationType, HttpError>({
    id,
    resource: ResourceEnum.TrialNotification,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>
        {translate(LangTag[`trial-notification.fields.id`])}
      </Title>
      <TextField value={record.id} />

      <Title level={5}>
        {translate(LangTag[`trial-notification.fields.name`])}
      </Title>
      <TextField value={record.name} />

      <Title level={5}>
        {translate(LangTag[`trial-notification.fields.type`])}
      </Title>
      <TextField value={record.type} />

      <Title level={5}>
        {translate(LangTag[`trial-notification.fields.date`])}
      </Title>
      <TextField value={record.date} />
    </Show>
  );
}
