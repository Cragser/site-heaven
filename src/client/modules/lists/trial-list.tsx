'use client';

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from '@refinedev/antd';
import { Space, Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { dateRender } from '@client/util/ant/fields/dateRender';
import { tagRender } from '@client/util/ant/fields/tagRender';

interface TrialListProps {
  params: {
    id: string;
  };
}

export default function TrialList({
  params: { id },
}: Readonly<TrialListProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `judicialProcessId||$eq||${id}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.trial,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List resource={ResourceEnum.trial} breadcrumb={false}>
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
          // title={translate(LangTag[`trial.fields.name`])}
        />

        <Table.Column
          dataIndex={['courtName']}
          // title={translate(LangTag[`trial.fields.courtName`])}
        />

        <Table.Column
          dataIndex={['summary']}
          // title={translate(LangTag[`trial.fields.summary`])}
        />

        <Table.Column
          dataIndex={['startDate']}
          title={translate(LangTag[`trial.fields.startDate`])}
          render={dateRender}
        />

        <Table.Column
          dataIndex={['endDate']}
          title={translate(LangTag[`trial.fields.endDate`])}
          render={dateRender}
        />

        <Table.Column
          dataIndex={['type']}
          title={translate(LangTag[`trial.fields.type`])}
          render={tagRender}
        />

        <Table.Column
          dataIndex={['scope']}
          // title={translate(LangTag[`trial.fields.scope`])}
          render={tagRender}
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
                resource={ResourceEnum.trial}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.trial}
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
