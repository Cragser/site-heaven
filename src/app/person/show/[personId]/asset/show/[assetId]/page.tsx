"use client";

import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetValueHistoryList } from "@modules/lists/asset-value-history-list";
import { assetFields } from "@lib/fields/asset/assetFields";
import EntityViewLoader from "@/lib/loaders/components/entity-view/entity-view-loader";
import { useGetTitleEntity } from "@/lib/loaders/hooks/title/use-get-title-entity";

interface Props {
  params: {
    assetId: string;
    personId: string;
  };
}

export default function AssetShowPage({
  params: { assetId, personId },
}: Props) {
  const title = useGetTitleEntity({
    dataId: personId,
    dataResource: ResourceEnum.person,
    titleResource: ResourceEnum.personAsset,
  });
  return (
    <div>
      <EntityViewLoader
        fields={assetFields}
        resource={ResourceEnum.asset}
        id={assetId}
        title={title}
      />
      <Divider />
      <AssetValueHistoryList assetId={assetId} />
    </div>
  );
}
