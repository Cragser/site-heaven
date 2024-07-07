import { useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';

export function useResourceTable(resource: ResourceEnum) {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: 'client',
      pageSize: 10,
    },
    resource: resource,
    syncWithLocation: true,
  });

  return {
    tableProps,
    tableQueryResult,
  };
}
