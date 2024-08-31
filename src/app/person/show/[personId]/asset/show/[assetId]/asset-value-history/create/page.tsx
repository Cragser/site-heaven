"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CreateForm } from "@/lib/pages/create/create-form";
import { assetValueHistoryField } from "@lib/fields/asset/asset-value-history.field";
import { useAssetTitle } from "@client/hooks/titles/use-asset-title";

export default function Page({ params: { assetId } }: any) {
  const { title } = useAssetTitle(assetId, "asset-value-history.titles.create");
  return (
    <CreateForm
      entityResource={ResourceEnum.assetValueHistory}
      columns={assetValueHistoryField}
      meta={{ assetId }}
      title={title}
    />
  );
}
