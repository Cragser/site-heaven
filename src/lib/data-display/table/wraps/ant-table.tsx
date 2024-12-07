import React from "react";
import { Alert, Table, TableColumnsType } from "antd";
import { TableProps } from "antd/es/table/InternalTable";
import { TableProvider } from "@/lib/data-display/table/state/context/table-context";

interface Props {
  tableProps: TableProps;
  columns: TableColumnsType;
}

export default function AntTable({ tableProps, columns }: Readonly<Props>) {
  return (
    <TableProvider>
      <Alert
        message="Esta tabla fue revisada"
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
