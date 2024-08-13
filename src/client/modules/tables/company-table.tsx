import { Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { createDataIndex } from "@client/util/table/create-data-index";
import useRenderActions from "@client/util/ant/table/use-render-actions";
import React from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";

export default function CompanyTable({
  parent = "",
  parentResource = ResourceEnum.company,
  tableProps,
}: any) {
  const translate = useTranslate();
  const keys = [
    "name",
    "creationUbication",
    "rfc",
    "goal",
    "nickname",
    "company",
  ];
  const dataIndex = createDataIndex(parent, keys);
  const { renderActions } = useRenderActions({
    deleteResource: parentResource,
    metaCreate: (record: BaseRecord, getId) => ({
      companyId: getId(record),
    }),
    parent,
    resource: ResourceEnum.company,
  });
  return (
    <Table
      {...(tableProps as any)}
      rowKey="companyId"
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
          title={translate(`company.fields.${key}`)}
        />
      ))}

      <Table.Column
        key="actions"
        // title={translate(LangTag['company.fields.actions'])}
        render={renderActions}
      />
    </Table>
  );
}
