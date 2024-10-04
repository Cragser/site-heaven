"use client";

import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { documentTemplateFields } from "@lib/fields/document-template/document-template.fields";

interface Props {
  params: {
    documentTemplateId: string;
  };
}

export default function ContractEditPage({
  params: { documentTemplateId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.documentTemplate}
      columns={documentTemplateFields}
      id={documentTemplateId}
    />
  );
}
