import { Table } from "antd";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { BaseRecord, useTranslate } from "@refinedev/core";
import React from "react";
import useRenderActions from "@client/util/ant/table/use-render-actions";
import { createDataIndex } from "@client/util/table/create-data-index";
import { ResourceEnum } from "@lib/enums/resource.enum";

export default function PersonTable({ parent = "", tableProps }: any) {
  const translate = useTranslate();
  const keys = ["name", "lastName", "rfc", "curp", "nss"];
  const dataIndex = createDataIndex(parent, keys);
  const { renderActions } = useRenderActions({
    metaCreate: (record: BaseRecord, getId) => ({
      personId: getId(record),
    }),
    parent,
    resource: ResourceEnum.person,
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
      {keys.map((key) => (
        <Table.Column
          key={key}
          dataIndex={dataIndex[key]}
          title={translate(`person.fields.${key}`)}
        />
      ))}
      <Table.Column
        dataIndex={["nationality", "name"]}
        title={translate(`person.fields.nationality`)}
        render={tagRender}
      />
      <Table.Column key="actions" render={renderActions} />
    </Table>
  );
}
