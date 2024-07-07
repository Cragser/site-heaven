import { useOne, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { replaceTemplate } from '@client/util/ant/titles/replace-template';

// Desahogo del juicio [trial.type] en la causa {[judicial_process.name]}
export function useForTrialShow(
  trialId: string,
  judicialProcessId: string,
  key: string
) {
  const translate = useTranslate();
  const { data: trial } = useOne({
    id: trialId,
    resource: ResourceEnum.trial,
  });
  const { data: judicialProcess } = useOne({
    id: judicialProcessId,
    resource: ResourceEnum.judicialProcess,
  });

  console.log(judicialProcess);

  return {
    title: replaceTemplate(translate(key), {
      [ResourceEnum.judicialProcess]: judicialProcess?.data,
      trial: trial?.data,
    }),
  };
}
