import React from "react";
import { Alert, Table, TableColumnsType } from "antd";
import { TableProps } from "antd/es/table/InternalTable";
import { TableProvider } from "@/lib/data-display/table/state/context/table-context";

interface Props {
  tableProps: TableProps;
  columns: TableColumnsType;
  // temporal field
  type: "entity" | "relation" | "inner";
}

export default function AntTable({
  tableProps,
  columns,
  type,
}: Readonly<Props>) {
  return (
    <TableProvider>
      <Alert
        message={`Esta tabla fue revisada ${type}`}
        type="warning"
        showIcon
        closable
      />
      <Table
        {...tableProps}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
        columns={columns}
      />
    </TableProvider>
  );
}
