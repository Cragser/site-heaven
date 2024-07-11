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
import { PersonPageType } from '@page/types/pages/person/person-page.type';

export default function PersonEducationList({
  params: { personId },
}: Readonly<PersonPageType>) {
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
    resource: ResourceEnum.personEducation,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <Table
        {...tableProps}
        rowKey="educationId"
        pagination={{
          ...tableProps.pagination,
          position: ['bottomCenter'],
          size: 'small',
        }}
      >
        <Table.Column
          dataIndex={['education', 'name']}
          title={translate(LangTag[`education.fields.name`])}
        />

        <Table.Column
          dataIndex={['education', 'institution']}
          title={translate(LangTag[`education.fields.institution`])}
        />

        <Table.Column
          dataIndex={['education', 'license']}
          title={translate(LangTag[`education.fields.license`])}
        />

        <Table.Column
          dataIndex={['education', 'validated']}
          title={translate(LangTag[`education.fields.validated`])}
        />

        <Table.Column
          dataIndex={['education', 'initialDate']}
          // title={translate(LangTag[`education.fields.initialDate`])}
        />

        <Table.Column
          dataIndex={['education', 'endDate']}
          // title={translate(LangTag[`education.fields.endDate`])}
        />

        <Table.Column
          title={'Actions'}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.educationId}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.educationId}
              />
              <DeleteButton hideText size="middle" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
