import { useTable } from "@refinedev/antd";
import { CrudFilters } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";

interface Props {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  defaultNavigation?: boolean;
  initialFilter?: CrudFilters;
  navigation?: NavigationCrud;
}

export default function useListPage({
  entityResource,
  initialFilter,
}: Readonly<Props>) {
  const { tableProps, tableQuery, searchFormProps } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: entityResource,
    syncWithLocation: true,
    filters: {
      mode: "server",
      initial: initialFilter ?? [],
    },
    onSearch: (params: { q: string }) => {
      const filters: CrudFilters = [];
      if (params?.q) {
        filters.push({
          field: "filter",
          operator: "eq",
          value: `name||$contL||${params.q}`,
        });
      } else if (initialFilter) {
        filters.push(...initialFilter);
      } else {
        filters.push({
          field: "filter",
          operator: "eq",
          value: `name||$ne||NULL` as string,
        });
      }
      return filters;
    },
  });
  return {
    tableProps,
    tableQuery,
    searchFormProps,
  };
}
