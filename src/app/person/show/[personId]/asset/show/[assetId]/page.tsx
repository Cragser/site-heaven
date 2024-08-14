"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow } from "@refinedev/core";
import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetType } from "@lib/types/asset.type";
import { AssetValueHistoryList } from "@modules/lists/asset-value-history-list";
import EntityView from "@components/data-display/entity-view/entity-view";
import { assetField } from "@lib/fields/asset/asset.field";

interface Props {
  params: {
    assetId: string;
    personId: string;
  };
}

export default function AssetShowPage({ params: { assetId } }: any) {
  const { queryResult } = useShow<AssetType, HttpError>({
    id: assetId,
    resource: ResourceEnum.asset,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <EntityView
        items={assetField}
        resource={ResourceEnum.asset}
        record={record}
      />

      <Divider />
      <AssetValueHistoryList assetId={record.id} />
    </Show>
  );
}
