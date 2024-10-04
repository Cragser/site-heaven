import { useTable } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

interface Props {
  parentId: string;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
}

export default function useTableQuery({
  parentId,
  relationResource,
  parentResource,
}: Props) {
  const parent = camelCase(parentResource);
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `${parent}Id||$eq||${parentId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: relationResource,
    syncWithLocation: true,
  });

  return {
    tableProps,
    tableQueryResult,
  };
}
