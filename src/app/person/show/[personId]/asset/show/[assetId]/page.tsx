"use client";

import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetValueHistoryList } from "@modules/lists/asset-value-history-list";
import { assetFields } from "@lib/fields/asset/assetFields";
import { useGetTitleEntity } from "@/lib/loaders/hooks/title/use-get-title-entity";
import EntityShowLoader from "@/lib/loaders/components/entity-show/entity-show-loader";
import EntityListLoader from "@/lib/loaders/components/entity-list/entity-list-loader";
import { assetValueHistoryField } from "@lib/fields/asset/asset-value-history.field";

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
      <EntityShowLoader
        fields={assetFields}
        id={assetId}
        resource={ResourceEnum.asset}
        title={title}
      />
      <Divider />
      <AssetValueHistoryList assetId={assetId} />
      <Divider />
      <EntityListLoader
        resource={ResourceEnum.assetValueHistory}
        fields={assetValueHistoryField}
        filterId={assetId}
        filterIdName="assetId"
      />
    </div>
  );
}
