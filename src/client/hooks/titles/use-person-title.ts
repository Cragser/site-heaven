import { useOne, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { replaceTemplate } from "@client/util/ant/titles/replace-template";
import { SectionEntityType } from "@page/types/section-entity.type";

export const usePersonTitle = (personId: string, key: string) => {
  const translate = useTranslate();
  const { data: person } = useOne({
    id: personId,
    resource: ResourceEnum.person,
  });

  return {
    title: replaceTemplate(translate(key), { person: person?.data }),
  };
};

export const useCompanyTitle = (companyId: string, key: string) => {
  const translate = useTranslate();
  const { data: company } = useOne({
    id: companyId,
    resource: ResourceEnum.company,
  });

  return {
    title: replaceTemplate(translate(key), { company: company?.data }),
  };
};

export const useEntityTitle = (
  entityId: string,
  key: string,
  parent: SectionEntityType,
) => {
  const translate = useTranslate();
  const sectionMap: Record<SectionEntityType, ResourceEnum> = {
    person: ResourceEnum.person,
    company: ResourceEnum.company,
    government: ResourceEnum.government,
    document: ResourceEnum.document,
    documentTemplate: ResourceEnum.documentTemplate,
  };
  const { data: entity, error } = useOne({
    id: entityId,
    resource: sectionMap[parent],
  });

  if (error) {
    return {
      title: translate(key),
      entity: null,
    };
  }

  return {
    title: replaceTemplate(translate(key), { [parent]: entity?.data }),
    entity,
  };
};
