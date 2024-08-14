"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { assetField } from "@lib/fields/asset/asset.field";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.asset}
      relationResource={ResourceEnum.companyAsset}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={assetField}
    />
  );
}
