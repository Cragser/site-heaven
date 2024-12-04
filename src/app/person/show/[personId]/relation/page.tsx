"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { personRelationFields } from "@lib/fields/person/person-relation.fields";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";

export default function PersonRelationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      parentId={personId}
      entityResource={ResourceEnum.personRelation}
      relationResource={ResourceEnum.personRelation}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={personRelationFields}
      showDrawer={false}
    />
  );
}
