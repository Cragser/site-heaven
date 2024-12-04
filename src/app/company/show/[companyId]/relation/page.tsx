"use client";

import { Create, List, useDrawerForm, useTable } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { Button, Drawer } from "antd";
import EntityRelationForm from "@modules/forms/relations/create-relation-form";
import { renderHeaderWithoutDefault } from "@client/util/ant/list/renderHeaderToPerson";
import CreateTableRelationItself from "@modules/tables/create-table-relation-itself";

interface Props {
  params: {
    companyId: string;
  };
}

// NEXT - Use a page component
export default function PersonRelationList({
  params: { companyId },
}: Readonly<Props>) {
  // TODO: Add translation
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `companyId||$eq||${companyId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.companyRelation,
    syncWithLocation: true,
  });
  const { title } = useEntityTitle(
    companyId,
    "company-relation.titles.list",
    "company",
  );
  const titleToAdd = "Agregar";
  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: "create",
    resource: ResourceEnum.companyRelation,
  });
  const headerButtons = renderHeaderWithoutDefault({
    id: companyId,
    parent: "company",
    customButtons: [
      <Button
        key="1"
        onClick={() => {
          show();
        }}
      >
        {titleToAdd}
      </Button>,
    ],
  });

  return (
    <>
      <List title={title} headerButtons={headerButtons}>
        <StateManager
          isLoading={tableQueryResult?.isLoading}
          isError={tableQueryResult?.isError}
          data={tableQueryResult?.data}
        >
          <CreateTableRelationItself
            parent={"relatedCompany"}
            parentName={"company"}
            parentResource={ResourceEnum.company}
            relationResource={ResourceEnum.companyRelation}
            tableProps={tableProps}
            columns={[
              {
                key: "name",
                dataIndex: ["name"],
              },
            ]}
          />
        </StateManager>
      </List>
      <Drawer {...drawerProps}>
        <Create
          saveButtonProps={saveButtonProps}
          goBack={false}
          title={titleToAdd}
        >
          <EntityRelationForm
            parentEntityId={companyId}
            entityResource={ResourceEnum.company}
            excludeIds={tableQueryResult?.data?.data.map(
              (item) => item["relatedCompany"].id,
            )}
            // excludeIds={[]}
            formProps={formProps}
            entityFieldName={"relatedCompany"}
            entityLabelName={titleToAdd}
            parentFieldName={"company"}
          />
        </Create>
      </Drawer>
    </>
  );
}
