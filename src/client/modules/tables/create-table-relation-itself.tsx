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

interface Props {
  // entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  parent: any;
  parentName: SectionEntityType;
  tableProps: any;
  columns: ItemConfig[];
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
}: Props) {
  const translate = useTranslate();
  const getToPath = useGetToPath();
  const go = useGo();

  const columnsRender = columns.map((item) => {
    const key = item.key ?? item.dataIndex.join(".");
    return (
      <Table.Column
        key={key}
        dataIndex={[entityName, ...item.dataIndex]}
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
          const meta = {
            [`${entityName}Id`]: record[`${entityName}Id`],
            [`${parentName}Id`]: record[`${parentName}Id`],
          };

          const handleClick = (action: Action) => {
            // ESTE ES EL CAMBIO MÁS IMPORTANTE
            const to = getToPath({
              resource: resourceNavigation[parentResource],
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
                onClick={() => {
                  handleClick("edit");
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
