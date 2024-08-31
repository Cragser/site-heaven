"use client";

import ListPage from "@/lib/pages/list/list-page";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";
import { ResourceEnum } from "@/domain/enums/resource.enum";

export default function Page() {
  return (
    <ListPage
      columns={personRelationTypeFields}
      entityResource={ResourceEnum.personRelationType}
    />
  );
}
