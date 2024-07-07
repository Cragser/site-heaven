'use client';

import { Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { LangTag } from '@lib/enums/language.enum';
import { AntTableType } from '@page/types/ant-table.type';
import { createDataIndex } from '@client/util/table/create-data-index';
import useRenderActions from '@client/util/ant/table/use-render-actions';
import { ResourceEnum } from '@lib/enums/resource.enum';
import React from 'react';
import { tagRender } from '@client/util/ant/fields/tagRender';

export default function AssetTable({
  parent = '',
  parentResource,
  tableProps,
}: Readonly<AntTableType>) {
  const translate = useTranslate();
  const keys = ['name', 'description', 'date'];
  const dataIndex = createDataIndex(parent, [...keys, 'type']);
  const { renderActions } = useRenderActions({
    deleteResource: parentResource,
    metaCreate: (record: BaseRecord, getId) => ({
      companyId: getId(record),
    }),
    parent,
    resource: ResourceEnum.company,
  });
  console.log(dataIndex);
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
      {keys.map((key) => (
        <Table.Column
          key={key}
          dataIndex={dataIndex[key]}
          title={translate(LangTag[`asset.fields.${key}` as keyof typeof LangTag])}
        />
      ))}
      <Table.Column
        dataIndex={dataIndex['type']}
        title={translate(LangTag[`asset.fields.type`])}
        render={tagRender}
      />

      <Table.Column
        key="actions"
        // title={translate(LangTag['asset.fields.actions'])}
        render={renderActions}
      />
    </Table>
  );
}
