'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { AssetType } from '@lib/types/asset.type';
import AssetValueHistoryForm from '@modules/forms/asset-value-history-form';

export default function AssetValueHistoryEditPage(props: any) {
  const assetValueHistoryId = props?.params?.assetValueHistoryId;
  const assetId = props?.params?.assetId;
  const { formProps, saveButtonProps } = useForm<AssetType, HttpError>({
    id: assetValueHistoryId,
    resource: ResourceEnum.assetValueHistory,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AssetValueHistoryForm formProps={formProps} assetId={assetId} />
    </Edit>
  );
}
