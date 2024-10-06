"use client";
// http://localhost:3003/api/person?filter=personCompany.companyId||$eq||754922e1-6307-4797-966c-bc70eb6ab5b2
// http://localhost:3003/api/person?filter=company%7C%7C%24cont%7C%7C151b5120-e4fe-4b8b-9558-36aba60a5cb0
import { ResourceEnum } from "@lib/enums/resource.enum";
import { List, useTable } from "@refinedev/antd";
import React from "react";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { renderHeaderToEntity } from "@client/util/ant/list/renderHeaderToPerson";
import { useCompanyTitle } from "@client/hooks/titles/use-company-title";
import EntityTable from "@/lib/data-display/table/variant/entity-table/entity-table";
import { BaseRecord } from "@refinedev/core";
import { personCompanyFields } from "@lib/fields/person/person-company.fields";

interface Props {
  params: {
    companyId: string;
  };
}

export default function StakeholderPage({ params: { companyId } }: Props) {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.personCompany,
    syncWithLocation: false,
    // filters: {
    //   initial: [equalFilter("personCompany.companyId", companyId)],
    // },
  });

  const { title } = useCompanyTitle(companyId, "stakeholder.titles.list");

  const navigationItem = {
    resource: ResourceEnum.companyPerson,
    createMeta: (record: BaseRecord) => ({
      companyId,
      personCompanyId: record.id,
    }),
  };

  return (
    <StateManager
      isLoading={tableQueryResult.isLoading}
      isError={tableQueryResult.isError}
    >
      <List
        title={title}
        headerButtons={renderHeaderToEntity({
          customButtons: undefined,
          id: companyId,
          parent: "company",
        })}
      >
        <EntityTable
          columns={personCompanyFields}
          entityResource={ResourceEnum.personCompany}
          tableProps={tableProps}
          navigation={{
            edit: navigationItem,
            show: navigationItem,
          }}
          defaultNavigation={false}
        />
      </List>
    </StateManager>
  );
}
