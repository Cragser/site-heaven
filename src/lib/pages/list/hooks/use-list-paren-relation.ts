import { useTable } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { camelCase } from "case-anything";
import { useMemo } from "react";

interface Props {
  sectionId: string;
  relationResource: ResourceEnum;
  sectionResource: ResourceEnum;

  columns: ItemConfig[];
}

export default function useListParentRelation({
  sectionResource,
  sectionId,
  relationResource,
}: Readonly<Props>) {
  // use memo to render only once this value
  const sectionCamelCase = useMemo(
    () => camelCase(sectionResource),
    [sectionResource],
  );
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      mode: "server",
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `${sectionCamelCase}Id||$eq||${sectionId}`,
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
