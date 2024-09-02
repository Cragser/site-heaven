"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { GovernmentPageType } from "@page/types/pages/government/government-page.type";
import { observationFields } from "@lib/fields/observation.fields";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <ListParentRelationPage
      parentId={governmentId}
      entityResource={ResourceEnum.observation}
      relationResource={ResourceEnum.governmentObservation}
      parentResource={ResourceEnum.government}
      parent="government"
      columns={observationFields}
    />
  );
}
