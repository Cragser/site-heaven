"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import {
  documentFields,
  DocumentType,
} from "@lib/fields/document/document.fields";
import { useOne } from "@refinedev/core";
import PersonDocumentPage from "@client/pages/document/person-document.page";

interface Props {
  params: {
    documentId: string;
  };
}

export default function Page({ params: { documentId } }: Readonly<Props>) {
  const { data, isLoading } = useOne<DocumentType>({
    id: documentId,
    resource: ResourceEnum.document,
  });

  if (isLoading) return <div>Loading...</div>;
  if (data?.data?.entityType === "person") {
    // @ts-ignore TODO: Check this
    return <PersonDocumentPage data={data.data} documentId={documentId} />;
  }
  // get the document template
  // get the document template fields
  // get the resource
  return (
    <ShowEntityPage
      fields={documentFields}
      resource={ResourceEnum.document}
      id={documentId}
    />
  );
}
