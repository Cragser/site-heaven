"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LangTag } from "@lib/enums/language.enum";
import { CompanyType } from "@lib/types/company.type";
import CardList from "@modules/card-list";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import DescriptionSimple from "@components/data-display/description/description-simple";

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
  if (record === undefined || isError) return null;

  const fields = ["name", "creationUbication", "rfc", "goal", "nickname"];

  const items: DescriptionsProps["items"] = fields.map((field) => ({
    children: record?.[field],
    label: translate(
      LangTag[`company.fields.${field}` as keyof typeof LangTag]
    ),
    span: 2,
  }));
  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={queryResult.isError}
    >
      <Show isLoading={isLoading}>
        <DescriptionSimple items={items} />
        <CardList
          parent={"company"}
          id={record?.id}
          record={record}
          resources={[
            ResourceEnum.companyAddress,
            ResourceEnum.companySocial,
            ResourceEnum.companyAsset,
            ResourceEnum.companyRelation,
            // ResourceEnum.personCompany,
          ]}
        />
      </Show>
    </StateManager>
  );
}
