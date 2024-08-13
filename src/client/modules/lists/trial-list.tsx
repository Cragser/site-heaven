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
import { dateRender } from "@client/util/ant/fields/dateRender";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface TrialListProps {
  params: {
    personId: string;
    legalId: string;
    judicialProcessId: string;
  };
}

export default function TrialList({
  params: { judicialProcessId, legalId, personId },
}: Readonly<TrialListProps>) {
  const goTo = useGoTo();
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `judicialProcessId||$eq||${judicialProcessId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.trial,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      resource={ResourceEnum.trial}
      breadcrumb={false}
      headerButtons={[
        <Space>
          <Button
            onClick={() => {
              goTo({
                action: "create",
                resource: ResourceEnum.personTrial,
                meta: { legalId, personId, judicialProcessId },
              });
            }}
          >
            Crear Juicio
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
          // title={translate(LangTag[`trial.fields.name`])}
        />

        <Table.Column
          dataIndex={["courtName"]}
          // title={translate(LangTag[`trial.fields.courtName`])}
        />

        <Table.Column
          dataIndex={["summary"]}
          // title={translate(LangTag[`trial.fields.summary`])}
        />

        <Table.Column
          dataIndex={["startDate"]}
          title={translate(`trial.fields.startDate`)}
          render={dateRender}
        />

        <Table.Column
          dataIndex={["endDate"]}
          title={translate(`trial.fields.endDate`)}
          render={dateRender}
        />

        <Table.Column
          dataIndex={["type"]}
          title={translate(`trial.fields.type`)}
          render={tagRender}
        />

        <Table.Column
          dataIndex={["scope"]}
          // title={translate(`trial.fields.scope`)}
          render={tagRender}
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
                    resource: ResourceEnum.personTrial,
                    meta: {
                      legalId,
                      personId,
                      judicialProcessId,
                      trialId: record.id as string,
                    },
                  });
                }}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.id}
                onClick={() => {
                  const meta = {
                    legalId,
                    personId,
                    judicialProcessId,
                    trialId: record.id as string,
                  };
                  goTo({
                    action: "show",
                    resource: ResourceEnum.personTrial,
                    meta,
                  });
                }}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.trial}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
