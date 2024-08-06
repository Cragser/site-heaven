"use client";

import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { dateRender } from "@client/util/ant/fields/dateRender";

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

  const formatedColumns = [
    ...columns.map((column) => ({
      dataIndex: [column],
    })),
    {
      dataIndex: ["estimatedPeopleImpacted"],
      render: dateRender,
    },
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
