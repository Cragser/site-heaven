"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { Divider } from "antd";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { assetFields } from "@lib/fields/asset/assetFields";
import ListInnerPage from "@/lib/pages/list/variant/list-inner/list-inner.page";
import { assetValueHistoryField } from "@lib/fields/asset/asset-value-history.field";

interface Props {
  params: {
    assetId: string;
    companyId: string;
  };
}

export default function AssetShowPage({
  params: { assetId, companyId },
}: Readonly<Props>) {
  return (
    <>
      <ShowEntityPage
        fields={assetFields}
        resource={ResourceEnum.asset}
        id={assetId}
      />
      <Divider />

      <ListInnerPage
        parentId={assetId}
        parentResource={ResourceEnum.asset}
        relationResource={ResourceEnum.assetValueHistory}
        columns={assetValueHistoryField}
        navigationResource={ResourceEnum.companyAssetValueHistory}
        meta={{
          companyId,
          assetId,
        }}
      />
    </>
  );
}
