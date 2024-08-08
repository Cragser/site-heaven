"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { legalFields } from "@lib/fields/legal.fields";

interface Props {
  params: {
    personId: string;
  };
}

export default function PersonLegalList({
  params: { personId },
}: Readonly<Props>) {
  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.legal}
      relationResource={ResourceEnum.personLegal}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={legalFields}
    />
  );
}
