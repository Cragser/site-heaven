'use client';

import { Create, List, useDrawerForm, useTable } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import AddressTable from '@modules/tables/address-table';
import { renderHeaderToPerson } from '@client/util/ant/list/renderHeaderToPerson';
import { StateManager } from '@components/feedback/state-manager/state-manager';
import { Button, Drawer } from 'antd';
import PersonAddressRelationForm from '@modules/forms/relations/person-address-relation-form';
import { LangTag } from '@lib/enums/language.enum';
import { useTranslate } from '@refinedev/core';
import CreateEntityPage from "@modules/page/create-parent-entity.page";

export default function PersonAddressList({
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
    resource: ResourceEnum.personAddress,
    syncWithLocation: true,
  });

  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: 'create',
    resource: ResourceEnum.personAddress,
  });

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult?.isError}
    >
      <List
        headerButtons={renderHeaderToPerson(personId, ResourceEnum.person, [
          <Button
            key="1"
            onClick={() => {
              show();
            }}
          >
            {translate(
              LangTag[`person-address.titles.add-relation-to-address`]
            )}
          </Button>,
        ])}
      >
        <AddressTable
          tableProps={tableProps}
          parent={'address'}
          parentResource={ResourceEnum.personAddress}
        />
      </List>
      <Drawer {...drawerProps}>
        <Create saveButtonProps={saveButtonProps} goBack={false}>
          <PersonAddressRelationForm
            personId={personId}
            formProps={formProps}
            excludeIds={tableQueryResult?.data?.data.map(
              (item) => item.address.id
            )}
          />
        </Create>
      </Drawer>
    </StateManager>
  );
}
