'use client';

import { DeleteButton, EditButton, ShowButton } from '@refinedev/antd';
import { Space, Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { AntTableType } from '@page/types/ant-table.type';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function NationalityTable({
  tableProps,
}: Readonly<AntTableType>) {
  const translate = useTranslate();
  return (
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
        // title={translate(LangTag[`nationality.fields.name`])}
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
              resource={ResourceEnum.nationalityHelper}
            />
            <ShowButton hideText size="middle" recordItemId={record.id} />
            <DeleteButton
              hideText
              size="middle"
              recordItemId={record.id}
              resource={ResourceEnum.nationalityHelper}
            />
          </Space>
        )}
      />
    </Table>
  );
}
