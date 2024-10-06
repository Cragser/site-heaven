"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetType } from "@lib/types/asset.type";
import AssetValueHistoryForm from "@modules/forms/asset-value-history-form";

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

// http://localhost:3000/
// company/show/151c5429-ed52-4297-960a-e64803af49ce/
// asset/show/              6d2b7671-f77b-4d6d-9bd4-46bc6ee536e8
// asset-value-history/show/6d2b7671-f77b-4d6d-9bd4-46bc6ee536e8
