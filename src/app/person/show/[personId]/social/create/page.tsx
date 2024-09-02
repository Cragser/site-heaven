"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { socialFields } from "@lib/fields/social/social.fields";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <CreateRelationPage
      parentId={personId}
      parentName="person"
      parentSection="person"
      parentResource={ResourceEnum.person}
      entityResource={ResourceEnum.social}
      relationResource={ResourceEnum.personSocial}
      fields={socialFields}
    />
  );
}
