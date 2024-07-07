'use client';

import { Create, List, useDrawerForm, useTable } from '@refinedev/antd';
import { Button, Drawer } from 'antd';
import { useTranslate } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { LangTag } from '@lib/enums/language.enum';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';
import { usePersonTitle } from '@client/hooks/titles/use-person-title';
import { StateManager } from '@components/feedback/state-manager/state-manager';
import PersonCompanyRelation from '@modules/forms/relations/person-company-relation';
import CompanyTable from '@modules/tables/company-table';

export default function PersonCompanyList({
  params: { personId },
}: Readonly<PersonPageType>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: 'filter',
          operator: 'eq',
          value: `personId||$eq||${personId}`,
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
  const { title } = usePersonTitle(
    personId,
    LangTag['person-company.titles.list']
  );

  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: 'create',
    resource: ResourceEnum.personCompany,
  });

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult.isError}
    >
      <List
        title={title}
        headerButtons={renderHeaderToPerson(personId, ResourceEnum.person, [
          <Button
            key="1"
            onClick={() => {
              show();
            }}
          >
            {translate(
              LangTag[`person-company.titles.add-relation-to-company`]
            )}
          </Button>,
        ])}
      >
        <CompanyTable
          tableProps={tableProps}
          parent={'company'}
          parentResource={ResourceEnum.personCompany}
        />
      </List>
      <Drawer {...drawerProps}>
        <Create saveButtonProps={saveButtonProps} goBack={false}>
          <PersonCompanyRelation
            personId={personId}
            formProps={formProps}
            excludeIds={tableQueryResult?.data?.data.map(
              (item) => item.company.id
            )}
          />
        </Create>
      </Drawer>
    </StateManager>
  );
}
