"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListPage from "@/lib/pages/list/list-page";
import { documentTemplateFields } from "@lib/fields/document-template/document-template.fields";

export default function Page() {
  return (
    <ListPage
      columns={documentTemplateFields}
      entityResource={ResourceEnum.documentTemplate}
    />
  );
}
