"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { auditFields } from "@lib/fields/audit/audit.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <ListParentRelationPage
      parentId={companyId}
      entityResource={ResourceEnum.audit}
      relationResource={ResourceEnum.companyAudit}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={auditFields}
    />
  );
}
