'use client';

import { List, useTable } from '@refinedev/antd';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import SocialTable from '@modules/tables/social-table';
import { useCompanyTitle } from '@client/hooks/titles/use-company-title';
import { LangTag } from '@lib/enums/language.enum';

export default function CompanySocialList({
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
    resource: ResourceEnum.companySocial,
    syncWithLocation: true,
  });
  const { title } = useCompanyTitle(
    companyId,
    LangTag['company-social.titles.list']
  );

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List
      title={title}
      headerButtons={renderHeaderToPerson(companyId, ResourceEnum.company)}
    >
      <SocialTable tableProps={tableProps} />
    </List>
  );
}
