"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Divider, Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LangTag } from "@lib/enums/language.enum";
import { AssetType } from "@lib/types/asset.type";

const { Title } = Typography;

interface Props {
  params: {
    auditId: string;
  };
}

export default function AssetShowPage({ params: { auditId } }: Props) {
  const { queryResult } = useShow<AssetType, HttpError>({
    id: auditId,
    resource: ResourceEnum.audit,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(LangTag[`audit.fields.name`])}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(LangTag[`audit.fields.notes`])}</Title>
      <TextField value={record.notes} />

      <Divider />
    </Show>
  );
}
