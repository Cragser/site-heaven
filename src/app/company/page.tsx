'use client';

import { List, useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import CompanyTable from '@modules/tables/company-table';
import { StateManager } from '@components/feedback/state-manager/state-manager';

export default function CompanyList() {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.company,
    syncWithLocation: true,
  });

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult.isError}
    >
      <List>
        <CompanyTable tableProps={tableProps} />
      </List>
    </StateManager>
  );
}
