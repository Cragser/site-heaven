"use client";
// http://localhost:3003/api/person?filter=personCompany.companyId||$eq||754922e1-6307-4797-966c-bc70eb6ab5b2
// http://localhost:3003/api/person?filter=company%7C%7C%24cont%7C%7C151b5120-e4fe-4b8b-9558-36aba60a5cb0
import { ResourceEnum } from "@lib/enums/resource.enum";
import { List, useTable } from "@refinedev/antd";
import React from "react";
import PersonTable from "@modules/tables/person-table";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { renderHeaderToEntity } from "@client/util/ant/list/renderHeaderToPerson";

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
    resource: ResourceEnum.person,
    syncWithLocation: false,
    filters: {
      initial: [
        {
          field: "filter",
          operator: "eq",
          value: `personCompany.companyId||$eq||${companyId}`,
        },
      ],
    },
  });

  console.log({ tableQueryResult });
  return (
    <StateManager
      isLoading={tableQueryResult.isLoading}
      isError={tableQueryResult.isError}
    >
      <List
        title={"Stakeholder"}
        headerButtons={renderHeaderToEntity({
          customButtons: undefined,
          id: companyId,
          parent: "company",
        })}
      >
        <PersonTable tableProps={tableProps} />
      </List>
    </StateManager>
  );
}
