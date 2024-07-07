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
import { useLegalTitle } from '@client/hooks/titles/use-legal-title';

interface JudicialProcessListProps {
  params: {
    legalId: string;
  };
}

export default function JudicialProcessList({
  params: { legalId },
}: Readonly<JudicialProcessListProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `legalId||$eq||${legalId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.judicialProcess,
    syncWithLocation: true,
  });
  const { title } = useLegalTitle(
    legalId,
    LangTag['judicial-process.titles.create']
  );
  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      title={title}
      resource={ResourceEnum.judicialProcess}
      breadcrumb={false}
    >
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
          dataIndex={['id']}
          title={translate(LangTag[`judicial-process.fields.id`])}
        />

        <Table.Column
          dataIndex={['name']}
          title={translate(LangTag[`judicial-process.fields.name`])}
        />

        <Table.Column
          dataIndex={['comments']}
          title={translate(LangTag[`judicial-process.fields.comments`])}
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
                resource={ResourceEnum.judicialProcess}
              />

              <ShowButton
                hideText
                size="small"
                recordItemId={record.id}
                resource={ResourceEnum.judicialProcess}
              />
              <DeleteButton
                hideText
                size="small"
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
