import { DeleteButton, EditButton, List, useTable } from '@refinedev/antd';
import { Space, Table } from 'antd';
import { LangTag } from '@lib/enums/language.enum';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';

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
          field: 'filter',
          operator: 'eq',
          value: `assetId||$eq||${assetId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.assetValueHistory,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(tableProps);

  return (
    <List resource={ResourceEnum.assetValueHistory} breadcrumb={false}>
      <Table
        {...tableProps}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ['bottomCenter'],
          size: 'small',
        }}
      >
        <Table.Column
          dataIndex={['value']}
          title={translate(LangTag[`asset-value-history.fields.value`])}
        />

        <Table.Column
          dataIndex={['date']}
          title={translate(LangTag[`asset-value-history.fields.date`])}
        />

        <Table.Column
          dataIndex={['type']}
          title={translate(LangTag[`asset-value-history.fields.type`])}
        />

        <Table.Column
          dataIndex={['details']}
          // title={translate(LangTag[`asset-value-history.fields.details`])}
        />

        <Table.Column
          title={'Actions'}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.assetValueHistory}
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
