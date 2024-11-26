import { useOne } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { DocumentType } from "@lib/fields/document/document.fields";
import { DocumentTemplateType } from "@lib/fields/document-template/document-template.fields";
import { normalizePerson } from "@components/data-display/document/util/normalize-person";
import { createChapters } from "@components/data-display/document/util/create-chapters";

interface DocumentPersonResponse extends DocumentType {
  documentPerson: {
    personId: string;
  }[];
}

interface DocumentTemplateChapterTemplateResponse {
  chapterTemplate: DocumentTemplateType;
}

interface DocumentTemplateResponse extends DocumentTemplateType {
  documentTemplateChapterTemplate: DocumentTemplateChapterTemplateResponse[];
}

export const usePersonDocument = (data: DocumentPersonResponse) => {
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

  const createDocument = () => {
    if (isLoading || isLoadingPerson) return null;

    const normalizedPerson = normalizePerson(personData?.data);
    const templateContent =
      documentTemplateData?.data.documentTemplateChapterTemplate.map(
        (item) => item.chapterTemplate,
      );

    return {
      date: "Today",
      subtitle: "Desconocido uno",
      title: documentTemplateData?.data.title as string,
      chapters: createChapters(normalizedPerson, templateContent as any),
      data: normalizedPerson,
      templateContent,
    };
  };

  return {
    isLoading: isLoading || isLoadingPerson,
    document: createDocument(),
  };
};
