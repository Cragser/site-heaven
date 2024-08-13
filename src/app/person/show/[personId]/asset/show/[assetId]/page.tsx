"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Divider, Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetType } from "@lib/types/asset.type";
import { AssetValueHistoryList } from "@modules/lists/asset-value-history-list";

const { Title } = Typography;

export default function AssetShowPage({ params: { assetId } }: any) {
  const { queryResult } = useShow<AssetType, HttpError>({
    id: assetId,
    resource: ResourceEnum.asset,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate(`asset.fields.id`)}</Title>
      <TextField value={record.id} />
      <Title level={5}>{translate(`asset.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`asset.fields.description`)}</Title>
      <TextField value={record.description} />

      <Title level={5}>{translate(`asset.fields.date`)}</Title>
      {/*<TextField value={record.date} />*/}

      <Title level={5}>{translate(`asset.fields.type`)}</Title>
      <TextField value={record.type} />

      <Divider />
      <AssetValueHistoryList assetId={record.id} />
    </Show>
  );
}
