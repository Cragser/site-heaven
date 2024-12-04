import { useSelect } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { CrudFilters } from "@refinedev/core";

export type Filter = (search: string) => {
  field: string;
  operator: string;
  value: string;
};

interface Props {
  filters?: Filter[];
  excludeIds?: string[];
  resource: ResourceEnum;
}

interface SelectProps {
  selectProps: any;
}

export function useResourceSelect({
  excludeIds = [],
  filters = [],
  resource,
}: Props): SelectProps {
  const initialFilters: CrudFilters =
    excludeIds.length > 0
      ? [
          {
            field: "filter",
            operator: "nin",
            value: `id||$notin||${excludeIds.join(",")}`,
          },
        ]
      : [];

  const searchFilter = [
    (search: string) => ({
      field: "filter",
      operator: "eq",
      value: `name||$cont||${search}`,
    }),
  ];

  const propsToSelect = {
    filters: [...initialFilters, ...searchFilter],
    onSearch: (search: string) => {
      if (!search) return [];
      return filters.map((filter) => filter(search));
    },
    optionLabel: (item: any) => {
      return item.name ?? item.role;
    },
    optionValue: (item: { id: any }) => {
      return item.id;
    },
    pagination: {
      mode: "client",
    },
    resource,
  };

  // TODO: Arreglar los tipos
  const { selectProps } = useSelect(propsToSelect as any);

  return {
    selectProps,
  };
}
