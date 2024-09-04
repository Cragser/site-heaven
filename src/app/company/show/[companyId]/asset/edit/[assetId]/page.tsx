"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { assetFields } from "@lib/fields/asset/assetFields";

interface Props {
  params: {
    assetId: string;
  };
}

export default function CompanyEditPage({
  params: { assetId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={assetFields}
      resource={ResourceEnum.asset}
      id={assetId}
    />
  );
}
