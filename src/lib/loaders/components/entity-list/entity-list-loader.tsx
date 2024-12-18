import useTableSimple from "@client/hooks/pages/list/use-table-simple";
import EntityTable from "@/lib/data-display/table/variant/entity-table/entity-table";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { ItemConfig } from "@/lib/@types/table-column.type";

interface Props {
  resource: ResourceEnum;
  filterId: string;
  filterIdName: string;
  fields: ItemConfig[];
}

export default function EntityListLoader({
  resource,
  filterId,
  filterIdName,
  fields,
}: Readonly<Props>) {
  const { tableProps, tableQuery } = useTableSimple({
    resource: resource,
    filterId: filterId,
    filterIdName: filterIdName,
  });
  return (
    <StateManager
      isLoading={tableQuery.isLoading}
      isError={tableQuery.isError}
      data={tableQuery.data}
    >
      <EntityTable
        tableProps={tableProps}
        entityResource={resource}
        columns={fields}
      />
    </StateManager>
  );
}
