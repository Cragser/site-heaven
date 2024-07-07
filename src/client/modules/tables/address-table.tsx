import React from 'react';
import { Table } from 'antd';
import { LangTag } from '@lib/enums/language.enum';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { AntTableType } from '@page/types/ant-table.type';
import { createDataIndex } from '@client/util/table/create-data-index';
import useRenderActions from '@client/util/ant/table/use-render-actions';
import { ResourceEnum } from '@lib/enums/resource.enum';

function AddressTable({ parent, parentResource, tableProps }: AntTableType) {
  const translate = useTranslate();
  const keys = [
    'name',
    'country',
    'state',
    'city',
    'postalCode',
    'colony',
    'street',
    'exteriorNumber',
    'interiorNumber',
    'additionalInformation',
  ];
  const dataIndex = createDataIndex(parent, keys);
  // const { renderActions } = useRenderActions(parent);
  const { renderActions } = useRenderActions({
    deleteResource: parentResource,
    metaCreate: (record: BaseRecord, getId) => ({
      addressId: getId(record),
    }),
    parent,
    resource: ResourceEnum.address,
  });
  return (
    <Table
      {...tableProps}
      rowKey="addressId"
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
          title={translate(LangTag[`address.fields.${key}` as keyof typeof LangTag])}
        />
      ))}
      <Table.Column
        key="actions"
        // title={translate(LangTag['address.fields.actions'])}
        render={renderActions}
      />
    </Table>
  );
}

export default AddressTable;
