"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
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
    <ListParentRelationPage
      parentId={personId}
      entityResource={ResourceEnum.legal}
      relationResource={ResourceEnum.personLegal}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={legalFields}
    />
  );
}
