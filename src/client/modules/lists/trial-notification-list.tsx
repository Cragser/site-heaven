'use client';

import { DeleteButton, EditButton, List, useTable } from '@refinedev/antd';
import { Space, Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { tagRender } from '@client/util/ant/fields/tagRender';
import { dateRender } from '@client/util/ant/fields/dateRender';

interface TrialNotificationListProps {
  trialId: string;
}

export default function TrialNotificationList({
  trialId,
}: Readonly<TrialNotificationListProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `trialId||$eq||${trialId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.trialNotification,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List resource={ResourceEnum.trialNotification} breadcrumb={false}>
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
          dataIndex={['name']}
          title={translate(LangTag[`trial-notification.fields.name`])}
        />

        <Table.Column
          dataIndex={['type']}
          title={translate(LangTag[`trial-notification.fields.type`])}
          render={tagRender}
        />

        <Table.Column
          dataIndex={['date']}
          title={translate(LangTag[`trial-notification.fields.date`])}
          render={dateRender}
        />

        <Table.Column
          title={'Actions'}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
                resource={ResourceEnum.trialNotification}
              />

              <DeleteButton
                hideText
                size="small"
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
