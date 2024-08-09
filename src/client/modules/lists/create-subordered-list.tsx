"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Button, Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { kebabCase } from "lodash";
import { camelCase } from "case-anything";
import { ReactNode } from "react";

interface Props {
  params: Record<string, string>;
  // ResourceEnum.judicialProcess
  resource: ResourceEnum;
  navigationResource: ResourceEnum;
  // parent: legal
  parentName: string;
  // ['name', 'comments']
  fields: string[];

  title?: string;
}

export default function CreateSuborderedList({
  params,
  resource,
  navigationResource,
  parentName,
  title,
  fields,
}: Readonly<Props>) {
  const kebabCaseResource = kebabCase(resource);
  const camelCaseResource = camelCase(resource);
  const camelCaseParent = camelCase(parentName);
  const id = params[`${parentName}Id`];
  if (!id) {
    console.error(`No ${camelCaseParent}Id found in params`);
  }
  const goTo = useGoTo();
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `${camelCaseParent}Id||$eq||${id}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: resource,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  const fieldsNodes: ReactNode[] = fields.map((field) => (
    <Table.Column
      dataIndex={[field]}
      title={translate(`${kebabCaseResource}.fields.${field}`)}
    />
  ));

  return (
    <List
      title={title}
      resource={resource}
      breadcrumb={false}
      headerButtons={[
        <Space>
          <Button
            onClick={() => {
              goTo({
                action: "create",
                resource: navigationResource,
                meta: params,
              });
            }}
          >
            Crear {translate(`${kebabCaseResource}.fields.name`)}
          </Button>
        </Space>,
      ]}
    >
      <Table
        {...(tableProps as any)}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
      >
        {fieldsNodes}
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.id}
                onClick={() => {
                  goTo({
                    action: "edit",
                    resource: navigationResource,
                    meta: {
                      ...params,
                      [`${camelCaseResource}Id`]: record.id as string,
                    },
                  });
                }}
              />
              <ShowButton
                hideText
                size="middle"
                onClick={() => {
                  goTo({
                    action: "show",
                    resource: navigationResource,
                    meta: {
                      ...params,
                      [`${camelCaseResource}Id`]: record.id as string,
                    },
                  });
                }}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={resource}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
