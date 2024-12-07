"use client";
import React from "react";
import { CreateListProps } from "@/lib/pages/types/list-page.type";
import { generateColumns } from "@/lib/data-display/table/variant/entity-table/blocks/column-list/generate-columns";
import AntTable from "@/lib/data-display/table/wraps/ant-table";

export interface EntityTableProps extends CreateListProps {
  tableProps: any;
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
}: Readonly<EntityTableProps>) {
  return (
    <AntTable tableProps={tableProps}>
      {generateColumns({
        columns,
        entityResource,
      })}
    </AntTable>
  );
}
