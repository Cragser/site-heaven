"use client";

import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import React from "react";

export default function SocialTable({ tableProps }: any) {
  const translate = useTranslate();
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
      <Table.Column
        dataIndex={["social", "name"]}
        // title={translate(LangTag[`socialfields.name`])}
      />

      <Table.Column
        dataIndex={["social", "type"]}
        // title={translate(LangTag[`socialfields.type`])}
      />

      <Table.Column
        dataIndex={["social", "description"]}
        // title={translate(LangTag[`socialfields.description`])}
      />

      <Table.Column
        dataIndex={["social", "link"]}
        // title={translate(LangTag[`socialfields.link`])}
      />

      <Table.Column
        dataIndex={["social", "createdAt"]}
        // title={translate(LangTag[`socialfields.createdAt`])}
      />

      <Table.Column
        dataIndex={["social", "estimatedPeopleImpacted"]}
        // title={translate(LangTag[`socialfields.estimatedPeopleImpacted`])}
      />

      <Table.Column
        title={"Actions"}
        dataIndex="actions"
        render={(_, record: BaseRecord) => (
          <Space>
            <EditButton hideText size="middle" recordItemId={record.socialId} />
            <ShowButton hideText size="middle" recordItemId={record.socialId} />
            <DeleteButton
              hideText
              size="middle"
              recordItemId={record.socialId}
            />
          </Space>
        )}
      />
    </Table>
  );
}
