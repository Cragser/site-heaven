import { DeleteButton, EditButton, List, useTable } from "@refinedev/antd";
import { Button, Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { useAssetTitle } from "@client/hooks/titles/use-asset-title";

interface AssetValueHistoryListProps {
  assetId: string;
}
export function AssetValueHistoryList({
  assetId,
}: Readonly<AssetValueHistoryListProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `assetId||$eq||${assetId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.assetValueHistory,
    syncWithLocation: true,
  });
  const goTo = useGoTo();
  const { title } = useAssetTitle(assetId, "asset-value-history.titles.list");

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  const headerButtons = [
    <Button
      key="1"
      onClick={() => {
        goTo({
          resource: ResourceEnum.assetValueHistory,
          action: "create",
          meta: {
            assetId,
          },
        });
      }}
    >
      Crear
    </Button>,
  ];
  return (
    <List
      resource={ResourceEnum.assetValueHistory}
      breadcrumb={false}
      headerButtons={headerButtons}
      title={title}
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
          dataIndex={["value"]}
          title={translate(`asset-value-history.fields.value`)}
        />

        <Table.Column
          dataIndex={["date"]}
          title={translate(`asset-value-history.fields.date`)}
        />

        <Table.Column
          dataIndex={["type"]}
          title={translate(`asset-value-history.fields.type`)}
        />

        <Table.Column
          dataIndex={["details"]}
          // title={translate(`asset-value-history.fields.details`)}
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
                resource={ResourceEnum.assetValueHistory}
                onClick={() => {
                  goTo({
                    resource: ResourceEnum.assetValueHistory,
                    action: "edit",
                    meta: {
                      assetId,
                      assetValueHistoryId: record.id as string,
                    },
                  });
                }}
              />

              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.assetValueHistory}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
