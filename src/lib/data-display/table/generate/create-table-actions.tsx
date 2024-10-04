import { Space, Table } from "antd";
import { BaseRecord } from "@refinedev/core";
import TableEditButton from "@/lib/data-display/table/button/table-edit-button";
import TableShowButton from "@/lib/data-display/table/button/table-show-button";
import { DeleteButton } from "@refinedev/antd";
import React from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";

interface Props {
  entityResource: ResourceEnum;
  parentResource: ResourceEnum;
  navigation?: NavigationCrud;
  defaultNavigation: boolean;
  goTo: any;
}

export default function generateTableActions({
  entityResource,
  parentResource,
  navigation,
  defaultNavigation,
  goTo,
}: Props) {
  const entityCamelCase = camelCase(entityResource);
  const parentCamelCase = camelCase(parentResource);
  return (
    <Table.Column
      title={"Actions"}
      dataIndex="actions"
      render={(_, record: BaseRecord) => {
        const meta = {
          [`${entityCamelCase}Id`]: record[`${entityCamelCase}Id`],
          [`${parentCamelCase}Id`]: record[`${parentCamelCase}Id`],
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
  );
}
