import { useOne } from "@refinedev/core";
import {
  DocumentTemplateChapterTemplate,
  DocumentTemplateType,
} from "@lib/fields/document-template/document-template.fields";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { DocumentType } from "@lib/fields/document/document.fields";
import DocumentComponent from "@components/data-display/document/document-component";
import { normalizePerson } from "@components/data-display/document/util/normalize-person";

import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import { createChapters } from "@components/data-display/document/util/create-chapters";

interface DocumentPersonResponse extends DocumentType {
  documentPerson: {
    personId: string;
  }[];
}

interface Props {
  data: DocumentPersonResponse;
  documentId: string;
}

interface DocumentTemplateChapterTemplateResponse
  extends DocumentTemplateChapterTemplate {
  chapterTemplate: DocumentTemplateType;
}

interface DocumentTemplateResponse extends DocumentTemplateType {
  documentTemplateChapterTemplate: DocumentTemplateChapterTemplateResponse[];
}

export default function PersonDocumentPage({
  data,
  documentId,
}: Readonly<Props>) {
  // get the document template
  const { data: documentTemplateData, isLoading } =
    useOne<DocumentTemplateResponse>({
      id: data.documentTemplateId,
      resource: ResourceEnum.documentTemplate,
    });

  const firstPerson = data.documentPerson[0];

  const { data: personData, isLoading: isLoadingPerson } = useOne<any>({
    id: firstPerson.personId,
    resource: ResourceEnum.person,
  });

  const normalizedPerson = normalizePerson(personData?.data);
  const templateContent =
    documentTemplateData?.data.documentTemplateChapterTemplate.map(
      (item) => item.chapterTemplate,
    );

  // for every chapter template create
  const document: DocumentCreationType = {
    date: "Today",
    subtitle: "Desconocido uno",
    title: documentTemplateData?.data.title as string,
    chapters: createChapters(normalizedPerson, templateContent as any),
    data: normalizedPerson,
    templateContent,
    person: personData?.data,
    documentId: documentId,
  };

  if (isLoading || isLoadingPerson) {
    return <div>Loading...</div>;
  }
  return <DocumentComponent {...document} />;
}
