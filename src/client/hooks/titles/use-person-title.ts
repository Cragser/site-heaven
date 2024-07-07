import { useOne, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';

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
