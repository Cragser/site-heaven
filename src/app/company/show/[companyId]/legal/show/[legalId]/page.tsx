"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps, Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LegalType } from "@lib/types/legal.type";
import DescriptionSimple from "@components/data-display/description/description-simple";
import { legalFields } from "@lib/fields/legal.fields";
import CreateSuborderedList from "@modules/lists/create-subordered-list";
import { useLegalTitle } from "@client/hooks/titles/use-legal-title";

interface Props {
  params: {
    legalId: string;
    companyId: string;
  };
}

export default function LegalShowPage({
  params: { legalId, companyId },
}: Readonly<Props>) {
  const { queryResult } = useShow<LegalType, HttpError>({
    id: legalId,
    resource: ResourceEnum.legal,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();
  const { title } = useLegalTitle(legalId, "judicial-process.titles.create");
  if (isError || !record) {
    return null;
  }

  const items: DescriptionsProps["items"] = legalFields.map((field) => ({
    children: record[field?.key as string],
    label: translate(`legal.fields.${field.key}`),
  }));

  return (
    <Show isLoading={isLoading}>
      <DescriptionSimple items={items} />
      <Divider />
      {/*<JudicialProcessList params={{ legalId, personId: companyId }} />*/}
      {/*<Divider />*/}
      <CreateSuborderedList
        fields={["name", "comments"]}
        navigationResource={ResourceEnum.companyJudicialProcess}
        parentName="legal"
        params={{ legalId }}
        resource={ResourceEnum.judicialProcess}
        title={title}
      />
    </Show>
  );
}
