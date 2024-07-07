'use client';

import { Show } from '@refinedev/antd';
import { useShow } from '@refinedev/core';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { AssetType } from '@lib/types/asset.type';

import AssetView from '@modules/views/asset-view';
import { Divider } from 'antd';
import { AssetValueHistoryList } from '@modules/lists/asset-value-history-list';

interface Props {
  params: {
    assetId: string;
  };
}

export default function AssetShowPage({
  params: { assetId },
}: Readonly<Props>) {
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
      <AssetView record={record} />
      <Divider />
      <AssetValueHistoryList assetId={record.id} />
    </Show>
  );
}
