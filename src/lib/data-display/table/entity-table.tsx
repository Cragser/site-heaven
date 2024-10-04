"use client";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { DeleteButton } from "@refinedev/antd";
import React, { useMemo } from "react";
import { camelCase } from "case-anything";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import TableEditButton from "@/lib/data-display/table/button/table-edit-button";
import TableShowButton from "@/lib/data-display/table/button/table-show-button";
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
  const entityCamelCase = useMemo(
    () => camelCase(entityResource),
    [entityResource],
  );

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
      {createColumns({ columns, entityResource })}
      <Table.Column
        title={"Actions"}
        dataIndex="actions"
        render={(_, record: BaseRecord) => {
          const meta: Record<string, string> = {
            [`${entityCamelCase}Id`]: record[`id`] as string,
          };

          return (
            <Space>
              <TableEditButton
                defaultNavigation={defaultNavigation}
                navigation={navigation?.edit}
                record={record}
                entityResource={entityResource}
                meta={meta}
              />
              <TableShowButton
                defaultNavigation={defaultNavigation}
                navigation={navigation?.show}
                record={record}
                entityResource={entityResource}
                meta={meta}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={entityResource}
              />
            </Space>
          );
        }}
      />
    </Table>
  );
}
