"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import EntityView from "@components/data-display/entity-view/entity-view";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { HttpError, useShow } from "@refinedev/core";
import { personCompanyFields } from "@lib/fields/person/person-company.fields";
import { Divider, Table } from "antd";
import { personCompanyTimeFrameFields } from "@lib/fields/person/person-company-time-frame.fields";
import { List, Show } from "@refinedev/antd";
import { generateColumns } from "@/lib/data-display/table/variant/entity-table/blocks/column-list/generate-columns";
import React from "react";
import useTableSimple from "@client/hooks/pages/list/use-table-simple";

interface Props {
  params: {
    companyId: string;
    personCompanyId: string;
  };
}

export default function StakeholderTimeFrameListPage({
  params: { companyId, personCompanyId },
}: Readonly<Props>) {
  const { queryResult } = useShow<any, HttpError>({
    id: personCompanyId,
    resource: ResourceEnum.personCompany,
  });

  const { tableProps } = useTableSimple({
    resource: ResourceEnum.personCompanyTimeFrame,
    filterId: personCompanyId,
    filterIdName: "personCompanyId",
  });

  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={queryResult.isError}
      data={queryResult.data}
    >
      <Show canEdit={false}>
        <EntityView
          items={personCompanyFields}
          resource={ResourceEnum.personCompany}
          record={queryResult.data?.data}
        />
        <Divider />
        <List breadcrumb={false} title="Time Frame">
          <Table
            {...tableProps}
            rowKey="id"
            pagination={{
              ...tableProps.pagination,
              position: ["bottomCenter"],
              size: "small",
            }}
          >
            {generateColumns({
              columns: personCompanyTimeFrameFields,
              entityResource: ResourceEnum.personCompanyTimeFrame,
            })}
          </Table>
        </List>
      </Show>
    </StateManager>
  );
}
