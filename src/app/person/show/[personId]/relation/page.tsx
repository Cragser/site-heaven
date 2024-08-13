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
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";
import { renderHeaderToPerson } from "@client/util/ant/list/renderHeaderToPerson";

export default function PersonRelationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  // TODO: Add translation
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
    resource: ResourceEnum.personRelation,
    syncWithLocation: true,
  });
  const { title } = usePersonTitle(personId, "person-relation.titles.list");

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult.isError}
    >
      <List
        title={title}
        headerButtons={renderHeaderToPerson(personId, ResourceEnum.person, [])}
      >
        <Table
          {...(tableProps as any)}
          rowKey="relationId"
          pagination={{
            ...tableProps.pagination,
            position: ["bottomCenter"],
            size: "small",
          }}
        >
          <Table.Column
            title={"Nombre persona relacionada"}
            dataIndex={["relatedPerson", "name"]}
          />

          <Table.Column
            title={"Fecha de inicio"}
            dataIndex="startDate"
            render={(value) => value || "-"}
          />
          <Table.Column
            title={"Fecha de fin"}
            dataIndex="endDate"
            render={(value) => value || "-"}
          />
          <Table.Column title={"Tipo de relación"} dataIndex="relation" />
          <Table.Column
            title={"Actions"}
            dataIndex="actions"
            render={(_, record: BaseRecord) => (
              <Space>
                <EditButton hideText size="middle" recordItemId={record.id} />
                <ShowButton
                  hideText
                  size="middle"
                  recordItemId={record.id}
                  resource={ResourceEnum.personRelation}
                />
                <DeleteButton hideText size="middle" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </StateManager>
  );
}
