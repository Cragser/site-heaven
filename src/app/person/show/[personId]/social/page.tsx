"use client";

import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { socialFields } from "@lib/fields/social/social.fields";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      parentId={personId}
      entityResource={ResourceEnum.social}
      relationResource={ResourceEnum.personSocial}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={socialFields}
    />
  );
}
