"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { GovernmentPageType } from "@page/types/pages/government/government-page.type";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { auditFields } from "@lib/fields/audit/audit.fields";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <CreateRelationPage
      parentId={governmentId}
      parentName="government"
      parentSection="government"
      parentResource={ResourceEnum.government}
      entityResource={ResourceEnum.audit}
      relationResource={ResourceEnum.governmentAudit}
      meta={{ governmentId }}
      fields={auditFields}
    />
  );
}
