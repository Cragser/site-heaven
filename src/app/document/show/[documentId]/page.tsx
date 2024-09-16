"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { documentFields } from "@lib/fields/document/document.fields";

interface Props {
  params: {
    documentId: string;
  };
}

export default function Page({ params: { documentId } }: Props) {
  return (
    <ShowEntityPage
      fields={documentFields}
      resource={ResourceEnum.document}
      id={documentId}
    />
  );
}
