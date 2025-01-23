"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { useMemo } from "react";
import richTextRender from "@client/util/ant/fields/rich-text-render";

interface Props {
  params: {
    chapterTemplateId: string;
    documentTemplateId: string;
  };
}

export default function ContractEditPage({
  params: { chapterTemplateId, documentTemplateId },
}: Readonly<Props>) {
  const newChapterTemplateFields = useMemo(() => {
    const newChapterTemplateFields = [...chapterTemplateFields];

    newChapterTemplateFields.splice(
      newChapterTemplateFields.indexOf("content" as any),
      1,
    );

    newChapterTemplateFields.push({
      key: "content",
      dataIndex: ["content"],
      type: "rich-text",
      render: richTextRender,
    });

    console.log(newChapterTemplateFields);
    return newChapterTemplateFields;
  }, []);

  return (
    <EditFormPage
      entityResource={ResourceEnum.chapterTemplate}
      columns={newChapterTemplateFields}
      id={chapterTemplateId}
      parentId={documentTemplateId}
    />
  );
}
