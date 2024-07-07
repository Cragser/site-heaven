'use client';

import { List, useTable } from '@refinedev/antd';
import PersonTable from '@modules/tables/person-table';

export default function PersonList() {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: 'person',
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <PersonTable tableProps={tableProps} />
    </List>
  );
}
