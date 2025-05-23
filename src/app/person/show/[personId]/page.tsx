"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps } from "antd";
import { PersonResponse } from "@lib/types/person.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import CardList from "@/lib/data-display/card-list/card-list";

import { StateManager } from "@components/feedback/state-manager/state-manager";
import { replaceTemplate } from "@client/util/ant/titles/replace-template";
import { tagRender } from "@client/util/ant/fields/tagRender";
import DescriptionSimple from "@components/data-display/description/description-simple";

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

  const title = replaceTemplate(translate("person.titles.show"), {
    person: {
      lastName: record?.lastName,
      name: record?.name,
    },
  });

  const items: DescriptionsProps["items"] = [
    {
      children: `${record?.name} ${record?.lastName}`,
      label: translate(`person.fields.name`),
      span: 2,
    },
    ...["rfc", "nss", "curp"].map((key) => ({
      children: record?.[key],
      label: translate(`person.fields.${key}`),
    })),
    {
      children: tagRender(record?.nationality?.name),
      label: translate(`person.fields.nationality`),
    },
  ];

  return (
    <Show title={title}>
      <StateManager
        isLoading={queryResult.isLoading}
        isError={record === undefined || queryResult.isError}
        data={queryResult.data}
      >
        <DescriptionSimple items={items} />
        <CardList
          id={record?.id}
          parent={"person"}
          record={record}
          resources={[
            ResourceEnum.personAddress,
            ResourceEnum.personAsset,
            ResourceEnum.personCareer,
            ResourceEnum.personCompany,
            ResourceEnum.personContract,
            ResourceEnum.personEducation,
            ResourceEnum.personLegal,
            ResourceEnum.personRelation,
            ResourceEnum.personSocial,
          ]}
        />
      </StateManager>
    </Show>
  );
}
