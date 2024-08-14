"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { auditFields } from "@lib/fields/audit/audit.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.audit}
      relationResource={ResourceEnum.companyAudit}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={auditFields}
    />
  );
}
