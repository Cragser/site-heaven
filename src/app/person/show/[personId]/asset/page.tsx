"use client";

import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { assetField } from "@lib/fields/asset/asset.field";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      parentId={personId}
      entityResource={ResourceEnum.asset}
      relationResource={ResourceEnum.personAsset}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={assetField}
    />
  );
}
