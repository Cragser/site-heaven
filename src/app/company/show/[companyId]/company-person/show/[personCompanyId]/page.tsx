"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import EntityView from "@components/data-display/entity-view/entity-view";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { HttpError, useShow } from "@refinedev/core";
import { personCompanyFields } from "@lib/fields/person/person-company.fields";
import { Divider } from "antd";
import ListPage from "@/lib/pages/list/list-page";
import { personCompanyTimeFrameFields } from "@lib/fields/person/person-company-time-frame.fields";
import { Show } from "@refinedev/antd";

interface Props {
  params: {
    companyId: string;
    personCompanyId: string;
  };
}

export default function StakeholderPage({
  params: { companyId, personCompanyId },
}: Readonly<Props>) {
  const { queryResult } = useShow<any, HttpError>({
    id: personCompanyId,
    resource: ResourceEnum.personCompany,
  });

  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={queryResult.isError}
    >
      <Show canEdit={false}>
        <EntityView
          items={personCompanyFields}
          resource={ResourceEnum.personCompany}
          record={queryResult.data?.data}
        />
        <Divider />
        <ListPage
          columns={personCompanyTimeFrameFields}
          entityResource={ResourceEnum.personCompanyTimeFrame}
          defaultNavigation={false}
          navigation={{
            create: {
              resource: ResourceEnum.companyPersonTimeFrame,
              createMeta: () => ({
                companyId,
                personCompanyId,
              }),
            },
          }}
        />
      </Show>
    </StateManager>
  );
}
