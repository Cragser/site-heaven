"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { documentTemplateFields } from "@lib/fields/document-template/document-template.fields";
import { chapterTemplateFields } from "@lib/fields/chapter-template/chapter-template.fields";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { Divider } from "antd";
import { BaseRecord } from "@refinedev/core";
import { ListRelationComplexPage } from "@/lib/pages/list/list-relation-complex.page";

interface Props {
  params: {
    documentTemplateId: string;
  };
}

export default function Page({ params: { documentTemplateId } }: Props) {
  const navigationItem = {
    resource: ResourceEnum.documentTemplateChapterTemplate,
    createMeta: (record: BaseRecord) => ({
      documentTemplateId,
      chapterTemplateId: record.id,
    }),
  };
  return (
    <>
      <ShowEntityPage
        fields={documentTemplateFields}
        resource={ResourceEnum.documentTemplate}
        id={documentTemplateId}
      />
      <Divider />
      <ListRelationComplexPage
        parentId={documentTemplateId}
        entityResource={ResourceEnum.chapterTemplate}
        relationResource={ResourceEnum.documentTemplateChapterTemplate}
        parentResource={ResourceEnum.documentTemplate}
        columns={chapterTemplateFields}
        navigation={{
          create: navigationItem,
        }}
      />
    </>
  );
}
