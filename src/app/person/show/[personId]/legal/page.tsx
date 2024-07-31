"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";

interface Props {
  params: {
    personId: string;
  };
}

export default function PersonLegalList({
  params: { personId },
}: Readonly<Props>) {
  const columns = ["name", "comments"];

  const formatedColumns = [
    ...columns.map((column) => ({
      dataIndex: [column],
    })),
  ];

  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.legal}
      relationResource={ResourceEnum.personLegal}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={formatedColumns}
    />
  );
}
