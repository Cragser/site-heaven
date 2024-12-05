"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";

interface Props {
  params: {
    companyId: string;
    id: string;
  };
}

export default function RelationEditPage({ params: { companyId, id } }: Props) {
  return (
    <EditFormPage
      id={id}
      entityResource={ResourceEnum.companyRelation}
      meta={{
        companyId,
      }}
      columns={[
        {
          key: "comment",
          dataIndex: ["comment"],
          type: "textarea",
          columnConfig: {
            overrideDataIndex: true,
          },
        },
      ]}
    />
  );
}
