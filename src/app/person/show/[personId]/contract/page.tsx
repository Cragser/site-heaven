"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { PersonPageType } from "@page/types/pages/person/person-page.type";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  const columns = [
    "name",
    "concept",
    "startDate",
    "contractor",
    "notes",
    "value",
  ];

  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.personContract}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={columns.map((column) => ({
        dataIndex: [column],
      }))}
    />
  );
}
