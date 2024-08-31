"use client";

import ListPage from "@/lib/pages/list/list-page";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { personFields } from "@lib/fields/person/person.fields";

export default function PersonList() {
  return (
    <ListPage columns={personFields} entityResource={ResourceEnum.person} />
  );
}
