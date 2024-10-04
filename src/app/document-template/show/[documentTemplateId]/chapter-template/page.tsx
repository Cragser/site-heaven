"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
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
    <ListParentRelationPage
      parentId={documentTemplateId}
      entityResource={ResourceEnum.chapterTemplate}
      relationResource={ResourceEnum.documentTemplateChapterTemplate}
      parentResource={ResourceEnum.documentTemplate}
      parent="documentTemplate"
      columns={chapterTemplateFields}
    />
  );
}
