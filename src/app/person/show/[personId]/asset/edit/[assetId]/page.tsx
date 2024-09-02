"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { assetFields } from "@lib/fields/asset/assetFields";

interface Props {
  params: {
    personId: string;
    assetId: string;
  };
}

export default function AssetEditPage({
  params: { assetId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.asset}
      columns={assetFields}
      id={assetId}
    />
  );
}
