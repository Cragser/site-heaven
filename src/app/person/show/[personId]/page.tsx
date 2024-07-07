'use client';

import { Show } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { DescriptionsProps } from 'antd';
import { PersonResponse } from '@lib/types/person.type';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import CardList from '@modules/card-list';

import { StateManager } from '@components/feedback/state-manager/state-manager';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';
import { tagRender } from '@client/util/ant/fields/tagRender';
import DescriptionSimple from '@components/data-display/description/description-simple';

interface Props {
  params: {
    personId: string;
  };
}

export default function BlogPostShow({
  params: { personId },
}: Readonly<Props>) {
  const translate = useTranslate();
  const { queryResult } = useShow<PersonResponse, HttpError>({
    id: personId,
    resource: ResourceEnum.person,
  });
  const record = queryResult.data?.data;

  const title = replaceTemplate(translate(LangTag['person.titles.show']), {
    person: {
      lastName: record?.lastName,
      name: record?.name,
    },
  });

  const items: DescriptionsProps['items'] = [
    {
      children: `${record?.name} ${record?.lastName}`,
      label: translate(LangTag[`person.fields.name`]),
      span: 2,
    },
    ...['rfc', 'nss', 'curp'].map((key) => ({
      children: record?.[key],
      label: translate(LangTag[`person.fields.${key}` as keyof typeof LangTag ]),
    })),
    {
      children: tagRender(record?.nationality?.name),
      label: translate(LangTag[`person.fields.nationality`]),
    },
  ];

  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={record === undefined || queryResult.isError}
    >
      <Show title={title}>
        <DescriptionSimple items={items} />
        <CardList
          id={record?.id}
          parent={'person'}
          record={record}
          resources={[
            ResourceEnum.personCompany,
            ResourceEnum.personAddress,
            ResourceEnum.personAsset,
            ResourceEnum.personCareer,
            ResourceEnum.personEducation,
            ResourceEnum.personLegal,
            ResourceEnum.personRelation,
            ResourceEnum.personSocial,
          ]}
        />
      </Show>
    </StateManager>
  );
}
