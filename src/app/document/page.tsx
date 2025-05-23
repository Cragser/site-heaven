"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListPage from "@/lib/pages/list/list-page";
import { documentFields } from "@lib/fields/document/document.fields";

export default function Page() {
  return (
    <ListPage columns={documentFields} entityResource={ResourceEnum.document} />
  );
}
