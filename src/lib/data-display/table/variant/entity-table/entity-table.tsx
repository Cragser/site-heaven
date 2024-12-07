"use client";
import React from "react";
import { CreateListProps } from "@/lib/pages/types/list-page.type";
import AntTable from "@/lib/data-display/table/wraps/ant-table";
import { TableColumnsType } from "antd";
import {
  generateColumnKey,
  generateColumnRender,
  generateTranslateKey,
} from "@/lib/data-display/table/blocks/column-list/util/helper";
import { calculateDataIndex } from "@/lib/data-display/table/blocks/column-list/util/calculate-column-data-index";
import generateActionButtons from "@/lib/data-display/table/variant/entity-table/blocks/navigation/generator/generate-action-buttons";
import { useTranslate } from "@refinedev/core";
import { AnyObject } from "@/lib/@types/record.type";

export interface EntityTableProps extends CreateListProps {
  tableProps: any;
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
}: Readonly<EntityTableProps>) {
  const translate = useTranslate();

  const newColumns: TableColumnsType<AnyObject> = columns.map((item) => {
    return {
      key: generateColumnKey(item),
      dataIndex: calculateDataIndex(entityResource, item.dataIndex),
      title: translate(generateTranslateKey(item, entityResource)),
      render: generateColumnRender(item),
    };
  });

  newColumns.push({
    key: "actions",
    dataIndex: ["actions"],
    title: "Actions",
    render: generateActionButtons({
      entityResource,
    }),
  });
  return <AntTable tableProps={tableProps} columns={newColumns} />;
}
