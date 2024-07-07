'use client';

import { List } from '@refinedev/antd';
import { useTranslate } from '@refinedev/core';
import { LangTag } from '@lib/enums/language.enum';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useResourceTable } from '@client/util/hook/useResourceTable';
import CompanyTable from '@modules/tables/company-table';
import PersonTable from '@modules/tables/person-table';

export default function CompanyList() {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useResourceTable(
    ResourceEnum.company
  );

  const { tableProps: personTable, tableQueryResult: personQuery } =
    useResourceTable(ResourceEnum.person);

  if (tableQueryResult?.isLoading || personQuery?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <List title={translate(LangTag['person.titles.list'])}>
        <CompanyTable tableProps={tableProps} />
      </List>
      <List title={translate(LangTag['company.titles.list'])}>
        <PersonTable tableProps={personTable} />
      </List>
    </>
  );
}
