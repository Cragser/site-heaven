"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonAndChildPageType } from "@page/types/person-and-child-page.type";
import { EducationType } from "@lib/types/education.type";

const { Title } = Typography;

export default function EducationShowPage({
  params: { id },
}: Readonly<PersonAndChildPageType>) {
  const { queryResult } = useShow<EducationType, HttpError>({
    id,
    resource: ResourceEnum.education,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`education.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`education.fields.institution`)}</Title>
      <TextField value={record.institution} />

      <Title level={5}>{translate(`education.fields.license`)}</Title>
      <TextField value={record.license} />

      <Title level={5}>{translate(`education.fields.validated`)}</Title>
      <TextField value={record.validated} />

      <Title level={5}>{/*{translate(`education.fields.initialDate`)}*/}</Title>
      {/*<TextField value={record.initialDate} />*/}

      {/*<Title level={5}>{translate(`education.fields.endDate`)}</Title>*/}
      {/*<TextField value={record.endDate} />*/}
    </Show>
  );
}
