import {
  Action,
  BaseRecord,
  useGetToPath,
  useGo,
  useTranslate,
} from "@refinedev/core";
import { Space, Table } from "antd";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { ItemConfig } from "@page/types/table-column.type";
import { camelCase } from "case-anything";
import { resourceNavigation } from "@client/navigation/resource-navigation";

interface Props {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  entity: string;
}

function CreateTable({ entityResource, columns }: Props) {
  const entityCamelCase = camelCase(entityResource);
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: entityResource,
    syncWithLocation: true,
  });

  const translate = useTranslate();
  const getToPath = useGetToPath();
  const go = useGo();
  const columnsRender = columns.map((item) => {
    const key = item.key ?? item.dataIndex.join(".");
    // console.log(item);
    return (
      <Table.Column
        key={key}
        dataIndex={[...item.dataIndex]}
        title={translate(`${entityResource}.fields.${key}`)}
        render={item.render || ((text: string) => text)}
      />
    );
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <Table
        {...(tableProps as any)}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
      >
        {columnsRender}
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => {
            const meta = {
              [`${entityCamelCase}Id`]: record[`id`],
            };

            console.log({ meta });

            const handleClick = (action: Action) => {
              const to = getToPath({
                resource: resourceNavigation[entityResource],
                action,
                meta,
              });
              go({
                to,
              });
            };
            return (
              <Space>
                <EditButton
                  hideText
                  size="middle"
                  resource={entityResource}
                  onClick={() => {
                    handleClick("edit");
                  }}
                />
                <ShowButton
                  hideText
                  size="middle"
                  resource={entityResource}
                  onClick={() => {
                    handleClick("show");
                  }}
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
    </List>
  );
}

export default CreateTable;
