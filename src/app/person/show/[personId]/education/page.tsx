"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { educationFields } from "@/app/person/show/[personId]/education/education.fields";

export default function PersonEducationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.education}
      relationResource={ResourceEnum.personEducation}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={educationFields}
    />
  );
}
