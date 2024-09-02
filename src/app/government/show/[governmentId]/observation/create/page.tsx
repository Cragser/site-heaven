"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { GovernmentPageType } from "@page/types/pages/government/government-page.type";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { observationFields } from "@lib/fields/observation.fields";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  return (
    <CreateRelationPage
      parentId={governmentId}
      parentName="government"
      parentSection="government"
      parentResource={ResourceEnum.government}
      entityResource={ResourceEnum.observation}
      relationResource={ResourceEnum.governmentObservation}
      meta={{ governmentId }}
      fields={observationFields}
    />
  );
}
