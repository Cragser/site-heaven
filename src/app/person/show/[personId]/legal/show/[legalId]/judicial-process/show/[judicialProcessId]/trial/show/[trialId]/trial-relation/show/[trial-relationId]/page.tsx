"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { TrialRelationType } from "@lib/types/trial-relation.type";

const { Title } = Typography;

export default function TrialRelationShowPage({ params: { id } }: any) {
  const { queryResult } = useShow<TrialRelationType, HttpError>({
    id,
    resource: ResourceEnum.trialNotification,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`trial-relation.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`trial-relation.fields.trialId`)}</Title>
      <TextField value={record.trialId} />

      <Title level={5}>
        {translate(`trial-relation.fields.relatedTrialId`)}
      </Title>
      <TextField value={record.relatedTrialId} />

      <Title level={5}>{translate(`trial-relation.fields.relation`)}</Title>
      <TextField value={record.relation} />
    </Show>
  );
}
