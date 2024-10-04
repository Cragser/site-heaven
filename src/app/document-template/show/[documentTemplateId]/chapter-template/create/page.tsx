"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";

interface Props {
  params: {
    documentTemplateId: string;
  };
}

export default function Page({
  params: { documentTemplateId },
}: Readonly<Props>) {
  return (
    <CreateRelationPage
      parentId={documentTemplateId}
      parentName="documentTemplate"
      parentSection="documentTemplate"
      parentResource={ResourceEnum.documentTemplate}
      entityResource={ResourceEnum.chapterTemplate}
      relationResource={ResourceEnum.documentTemplateChapterTemplate}
      meta={{ documentTemplateId }}
      fields={chapterTemplateFields}
    />
  );
}
