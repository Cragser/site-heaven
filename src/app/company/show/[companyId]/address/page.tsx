'use client';

import { List, useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import AddressTable from '@modules/tables/address-table';

export default function CompanyAddressList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `companyId||$eq||${companyId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.companyAddress,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List headerButtons={renderHeaderToPerson(companyId, ResourceEnum.company)}>
      <AddressTable tableProps={tableProps} />
    </List>
  );
}
