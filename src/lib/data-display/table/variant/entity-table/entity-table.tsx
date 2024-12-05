"use client";
import { Table } from "antd";
import React from "react";
import { CreateListProps } from "@/lib/pages/types/list-page.type";
import { generateColumns } from "@/lib/data-display/table/variant/entity-table/blocks/column-list/generate-columns";

export interface EntityTableProps extends CreateListProps {
  tableProps: any;
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
}: Readonly<EntityTableProps>) {
  return (
    <Table
      {...tableProps}
      rowKey="id"
      pagination={{
        ...tableProps.pagination,
        position: ["bottomCenter"],
        size: "small",
      }}
    >
      {generateColumns({
        columns,
        entityResource,
      })}
    </Table>
  );
}
