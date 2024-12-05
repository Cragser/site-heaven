"use client";

import {useTranslate} from "@refinedev/core";
import {Create, List, useDrawerForm} from "@refinedev/antd";
import {useEntityTitle} from "@client/hooks/titles/use-person-title";
import {StateManager} from "@components/feedback/state-manager/state-manager";
import {renderHeaderToEntity} from "@client/util/ant/list/renderHeaderToPerson";
import {Button, Drawer} from "antd";
import CreateRelationForm from "@modules/forms/relations/create-relation-form";
import RelationTable
  from "@/lib/data-display/table/variant/relation-table/relation-table";
import {camelCase} from "case-anything";
import {CreateRelationPageProps} from "@/lib/pages/types/list-page.type";
import useListParentRelation
  from "@/lib/pages/list/hooks/use-list-paren-relation";
import {If, When} from "react-if";
import excludeIds from "@client/util/forms/exclude-ids";

/**
 * Para utilizar esta página, debe de tener una relación padre e hijo. Pero la tabla intermedia no debe de tener valores
 */
function ListParentRelationPage({
  parentId,
  relationResource,
  parentResource,
  entityResource,
  parent,
  columns,
  navigation,
  showDrawer = true,
}: Readonly<CreateRelationPageProps>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useListParentRelation({
    sectionId: parentId,
    sectionResource: parentResource,
    relationResource,
    columns,
  });

  const { title } = useEntityTitle(
    parentId,
    `${relationResource}.titles.list`,
    parent,
  );

  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: "create",
    resource: relationResource,
  });

  const titleToAdd = translate(
    `${relationResource}.titles.add-relation-to-${parent}`,
  );

  const headerButtons = renderHeaderToEntity({
    id: parentId,
    parent,
    customButtons: [
      <When condition={showDrawer}>
        <Button
          key="1"
          onClick={() => {
            show();
          }}
        >
          {titleToAdd}
        </Button>
      </When>,
    ],
  });
  const camelEntity = camelCase(entityResource);
  return (
    <List title={title} headerButtons={headerButtons}>
      <StateManager
        isLoading={tableQueryResult?.isLoading}
        isError={tableQueryResult?.isError}
        data={tableQueryResult?.data}
      >
        <RelationTable
          parent={entityResource}
          parentResource={parentResource}
          entityResource={entityResource}
          tableProps={tableProps}
          parentName={parent}
          relationResource={relationResource}
          columns={columns}
          parentId={parentId}
        />
      </StateManager>

      <If condition={showDrawer}>
        <Drawer {...drawerProps}>
          <Create
            saveButtonProps={saveButtonProps}
            goBack={false}
            title={titleToAdd}
          >
            <CreateRelationForm
              parentEntityId={parentId}
              entityResource={entityResource}
              excludeIds={excludeIds(camelEntity, tableQueryResult)}
              formProps={formProps}
              entityFieldName={entityResource}
              entityLabelName={titleToAdd}
              parentFieldName={parent}
            />
          </Create>
        </Drawer>
      </If>
    </List>
  );
}

export default ListParentRelationPage;
