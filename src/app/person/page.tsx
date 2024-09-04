"use client";

import ListPage from "@/lib/pages/list/list-page";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { personFields } from "@lib/fields/person/person.fields";
import { CrudFilters } from "@refinedev/core";

export default function PersonList() {
  const initialFilter: CrudFilters = [
    {
      field: "filter",
      operator: "eq",
      value: `isInvestigated||$eq||true`,
    },
  ];
  return (
    <ListPage
      columns={personFields}
      entityResource={ResourceEnum.person}
      initialFilter={initialFilter}
    />
  );
}
