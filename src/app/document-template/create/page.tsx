"use client";

import { CreateForm } from "@/lib/pages/create/create-form";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { documentTemplateFields } from "@lib/fields/document-template/document-template.fields";

export default function Page() {
  return (
    <CreateForm
      columns={documentTemplateFields}
      entityResource={ResourceEnum.documentTemplate}
    />
  );
}
