import { useTranslate } from "@refinedev/core";
import { List, useTable } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { ItemConfig } from "@page/types/table-column.type";
import EntityTable from "@components/data-display/entity-collection/table/entity-table";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { Button, Space } from "antd";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";

export interface CreateListProps {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  defaultNavigation?: boolean;
  navigation?: {
    edit?: Navigation;
    show?: Navigation;
    delete?: Navigation;
    create?: Navigation;
  };
}

function CreateList({
  entityResource,
  columns,
  navigation,
  defaultNavigation = true,
}: CreateListProps) {
  const { tableProps, tableQueryResult } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: entityResource,
    syncWithLocation: true,
  });

  const translate = useTranslate();
  const goTo = useGoTo();
  const title = translate(`${entityResource}.titles.list`);

  const createButton =
    defaultNavigation || navigation?.create ? (
      <Space>
        <Button
          onClick={() => {
            goTo({
              action: "create",
              resource: navigation?.create?.resource || entityResource,
              meta: navigation?.create?.createMeta?.({}) || {},
            });
          }}
        >
          Crear {entityResource}
        </Button>
      </Space>
    ) : null;

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult?.isError}
    >
      <List title={title} headerButtons={[createButton]}>
        <EntityTable
          tableProps={tableProps}
          entityResource={entityResource}
          columns={columns}
          navigation={navigation}
          defaultNavigation={defaultNavigation}
        />
      </List>
    </StateManager>
  );
}

export default CreateList;
