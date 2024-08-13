"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Button, Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useLegalTitle } from "@client/hooks/titles/use-legal-title";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface JudicialProcessListProps {
  params: {
    legalId: string;
    personId: string;
  };
}

export default function JudicialProcessList({
  params: { legalId, personId },
}: Readonly<JudicialProcessListProps>) {
  const goTo = useGoTo();
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `legalId||$eq||${legalId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.judicialProcess,
    syncWithLocation: true,
  });
  const { title } = useLegalTitle(legalId, "judicial-process.titles.create");
  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      title={title}
      resource={ResourceEnum.judicialProcess}
      breadcrumb={false}
      headerButtons={[
        <Space>
          <Button
            onClick={() => {
              goTo({
                action: "create",
                resource: ResourceEnum.personJudicialProcess,
                meta: { legalId, personId },
              });
            }}
          >
            Crear
          </Button>
        </Space>,
      ]}
    >
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
          dataIndex={["name"]}
          title={translate(`judicial-process.fields.name`)}
        />
        <Table.Column
          dataIndex={["comments"]}
          title={translate(`judicial-process.fields.comments`)}
        />

        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.id}
                onClick={() => {
                  goTo({
                    action: "edit",
                    resource: ResourceEnum.personJudicialProcess,
                    meta: {
                      legalId,
                      personId,
                      judicialProcessId: record.id as string,
                    },
                  });
                }}
              />
              <ShowButton
                hideText
                size="middle"
                onClick={() => {
                  console.log({ record });
                  goTo({
                    action: "show",
                    resource: ResourceEnum.personJudicialProcess,
                    meta: {
                      legalId,
                      personId,
                      judicialProcessId: record.id as string,
                    },
                  });
                }}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.judicialProcess}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
