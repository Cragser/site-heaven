"use client";

import { DeleteButton, EditButton, List, useTable } from "@refinedev/antd";
import { Button, Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface Props {
  params: {
    trialId: string;
    judicialProcessId: string;
    personId: string;
    legalId: string;
  };
}

export default function TrialNotificationList({ params }: Readonly<Props>) {
  const { trialId, judicialProcessId, personId, legalId } = params;
  const goTo = useGoTo();
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `trialId||$eq||${trialId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.trialNotification,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      resource={ResourceEnum.trialNotification}
      breadcrumb={false}
      headerButtons={[
        <Space>
          <Button
            onClick={() => {
              goTo({
                action: "create",
                resource: ResourceEnum.personTrialNotification,
                meta: { trialId, judicialProcessId, personId, legalId },
              });
            }}
          >
            Crear Notificación
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
          title={translate(`trial-notification.fields.name`)}
        />

        <Table.Column
          dataIndex={["type"]}
          title={translate(`trial-notification.fields.type`)}
          render={tagRender}
        />

        <Table.Column
          dataIndex={["date"]}
          title={translate(`trial-notification.fields.date`)}
          render={dateRender}
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
                    resource: ResourceEnum.personTrialNotification,
                    meta: {
                      trialId,
                      judicialProcessId,
                      personId,
                      legalId,
                      trialNotificationId: record.id as string,
                    },
                  });
                }}
              />

              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.trialNotification}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
