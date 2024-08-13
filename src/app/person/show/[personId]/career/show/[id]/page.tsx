"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";

import { CareerType } from "@lib/types/career.type";
import { PersonAndChildPageType } from "@page/types/person-and-child-page.type";

const { Title } = Typography;

export default function JobShowPage({
  params: { id },
}: Readonly<PersonAndChildPageType>) {
  console.log("JOB SHOW PAGE");
  const { queryResult } = useShow<CareerType, HttpError>({
    id,
    resource: ResourceEnum.career,
  });

  const { data, isError, isLoading } = queryResult;
  console.log({ data });
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`career.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`career.fields.role`)}</Title>
      <TextField value={record.role} />

      <Title level={5}>{translate(`career.fields.startDate`)}</Title>
      <TextField value={record.startDate} />

      <Title level={5}>{translate(`career.fields.endDate`)}</Title>
      <TextField value={record.endDate} />

      <Title level={5}>{translate(`career.fields.contractType`)}</Title>
      <TextField value={record.contractType} />
    </Show>
  );
}
