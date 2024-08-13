"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { TrialNotificationType } from "@lib/types/trial-notification.type";

const { Title } = Typography;

export default function TrialNotificationShowPage({ params: { id } }: any) {
  const { queryResult } = useShow<TrialNotificationType, HttpError>({
    id,
    resource: "",
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`trial-notification.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`trial-notification.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`trial-notification.fields.type`)}</Title>
      <TextField value={record.type} />

      <Title level={5}>{translate(`trial-notification.fields.date`)}</Title>
      <TextField value={record.date} />
    </Show>
  );
}
