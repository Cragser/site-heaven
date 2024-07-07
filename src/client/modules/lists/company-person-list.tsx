'use client';

import { List, useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import PersonTable from '@modules/tables/person-table';

interface Props {
  companyId: string;
}

export default function CompanyPersonList({ companyId }: Props) {
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
    resource: ResourceEnum.personCompany,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  const { data } = tableQueryResult;
  const companyName = data?.data?.[0]?.company?.name;

  return (
    <List title={`Personas en la companñia: ${companyName}`}>
      <PersonTable tableProps={tableProps} parent={'person'} />
    </List>
  );
}
