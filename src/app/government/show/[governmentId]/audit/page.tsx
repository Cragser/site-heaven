"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { auditFields } from "@lib/fields/audit/audit.fields";
import { GovernmentPageType } from "@page/types/pages/government/government-page.type";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <ListParentRelationPage
      parentId={governmentId}
      entityResource={ResourceEnum.audit}
      relationResource={ResourceEnum.governmentAudit}
      parentResource={ResourceEnum.government}
      parent="government"
      columns={auditFields}
    />
  );
}
