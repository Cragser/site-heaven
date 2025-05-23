"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { contractFields } from "@lib/fields/contract/contract.fields";
import { GovernmentPageType } from "@page/types/pages/government/government-page.type";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <CreateRelationPage
      parentId={governmentId}
      parentName="government"
      parentSection="government"
      parentResource={ResourceEnum.government}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.governmentContract}
      meta={{ governmentId }}
      fields={contractFields}
    />
  );
}
