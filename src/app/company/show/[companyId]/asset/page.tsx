"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { assetFields } from "@lib/fields/asset/assetFields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <ListParentRelationPage
      parentId={companyId}
      entityResource={ResourceEnum.asset}
      relationResource={ResourceEnum.companyAsset}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={assetFields}
    />
  );
}
