import { useOne, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';

// judicial-process
export const useJudicialProcessTitle = (
  judicialProcessId: string,
  key: string
) => {
  const translate = useTranslate();
  const { data } = useOne({
    id: judicialProcessId,
    resource: ResourceEnum.judicialProcess,
  });

  return {
    title: replaceTemplate(translate(key), {
      [ResourceEnum.judicialProcess]: data?.data,
    }),
  };
};
