import { useOne } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  resource: ResourceEnum;
  data: any;
}

export function useGetDocumentAndEntityData({
  data,
  resource,
}: Readonly<Props>) {
  const { data: documentTemplateData, isLoading } = useOne({
    id: data.documentTemplateId,
    resource: ResourceEnum.documentTemplate,
  });

  const firstItem =
    ResourceEnum.person === resource
      ? data.documentPerson[0]
      : data.documentCompany[0];

  const firstItemId =
    ResourceEnum.person === resource ? firstItem.personId : firstItem.companyId;

  const { data: itemData, isLoading: isLoadingData } = useOne({
    id: firstItemId,
    resource: resource,
  });

  const templateContent =
    documentTemplateData?.data.documentTemplateChapterTemplate.map(
      (item: any) => item.chapterTemplate,
    );

  return {
    itemData,
    documentTemplateData,
    isLoading,
    isLoadingData,
    templateContent,
  };
}
