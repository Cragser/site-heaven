"use client";

import CreateList from "@components/data-display/entity-collection/list/create-list";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";
import { ResourceEnum } from "@/domain/enums/resource.enum";

export default function PersonRelationTypeListPage() {
  return (
    <CreateList
      columns={personRelationTypeFields}
      entityResource={ResourceEnum.personRelationType}
    />
  );
}
