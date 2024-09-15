"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps } from "antd";
import { PersonResponse } from "@lib/types/person.type";
import { ResourceEnum } from "@lib/enums/resource.enum";

import { StateManager } from "@components/feedback/state-manager/state-manager";
import { replaceTemplate } from "@client/util/ant/titles/replace-template";
import DescriptionSimple from "@components/data-display/description/description-simple";
import CardList from "@/lib/data-display/card-list/card-list";

interface Props {
  params: {
    governmentId: string;
  };
}

export default function BlogPostShow({
  params: { governmentId },
}: Readonly<Props>) {
  const translate = useTranslate();
  const { queryResult } = useShow<PersonResponse, HttpError>({
    id: governmentId,
    resource: ResourceEnum.government,
  });
  const record = queryResult.data?.data;

  const title = replaceTemplate(translate("government.titles.show"), {});

  const items: DescriptionsProps["items"] = [
    ...["name", "description", "period"].map((key) => ({
      children: record?.[key],
      label: translate(`person.fields.${key}`),
    })),
  ];

  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={record === undefined || queryResult.isError}
    >
      <Show title={title} canEdit={false}>
        <DescriptionSimple items={items} />
      </Show>
      <CardList
        id={record?.id}
        parent={"government"}
        record={record}
        resources={[
          ResourceEnum.governmentContract,
          ResourceEnum.governmentAudit,
          ResourceEnum.governmentObservation,
        ]}
      />
    </StateManager>
  );
}
