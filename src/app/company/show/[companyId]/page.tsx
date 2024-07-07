'use client';

import { Show, TextField } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { Typography } from 'antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { CompanyType } from '@lib/types/company.type';
import CardList from '@modules/card-list';

const { Title } = Typography;

interface CompanyPage {
  params: {
    companyId: string;
  };
}

export default function CompanyShowPage({
  params: { companyId },
}: Readonly<CompanyPage>) {
  const { queryResult } = useShow<CompanyType, HttpError>({
    id: companyId,
    resource: ResourceEnum.company,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(LangTag[`company.fields.name`])}</Title>
      <TextField value={record.name} />

      <Title level={5}>
        {translate(LangTag[`company.fields.creationUbication`])}
      </Title>
      <TextField value={record.creationUbication} />

      {/*<Title level={5}>{translate(LangTag[`company.fields.rfc`])}</Title>*/}
      <TextField value={record.rfc} />

      <Title level={5}>{translate(LangTag[`company.fields.goal`])}</Title>
      <TextField value={record.goal} />

      <Title level={5}>{translate(LangTag[`company.fields.nickname`])}</Title>
      <TextField value={record.nickname} />

      <CardList
        parent={'company'}
        id={record?.id}
        record={record}
        resources={[
          ResourceEnum.companyAddress,
          ResourceEnum.companySocial,
          ResourceEnum.companyAsset,
          ResourceEnum.personCompany,
        ]}
      />
    </Show>
  );
}
