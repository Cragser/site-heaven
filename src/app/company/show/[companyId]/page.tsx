"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps, Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyType } from "@lib/types/company.type";
import CardList from "@/lib/data-display/card-list/card-list";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import DescriptionSimple from "@components/data-display/description/description-simple";
import { SimpleUniqueResource } from "@modules/unique-resources/simple-unique-resource";
import { Stakeholder } from "@modules/custom-resources/stakeholder";

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
    label: translate(`company.fields.${field}`),
    span: 2,
  }));

  return (
    <Show isLoading={isLoading}>
      <StateManager
        isLoading={queryResult.isLoading}
        isError={queryResult.isError}
        data={queryResult.data}
      >
        <DescriptionSimple items={items} />
        <Divider />
        <SimpleUniqueResource
          resource={ResourceEnum.companyCreationDetails}
          record={record}
          meta={{
            companyId,
            creationDetailsId: record?.companyCreationDetails?.id,
          }}
        />
        <Divider />
        <Stakeholder companyId={companyId} />
        <CardList
          parent={"company"}
          id={record?.id}
          record={record}
          resources={[
            ResourceEnum.companyAddress,
            ResourceEnum.companyAsset,
            ResourceEnum.companyAudit,
            ResourceEnum.companyContract,
            ResourceEnum.companyLegal,
            ResourceEnum.companyRelation,
            ResourceEnum.companySocial,
            // ResourceEnum.personCompany,
          ]}
        />
      </StateManager>
    </Show>
  );
}
