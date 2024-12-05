import {
  Action,
  BaseRecord,
  useGetToPath,
  useGo,
  useTranslate,
} from "@refinedev/core";
import { Space, Table } from "antd";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { resourceNavigation } from "@client/navigation/resource-navigation";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface Props {
  // entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  parent: any;
  parentName: SectionEntityType;
  tableProps: any;
  columns: ItemConfig[];
  meta?: Record<string, any>;
}

function CreateTableRelationItself({
  // relatedCompany -> Es un nombre de la entidad como se llama el campo
  parent: entityName,
  parentName,
  // EN TEORIA SOLO NECESITO LA ENTIDAD COMPANY
  parentResource,

  relationResource,
  tableProps,
  // company
  columns,
  meta,
}: Readonly<Props>) {
  const translate = useTranslate();
  const getToPath = useGetToPath();
  const go = useGo();
  const goTo = useGoTo();

  const columnsRender = columns.map((item) => {
    const key = item.key ?? item.dataIndex.join(".");
    const dataIndex = item.columnConfig?.overrideDataIndex
      ? item.dataIndex
      : [entityName, ...item.dataIndex];
    return (
      <Table.Column
        key={key}
        dataIndex={dataIndex}
        title={translate(`${entityName}.fields.${key}`)}
        render={item.render || ((text: string) => text)}
      />
    );
  });

  return (
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
          const localMeta = {
            [`${entityName}Id`]: record[`${entityName}Id`],
            [`${parentName}Id`]: record[`${parentName}Id`],
            id: record.id,
            ...meta,
          };

          const handleClick = (action: Action) => {
            // ESTE ES EL CAMBIO MÁS IMPORTANTE
            const to = getToPath({
              resource: resourceNavigation[parentResource],
              action,
              meta: localMeta,
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
                recordItemId={record.id}
                resource={relationResource}
                onClick={() => {
                  // handleClick("edit");
                  goTo({
                    action: "edit",
                    resource: relationResource,
                    meta: localMeta,
                  });
                }}
              />
              <ShowButton
                hideText
                size="middle"
                onClick={() => {
                  handleClick("show");
                }}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={relationResource}
              />
            </Space>
          );
        }}
      />
    </Table>
  );
}

export default CreateTableRelationItself;
