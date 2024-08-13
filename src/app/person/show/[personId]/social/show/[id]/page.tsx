"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonAndChildPageType } from "@page/types/person-and-child-page.type";
import { SocialType } from "@lib/types/social.type";

const { Title } = Typography;

export default function SocialShowPage({
  params: { id },
}: Readonly<PersonAndChildPageType>) {
  const { queryResult } = useShow<SocialType, HttpError>({
    id,
    resource: ResourceEnum.social,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`social.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`social.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`social.fields.type`)}</Title>
      <TextField value={record.type} />

      <Title level={5}>{translate(`social.fields.description`)}</Title>
      <TextField value={record.description} />

      <Title level={5}>{translate(`social.fields.link`)}</Title>
      <TextField value={record.link} />

      <Title level={5}>{translate(`social.fields.createdAt`)}</Title>
      {/*  TODO: Change to date field */}
      <TextField value={record.createdAt.toDateString()} />

      <Title level={5}>
        {translate(`social.fields.estimatedPeopleImpacted`)}
      </Title>
      <TextField value={record.estimatedPeopleImpacted} />
    </Show>
  );
}
