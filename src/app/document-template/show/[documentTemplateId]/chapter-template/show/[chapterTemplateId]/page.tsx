"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";
import { Divider } from "antd";
import ListInnerPage from "@/lib/pages/list/variant/list-inner/list-inner.page";
import { subchapterTemplateFields } from "@lib/fields/chapter-template/subchapter-template.fields";

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
    <div>
      <ShowEntityPage
        fields={chapterTemplateFields}
        resource={ResourceEnum.chapterTemplate}
        id={chapterTemplateId}
      />
      <Divider />
      <ListInnerPage
        parentId={chapterTemplateId}
        parentResource={ResourceEnum.chapterTemplate}
        relationResource={ResourceEnum.subchapterTemplate}
        columns={subchapterTemplateFields}
        navigationResource={ResourceEnum.chapterTemplateSubchapterTemplate}
        meta={{
          documentTemplateId,
          chapterTemplateId,
        }}
      />
    </div>
  );
}
