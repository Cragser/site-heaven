import { AntTableType } from '@page/types/ant-table.type';
import { Table } from 'antd';
import { LangTag } from '@lib/enums/language.enum';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { createDataIndex } from '@client/util/table/create-data-index';
import useRenderActions from '@client/util/ant/table/use-render-actions';
import React from 'react';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function CompanyTable({
  parent = '',
  parentResource = ResourceEnum.company,
  tableProps,
}: Readonly<AntTableType>) {
  const translate = useTranslate();
  const keys = [
    'name',
    'creationUbication',
    'rfc',
    'goal',
    'nickname',
    'company',
  ];
  const dataIndex = createDataIndex(parent, keys);
  const { renderActions } = useRenderActions({
    deleteResource: parentResource,
    metaCreate: (record: BaseRecord, getId) => ({
      companyId: getId(record),
    }),
    parent,
    resource: ResourceEnum.company,
  });
  return (
    <Table
      {...tableProps}
      rowKey="companyId"
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
          title={translate(LangTag[`company.fields.${key}` as keyof typeof LangTag])}
        />
      ))}

      <Table.Column
        key="actions"
        // title={translate(LangTag['company.fields.actions'])}
        render={renderActions}
      />
    </Table>
  );
}
