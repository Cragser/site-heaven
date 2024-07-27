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
import { PersonPageType } from "@page/types/pages/person/person-page.type";

export default function PersonSocialList({
  params: { personId },
}: Readonly<PersonPageType>) {
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
    resource: ResourceEnum.personSocial,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <Table
        {...(tableProps as any)}
        rowKey="socialId"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
      >
        <Table.Column
          dataIndex={["social", "id"]}
          title={translate(LangTag[`social.fields.id`])}
        />

        <Table.Column
          dataIndex={["social", "name"]}
          title={translate(LangTag[`social.fields.name`])}
        />

        <Table.Column
          dataIndex={["social", "type"]}
          title={translate(LangTag[`social.fields.type`])}
        />

        <Table.Column
          dataIndex={["social", "description"]}
          title={translate(LangTag[`social.fields.description`])}
        />

        <Table.Column
          dataIndex={["social", "link"]}
          title={translate(LangTag[`social.fields.link`])}
        />

        <Table.Column
          dataIndex={["social", "createdAt"]}
          title={translate(LangTag[`social.fields.createdAt`])}
        />

        <Table.Column
          dataIndex={["social", "estimatedPeopleImpacted"]}
          title={translate(LangTag[`social.fields.estimatedPeopleImpacted`])}
        />

        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.socialId}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.socialId}
              />
              <DeleteButton hideText size="middle" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
