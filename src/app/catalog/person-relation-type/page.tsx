"use client";

import CreateTable from "@modules/tables/generator/create-table";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";
import { ResourceEnum } from "@/domain/enums/resource.enum";

export default function PersonRelationTypeListPage() {
  return (
    <CreateTable
      columns={personRelationTypeFields}
      entity={"person-relation-type"}
      entityResource={ResourceEnum.personRelationType}
    />
  );
}
