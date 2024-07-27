"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LangTag } from "@lib/enums/language.enum";

interface Props {
  params: {
    personId: string;
  };
}

export default function PersonLegalList({
  params: { personId },
}: Readonly<Props>) {
  return;
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `personId||$eq||${personId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.personLegal,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <Table
        {...(tableProps as any)}
        rowKey="legalId"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
      >
        <Table.Column
          dataIndex={["legal", "name"]}
          title={translate(LangTag[`legal.fields.name`])}
        />

        <Table.Column
          dataIndex={["legal", "comments"]}
          title={translate(LangTag[`legal.fields.comments`])}
        />

        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.legalId}
                resource={ResourceEnum.personLegal}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.legalId}
                resource={ResourceEnum.personLegal}
              />
              <DeleteButton hideText size="middle" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
