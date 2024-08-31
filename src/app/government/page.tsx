"use client";

import CreateList from "@components/data-display/entity-collection/list/create-list";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { governmentFields } from "@lib/fields/government/government.fields";

export default function PersonList() {
  return (
    <CreateList
      columns={governmentFields}
      entityResource={ResourceEnum.government}
    />
  );
}
