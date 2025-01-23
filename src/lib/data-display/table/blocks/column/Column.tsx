import React, { ReactNode } from "react";
import { useTranslate } from "@refinedev/core";
import { Table } from "antd";

interface TableColumnProps {
  key: string;
  dataIndex: string[];
  title: string;
  render?: (text: string, record: any) => ReactNode;
}

function generateColumnRender(
  render?: (
    value: any,
    record: Record<any, any>,
    index: number,
  ) => React.ReactNode,
) {
  return render || ((text: string, record: any) => text);
}

export default function Column({
  key,
  dataIndex,
  title,
  render,
}: Readonly<TableColumnProps>) {
  const translate = useTranslate();
  // const store = useTableStore();
  // const { selectedRows } = store();
  // console.log(`Row ${key} selected`);
  // console.log({ selectedRows });

  return (
    <Table.Column
      key={key}
      dataIndex={dataIndex}
      title={translate(title)}
      render={generateColumnRender(render)}
    />
  );
}
