"use client";

import ListPage from "@/lib/pages/list/list-page";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { governmentFields } from "@lib/fields/government/government.fields";

export default function PersonList() {
  return (
    <ListPage
      columns={governmentFields}
      entityResource={ResourceEnum.government}
    />
  );
}
