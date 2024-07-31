"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { dateRender } from "@client/util/ant/fields/dateRender";

export default function PersonEducationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  const columns = ["name", "institution", "license", "validated"];

  const formatedColumns = [
    ...columns.map((column) => ({
      dataIndex: [column],
    })),
    {
      dataIndex: ["initialDate"],
      render: dateRender,
    },
    {
      dataIndex: ["endDate"],
      render: dateRender,
    },
  ];

  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.education}
      relationResource={ResourceEnum.personEducation}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={formatedColumns}
    />
  );
}
