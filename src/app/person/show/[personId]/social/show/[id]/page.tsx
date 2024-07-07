'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Typography } from 'antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import { SocialType } from '@lib/types/social.type';

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
      <Title level={5}>{translate(LangTag[`social.fields.id`])}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(LangTag[`social.fields.name`])}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(LangTag[`social.fields.type`])}</Title>
      <TextField value={record.type} />

      <Title level={5}>{translate(LangTag[`social.fields.description`])}</Title>
      <TextField value={record.description} />

      <Title level={5}>{translate(LangTag[`social.fields.link`])}</Title>
      <TextField value={record.link} />

      <Title level={5}>{translate(LangTag[`social.fields.createdAt`])}</Title>
      <TextField value={record.createdAt} />

      <Title level={5}>
        {translate(LangTag[`social.fields.estimatedPeopleImpacted`])}
      </Title>
      <TextField value={record.estimatedPeopleImpacted} />
    </Show>
  );
}
