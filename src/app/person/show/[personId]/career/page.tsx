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
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { dateRender } from '@client/util/ant/fields/dateRender';
import { tagRender } from '@client/util/ant/fields/tagRender';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
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
    resource: ResourceEnum.personCareer,
    syncWithLocation: true,
  });
  const translate = useTranslate();

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List headerButtons={renderHeaderToPerson(personId, ResourceEnum.person)}>
      <Table
        {...tableProps}
        rowKey="careerId"
        pagination={{
          ...tableProps.pagination,
          position: ['bottomCenter'],
          size: 'small',
        }}
      >
        <Table.Column
          dataIndex={['career', 'role']}
          title={translate(LangTag[`career.fields.role`])}
        />
        <Table.Column
          dataIndex={['career', 'startDate']}
          title={translate(LangTag[`career.fields.startDate`])}
          render={dateRender}
        />
        <Table.Column
          dataIndex={['career', 'endDate']}
          title={translate(LangTag[`career.fields.endDate`])}
          render={dateRender}
        />
        <Table.Column
          dataIndex={['career', 'company', 'name']}
          title={translate(LangTag[`career.fields.company`])}
        />
        <Table.Column
          dataIndex={['career', 'contractType']}
          title={translate(LangTag[`career.fields.contractType`])}
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
                recordItemId={record.careerId}
              />
              <ShowButton
                hideText
                size="middle"
                recordItemId={record.careerId}
              />
              <DeleteButton hideText size="middle" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
