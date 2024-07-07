'use client';

import { DeleteButton, EditButton, List, useTable } from '@refinedev/antd';
import { Space, Table } from 'antd';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';

interface AddressListProps {
  id: string;
}

export default function AddressList({ id }: Readonly<AddressListProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `companyId||$eq||${id}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.address,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      resource={ResourceEnum.address}
      breadcrumb={false}
      headerButtons={renderHeaderToPerson(id, ResourceEnum.company)}
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
          // title={translate(LangTag[`addressfields.id`])}
        />

        <Table.Column
          dataIndex={['country']}
          // title={translate(LangTag[`addressfields.country`])}
        />

        <Table.Column
          dataIndex={['state']}
          // title={translate(LangTag[`addressfields.state`])}
        />

        <Table.Column
          dataIndex={['city']}
          // title={translate(LangTag[`addressfields.city`])}
        />

        <Table.Column
          dataIndex={['postalCode']}
          // title={translate(LangTag[`addressfields.postalCode`])}
        />

        <Table.Column
          dataIndex={['colony']}
          // title={translate(LangTag[`addressfields.colony`])}
        />

        <Table.Column
          dataIndex={['street']}
          // title={translate(LangTag[`addressfields.street`])}
        />

        <Table.Column
          dataIndex={['exteriorNumber']}
          // title={translate(LangTag[`addressfields.exteriorNumber`])}
        />

        <Table.Column
          dataIndex={['interiorNumber']}
          // title={translate(LangTag[`addressfields.interiorNumber`])}
        />

        <Table.Column
          dataIndex={['additionalInformation']}
          // title={translate(LangTag[`addressfields.additionalInformation`])}
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
                resource={ResourceEnum.address}
              />

              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                resource={ResourceEnum.address}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
