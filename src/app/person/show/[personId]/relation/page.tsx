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
import { PersonPageType } from '@page/types/pages/person/person-page.type';

export default function PersonRelationList({
  params: { personId },
}: Readonly<PersonPageType>) {
  // TODO: Add translation
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `personId||$eq||${personId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.personRelation,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }
  console.log(tableQueryResult.data);

  return (
    <List>
      <Table
        {...tableProps}
        rowKey="relationId"
        pagination={{
          ...tableProps.pagination,
          position: ['bottomCenter'],
          size: 'small',
        }}
      >
        <Table.Column
          title={'Nombre persona relacionada'}
          dataIndex={['relatedPerson', 'name']}
        />
        <Table.Column
          title={'Nombre persona relacionada'}
          dataIndex={['relatedPerson', 'lastName']}
        />
        <Table.Column
          title={'Fecha de inicio'}
          dataIndex="startDate"
          render={(value) => value || '-'}
        />
        <Table.Column
          title={'Fecha de fin'}
          dataIndex="endDate"
          render={(value) => value || '-'}
        />
        <Table.Column title={'Tipo de relación'} dataIndex="relation" />
        <Table.Column
          title={'Actions'}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.id}
                resource={ResourceEnum.personRelation}
              />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
