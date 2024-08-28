"use client";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { Space, Table } from "antd";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import React from "react";
import { camelCase } from "case-anything";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { CreateListProps } from "@components/data-display/entity-collection/list/create-list";

export interface EntityTableProps extends CreateListProps {
  // entityResource: ResourceEnum;
  // columns: ItemConfig[];
  tableProps: any;
  // navigation?: {
  //   edit?: Navigation;
  //   show?: Navigation;
  //   delete?: Navigation;
  // };
  // Editar debería mandar a la
  // send meta
  // send record value for id meta?
}

export default function EntityTable({
  entityResource,
  columns,
  tableProps,
  navigation,
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
      {columns.map((item) => {
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
              {Boolean(navigation?.edit) !== false && (
                <EditButton
                  hideText
                  size="middle"
                  onClick={() => {
                    if (
                      !navigation?.edit ||
                      navigation?.edit.resource === false
                    ) {
                      return;
                    }
                    goTo({
                      resource: navigation?.edit?.resource ?? entityResource,
                      action: "edit",
                      meta: navigation?.edit?.createMeta?.(record) ?? meta,
                    });
                  }}
                />
              )}
              {Boolean(navigation?.show) !== false && (
                <ShowButton
                  hideText
                  size="middle"
                  onClick={() => {
                    if (
                      !navigation?.show ||
                      navigation?.show.resource === false
                    ) {
                      return;
                    }
                    goTo({
                      resource: navigation?.show?.resource ?? entityResource,
                      action: "show",
                      meta: navigation?.show?.createMeta?.(record) ?? meta,
                    });
                  }}
                />
              )}
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
