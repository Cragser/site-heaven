"use client";

import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  const columns = [
    "name",
    "type",
    "description",
    "link",
    "createdAt",
    "estimatedPeopleImpacted",
  ];

  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.social}
      relationResource={ResourceEnum.personSocial}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={columns.map((column) => ({
        dataIndex: [column],
      }))}
    />
  );
}
