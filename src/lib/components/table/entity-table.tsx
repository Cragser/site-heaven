"use client";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { Space, Table } from "antd";
import { DeleteButton } from "@refinedev/antd";
import React from "react";
import { camelCase } from "case-anything";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { CreateListProps } from "@/lib/pages/list/list-page";
import TableEditButton from "@/lib/components/table/button/table-edit-button";
import TableShowButton from "@/lib/components/table/button/table-show-button";

export interface EntityTableProps extends CreateListProps {
  tableProps: any;
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
  navigation,
  defaultNavigation = true,
}: EntityTableProps) {
  const entityCamelCase = camelCase(entityResource);
  const goTo = useGoTo();
  const translate = useTranslate();

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
      {columns.map((item, index) => {
        const key = item.key ?? item.dataIndex.join(".");
        const translateKey =
          item.translateKey ?? `${entityResource}.fields.${key}`;
        return (
          <Table.Column
            key={key}
            dataIndex={item.dataIndex}
            title={translate(translateKey)}
            render={item.render || ((text: string) => text)}
          />
        );
      })}
      <Table.Column
        title={"Actions"}
        dataIndex="actions"
        render={(_, record: BaseRecord) => {
          const meta = {
            [`${entityCamelCase}Id`]: record[`id`] as string,
          };
          return (
            <Space>
              <TableEditButton
                defaultNavigation={defaultNavigation}
                navigation={navigation?.edit}
                goTo={goTo}
                record={record}
                entityResource={entityResource}
                meta={meta}
              />
              <TableShowButton
                defaultNavigation={defaultNavigation}
                navigation={navigation?.show}
                goTo={goTo}
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
