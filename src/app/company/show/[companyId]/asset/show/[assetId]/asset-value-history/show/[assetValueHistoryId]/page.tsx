"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { assetValueHistoryField } from "@lib/fields/asset/asset-value-history.field";

interface Props {
  params: {
    assetValueHistoryId: string;
  };
}

export default function AssetValueHistoryEditPage({
  params: { assetValueHistoryId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={assetValueHistoryField}
      resource={ResourceEnum.assetValueHistory}
      id={assetValueHistoryId}
    />
  );
}
