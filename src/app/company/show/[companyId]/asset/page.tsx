'use client';

import { List, useTable } from '@refinedev/antd';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';
import { ResourceEnum } from '@lib/enums/resource.enum';
import AssetTable from '@modules/tables/asset-table';
import { CompanyPageType } from '@page/types/company-and-child-page.type';

export default function CompanyAssetList({
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
    resource: ResourceEnum.companyAsset,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List headerButtons={renderHeaderToPerson(companyId, ResourceEnum.company)}>
      <AssetTable tableProps={tableProps} />
    </List>
  );
}
