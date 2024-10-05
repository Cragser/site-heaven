"use client";
import { Table } from "antd";
import React from "react";
import createColumns from "@/lib/data-display/table/generate/create-columns";
import { CreateListProps } from "@/lib/pages/types/list-page.type";

export interface EntityTableProps extends CreateListProps {
  tableProps: any;
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
  navigation,
  defaultNavigation = true,
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
      // showHeader={false}
    >
      {createColumns({
        columns,
        entityResource,
        navigation,
        defaultNavigation,
      })}
    </Table>
  );
}
