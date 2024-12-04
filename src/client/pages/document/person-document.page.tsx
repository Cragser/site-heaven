import {
  DocumentTemplateChapterTemplate,
  DocumentTemplateType,
} from "@lib/fields/document-template/document-template.fields";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { DocumentType } from "@lib/fields/document/document.fields";
import DocumentComponent from "@components/data-display/document/document-component";
import { createChapters } from "@components/data-display/document/util/create-chapters";
import { useGetDocumentAndEntityData } from "@client/hooks/pages/read/use-get-document-and-entity-data";
import getPersonData from "@client/pages/document/data/get-person-data";

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

  const { itemData, documentTemplateData, isLoading, isLoadingData } =
    useGetDocumentAndEntityData({
      data,
      resource: ResourceEnum.person,
    });

  const templateContent =
    documentTemplateData?.data.documentTemplateChapterTemplate.map(
      (item: any) => item.chapterTemplate,
    );

  const dataToReplace = getPersonData(itemData?.data);

  if (isLoading || isLoadingData) {
    return <div>Loading...</div>;
  }

  return (
    <DocumentComponent
      chapters={createChapters(dataToReplace, templateContent as any)}
      dataToReplace={dataToReplace}
      date={"Today"}
      documentId={documentId}
      subtitle={"Análisis Completo de Antecedentes y Situación Actual"}
      templateContent={templateContent}
      title={documentTemplateData?.data.title as string}
    />
  );
}
