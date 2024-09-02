"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { careerFields } from "@lib/fields/career/career.fields";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <CreateRelationPage
      parentId={personId}
      parentName="person"
      parentSection="person"
      parentResource={ResourceEnum.person}
      entityResource={ResourceEnum.career}
      relationResource={ResourceEnum.personCareer}
      fields={careerFields}
    />
  );
}
