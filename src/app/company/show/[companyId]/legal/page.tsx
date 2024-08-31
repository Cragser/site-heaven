"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { legalFields } from "@lib/fields/legal.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <ListParentRelationPage
      parentId={companyId}
      entityResource={ResourceEnum.legal}
      relationResource={ResourceEnum.companyLegal}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={legalFields}
    />
  );
}
