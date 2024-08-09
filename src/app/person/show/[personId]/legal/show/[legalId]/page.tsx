"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { DescriptionsProps, Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LegalType } from "@lib/types/legal.type";
import JudicialProcessList from "@modules/lists/judicial-process-list";
import DescriptionSimple from "@components/data-display/description/description-simple";
import { legalFields } from "@lib/fields/legal.fields";

interface Props {
  params: {
    legalId: string;
    personId: string;
  };
}

export default function LegalShowPage({
  params: { legalId, personId },
}: Readonly<Props>) {
  const { queryResult } = useShow<LegalType, HttpError>({
    id: legalId,
    resource: ResourceEnum.legal,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

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
      <JudicialProcessList params={{ legalId, personId }} />
    </Show>
  );
}
