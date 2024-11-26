"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { subchapterTemplateFields } from "@lib/fields/chapter-template/subchapter-template.fields";

interface Props {
  params: {
    chapterTemplateId: string;
    documentTemplateId: string;
    subchapterTemplateId: string;
  };
}

export default function Page({
  params: { chapterTemplateId, documentTemplateId, subchapterTemplateId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.subchapterTemplate}
      columns={subchapterTemplateFields}
      id={subchapterTemplateId}
      parentId={chapterTemplateId}
    />
  );
}
