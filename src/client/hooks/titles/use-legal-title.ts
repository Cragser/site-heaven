import { useOne, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';

export const useLegalTitle = (legalId: string, key: string) => {
  const translate = useTranslate();
  const { data } = useOne({
    id: legalId,
    resource: ResourceEnum.legal,
  });

  return {
    title: replaceTemplate(translate(key), { legal: data?.data }),
  };
};
