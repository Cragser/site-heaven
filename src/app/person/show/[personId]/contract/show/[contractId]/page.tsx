"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { contractFields } from "@lib/fields/contract/contract.fields";

interface Props {
  params: {
    contractId: string;
  };
}

export default function AssetShowPage({ params: { contractId } }: Props) {
  return (
    <ShowEntityPage
      fields={contractFields}
      resource={ResourceEnum.contract}
      id={contractId}
    />
  );
}
