import { useOne, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';

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
