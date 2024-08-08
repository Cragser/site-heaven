"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Divider, Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LangTag } from "@lib/enums/language.enum";
import { AssetType } from "@lib/types/asset.type";
import { ReactNode } from "react";

const { Title } = Typography;

interface Props {
  params: {
    contractId: string;
  };
}

export default function AssetShowPage({ params: { contractId } }: Props) {
  const { queryResult } = useShow<AssetType, HttpError>({
    id: contractId,
    resource: ResourceEnum.contract,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  const fields = [
    "name",
    "concept",
    "startDate",
    "contractor",
    "notes",
    "value",
  ];

  const items: ReactNode[] = fields.map((field) => (
    <div key={field}>
      <Title level={5}>
        {translate(LangTag[`contract.fields.${field}` as keyof typeof LangTag])}
      </Title>
      <TextField value={record[field]} />
    </div>
  ));

  return (
    <Show isLoading={isLoading}>
      {items}
      <Divider />
    </Show>
  );
}
