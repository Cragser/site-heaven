'use client';

import { DeleteButton, EditButton, List, useTable } from '@refinedev/antd';
import { Space, Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { tagRender } from '@client/util/ant/fields/tagRender';

interface TrialRelationListProps {
  trialId: string;
}

export default function TrialRelationList({
  trialId,
}: Readonly<TrialRelationListProps>) {
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
    resource: ResourceEnum.trialRelation,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(tableProps);

  return (
    <List resource={ResourceEnum.trialRelation} breadcrumb={false}>
      <Table
        {...tableProps}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ['bottomCenter'],
          size: 'small',
        }}
      >
        {/*<Table.Column*/}
        {/*  dataIndex={['trialId']}*/}
        {/*  title={translate(LangTag[`trial-relation.fields.trialId`])}*/}
        {/*/>*/}
        <Table.Column
          dataIndex={['relatedTrial', 'name']}
          // title={translate(LangTag[`trial-relation.fields.name`])}
        />

        <Table.Column
          dataIndex={['relatedTrial', 'type']}
          // title={translate(LangTag[`trial-relation.fields.type`])}
          render={tagRender}
        />

        <Table.Column
          dataIndex={['relation']}
          title={translate(LangTag[`trial-relation.fields.relation`])}
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
                resource={ResourceEnum.trialRelation}
              />

              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.trialRelation}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
