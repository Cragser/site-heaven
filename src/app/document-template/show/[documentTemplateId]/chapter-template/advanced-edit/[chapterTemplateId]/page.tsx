"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";

interface Props {
  params: {
    chapterTemplateId: string;
    documentTemplateId: string;
  };
}

export default function ContractEditPage({
  params: { chapterTemplateId, documentTemplateId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.chapterTemplate}
      columns={chapterTemplateFields}
      id={chapterTemplateId}
      parentId={documentTemplateId}
    />
  );
}
