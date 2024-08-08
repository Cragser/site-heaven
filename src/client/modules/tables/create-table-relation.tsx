import {
  Action,
  BaseRecord,
  useGetToPath,
  useGo,
  useTranslate,
} from "@refinedev/core";
import { Space, Table } from "antd";
import { LangTag } from "@lib/enums/language.enum";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import { resourcePath } from "@client/resources/refine-paths";
import { TableColumn } from "@page/types/table-column.type";

interface Props {
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  parent: any;
  parentName: SectionEntityType;
  tableProps: any;
  columns: TableColumn[];
}

function CreateTable({
  parent: entity,
  entityResource,
  relationResource,
  tableProps,
  parentName,
  columns,
}: Props) {
  const translate = useTranslate();
  const getToPath = useGetToPath();
  const go = useGo();
  const columnsRender = columns.map((item) => {
    const key = item.key ?? item.dataIndex.join(".");
    // console.log(item);
    return (
      <Table.Column
        key={key}
        dataIndex={[entity, ...item.dataIndex]}
        title={translate(
          LangTag[`${entity}.fields.${key}` as keyof typeof LangTag]
        )}
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
            [`${entity}Id`]: record[`${entity}Id`],
            [`${parentName}Id`]: record[`${parentName}Id`],
          };

          const handleClick = (action: Action) => {
            const to = getToPath({
              resource: resourcePath[entityResource],
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
                resource={relationResource}
              />
            </Space>
          );
        }}
      />
    </Table>
  );
}

export default CreateTable;
