"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { contractFields } from "@lib/fields/contract/contract.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <ListParentRelationPage
      parentId={companyId}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.companyContract}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={contractFields}
    />
  );
}
