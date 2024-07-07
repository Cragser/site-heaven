import { useSelect } from '@refinedev/antd';
import { NationalityType } from '@lib/types/helper/nationality.type';
import { ResourceEnum } from '@lib/enums/resource.enum';

interface Props {
  initialValue?: string;
}
export function useNationalitySelect({ initialValue }: Props) {
  const { selectProps } = useSelect<NationalityType>({
    // defaultValue: initialValue ?? '6f811e5a-e80f-42c5-bb39-1e72e2fb9198',
    defaultValue: initialValue ?? '6bc8dd01-7929-4c48-855c-4a6f2517edda',
    onSearch: (search) => {
      if (!search) return [];
      return [
        {
          field: 'filter',
          operator: 'eq',
          value: `name||$cont||${search}`,
        },
      ];
    },
    optionLabel: (item: NationalityType) => {
      return item.name;
    },
    optionValue: (item: NationalityType) => item.id,
    pagination: {
      mode: 'client',
    },
    resource: ResourceEnum.nationalityHelper,
  });
  return {
    selectProps,
  };
}
