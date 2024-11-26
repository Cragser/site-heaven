"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { subchapterTemplateFields } from "@lib/fields/chapter-template/subchapter-template.fields";
import { CreateForm } from "@/lib/pages/create/create-form";

interface Props {
  params: {
    documentTemplateId: string;
    chapterTemplateId: string;
  };
}

export default function Page({
  params: { documentTemplateId, chapterTemplateId },
}: Readonly<Props>) {
  return (
    <CreateForm
      parentId={documentTemplateId}
      entityResource={ResourceEnum.subchapterTemplate}
      meta={{ chapterTemplateId }}
      columns={subchapterTemplateFields}
    />
  );
}
