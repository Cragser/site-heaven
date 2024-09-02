"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { educationFields } from "@lib/fields/education/education.fields";

export default function PersonEducationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      parentId={personId}
      entityResource={ResourceEnum.education}
      relationResource={ResourceEnum.personEducation}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={educationFields}
    />
  );
}
