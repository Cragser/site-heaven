import { useTable } from "@refinedev/antd";
import { equalFilter } from "@client/util/ant/table/table-filters";

interface Props {
  resource: string;
  filterId: string;
  filterIdName: string;
}

// TODO: Esta función debería ser parte de la librería.
export default function useTableSimple({
  resource,
  filterId,
  filterIdName,
}: Readonly<Props>) {
  const { tableProps, tableQuery } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: resource,
    syncWithLocation: false,
    filters: {
      initial: [equalFilter(filterIdName, filterId)],
    },
  });
  return {
    tableProps,
    tableQuery,
  };
}
