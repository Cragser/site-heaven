import { ResourceEnum } from "@lib/enums/resource.enum";
import DocumentComponent from "@components/data-display/document/document-component";
import { createChapters } from "@components/data-display/document/util/create-chapters";
import { useGetDocumentAndEntityData } from "@client/hooks/pages/read/use-get-document-and-entity-data";

interface Props {
  documentId: string;
  data: {
    documentCompany: Array<{
      id: string;
      companyId: string;
      documentId: string;
    }>;
    documentTemplateId: string;
  };
}

export default function CompanyDocumentPage({
  documentId,
  data,
}: Readonly<Props>) {
  const { itemData, documentTemplateData, isLoading, isLoadingData } =
    useGetDocumentAndEntityData({
      data,
      resource: ResourceEnum.company,
    });

  if (isLoading || isLoadingData) {
    return <div>Loading...</div>;
  }

  const templateContent =
    documentTemplateData?.data.documentTemplateChapterTemplate.map(
      (item: any) => item.chapterTemplate,
    );

  const dataToReplace = itemData?.data;

  return (
    <DocumentComponent
      chapters={createChapters(dataToReplace, templateContent)}
      dataToReplace={dataToReplace}
      date={"Today"}
      documentId={documentId}
      subtitle={"Análisis Completo de Antecedentes y Situación Actual"}
      templateContent={templateContent}
      title={documentTemplateData?.data.title as string}
    />
  );
}
