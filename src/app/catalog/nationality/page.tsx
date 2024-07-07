'use client';

import { List, useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import NationalityTable from '@modules/tables/nationality-table';

export default function NationalityHelperList() {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: ResourceEnum.nationalityHelper,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <NationalityTable tableProps={tableProps} />
    </List>
  );
}
