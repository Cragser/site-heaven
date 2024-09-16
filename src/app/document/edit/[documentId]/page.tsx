"use client";

import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { documentFields } from "@lib/fields/document/document.fields";

interface Props {
  params: {
    documentId: string;
  };
}

export default function ContractEditPage({
  params: { documentId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.document}
      columns={documentFields}
      id={documentId}
    />
  );
}
