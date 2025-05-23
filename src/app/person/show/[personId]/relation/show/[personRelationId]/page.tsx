"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";

const { Title } = Typography;

interface Props {
  params: {
    personRelationId: string;
  };
}

export default function RelationShowPage({
  params: { personRelationId },
}: Readonly<Props>) {
  const { queryResult } = useShow<any, HttpError>({
    id: personRelationId,
    resource: ResourceEnum.personRelation,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`person-relation.fields.id`)}</Title>
      <TextField value={record.personId} />

      <Title level={5}>{translate(`person-relation.fields.id`)}</Title>
      <TextField value={record.relatedPersonId} />

      <Title level={5}>
        {translate(`person-relation.fields.relatedPersonId`)}
      </Title>
      <TextField value={record.relation} />
    </Show>
  );
}
