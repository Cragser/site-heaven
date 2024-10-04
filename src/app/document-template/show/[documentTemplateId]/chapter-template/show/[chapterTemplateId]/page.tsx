"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";

interface Props {
  params: {
    chapterTemplateId: string;
    documentTemplateId: string;
  };
}

export default function Page({
  params: { chapterTemplateId, documentTemplateId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={chapterTemplateFields}
      resource={ResourceEnum.chapterTemplate}
      id={chapterTemplateId}
    />
  );
}
