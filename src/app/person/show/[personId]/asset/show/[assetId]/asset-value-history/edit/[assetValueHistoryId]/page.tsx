"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
import { assetValueHistoryField } from "@lib/fields/asset/asset-value-history.field";
import { useAssetTitle } from "@client/hooks/titles/use-asset-title";

interface Props {
  params: {
    assetId: string;
    assetValueHistoryId: string;
    personId: string;
  };
}

export default function AssetValueHistoryEditPage({
  params: { assetId, assetValueHistoryId },
}: Props) {
  const { title } = useAssetTitle(assetId, "asset-value-history.titles.create");
  return (
    <EditForm
      entityResource={ResourceEnum.assetValueHistory}
      columns={assetValueHistoryField}
      meta={{ assetId }}
      id={assetValueHistoryId}
      title={title}
    />
  );
}
