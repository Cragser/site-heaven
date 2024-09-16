"use client";

import { CreateForm } from "@/lib/pages/create/create-form";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { documentFields } from "@lib/fields/document/document.fields";

export default function Page() {
  return (
    <CreateForm
      columns={documentFields}
      entityResource={ResourceEnum.document}
    />
  );
}
