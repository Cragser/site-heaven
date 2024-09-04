"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { useTranslate } from "@refinedev/core";
import { Create, List, useDrawerForm, useTable } from "@refinedev/antd";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { renderHeaderToEntity } from "@client/util/ant/list/renderHeaderToPerson";
import { Button, Drawer } from "antd";
import CreateRelationForm from "@modules/forms/relations/create-relation-form";
import { SectionEntityType } from "@page/types/section-entity.type";
import { ItemConfig } from "@page/types/table-column.type";
import RelationTable from "@/lib/data-display/table/relation-table";

interface Props {
  parentId: string;
  // career
  entityResource: ResourceEnum;
  // personCareer
  relationResource: ResourceEnum;
  // person
  parentResource: ResourceEnum;
  parent: SectionEntityType;
  columns: ItemConfig[];
}

function ListParentRelationPage({
  parentId,
  relationResource,
  parentResource,
  entityResource,
  parent,
  columns,
}: Props) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `${parent}Id||$eq||${parentId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: relationResource,
    syncWithLocation: true,
  });
  const { title } = useEntityTitle(
    parentId,
    `${relationResource}.titles.list`,
    parent
  );

  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: "create",
    resource: relationResource,
  });

  const titleToAdd = translate(
    `${relationResource}.titles.add-relation-to-${parent}`
  );

  const headerButtons = renderHeaderToEntity({
    id: parentId,
    parent,
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
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult?.isError}
    >
      <List title={title} headerButtons={headerButtons}>
        <RelationTable
          parent={entityResource}
          parentResource={parentResource}
          entityResource={entityResource}
          tableProps={tableProps}
          parentName={parent}
          relationResource={relationResource}
          columns={columns}
        />
      </List>
      <Drawer {...drawerProps}>
        <Create
          saveButtonProps={saveButtonProps}
          goBack={false}
          title={titleToAdd}
        >
          <CreateRelationForm
            parentEntityId={parentId}
            entityResource={entityResource}
            excludeIds={tableQueryResult?.data?.data.map(
              (item) => item[entityResource].id
            )}
            formProps={formProps}
            entityFieldName={entityResource}
            entityLabelName={titleToAdd}
            parentFieldName={parent}
          />
        </Create>
      </Drawer>
    </StateManager>
  );
}

export default ListParentRelationPage;
