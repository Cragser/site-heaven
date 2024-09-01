"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { contractFields } from "@lib/fields/contract/contract.fields";
import { GovernmentPageType } from "@page/types/pages/government/person-page.type";

export default function PersonList({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <ListParentRelationPage
      parentId={governmentId}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.governmentContract}
      parentResource={ResourceEnum.government}
      parent="government"
      columns={contractFields}
    />
  );
}
