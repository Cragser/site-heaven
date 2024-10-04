import { CrudFilters, useTranslate } from "@refinedev/core";
import { List, useTable } from "@refinedev/antd";
import React from "react";
import EntityTable from "@/lib/data-display/table/entity-table";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { Button, Space } from "antd";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import Filter from "@/lib/data-display/table/filter/simple-filter";
import { CreateListProps } from "@/lib/pages/types/list-page.type";

function ListPage({
  entityResource,
  columns,
  navigation,
  defaultNavigation = true,
  initialFilter,
}: Readonly<CreateListProps>) {
  const { tableProps, tableQueryResult, searchFormProps } = useTable({
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: entityResource,
    syncWithLocation: true,
    filters: {
      mode: "server",
      initial: initialFilter ?? [],
    },
    onSearch: (params: { q: string }) => {
      const filters: CrudFilters = [];
      if (params?.q) {
        filters.push({
          field: "filter",
          operator: "eq",
          value: `name||$contL||${params.q}` as string,
        });
      } else if (initialFilter) {
        filters.push(...initialFilter);
      } else {
        filters.push({
          field: "filter",
          operator: "eq",
          value: `name||$ne||NULL` as string,
        });
      }
      // should return filters and reload
      return filters;
    },
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
          {translate(`${entityResource}.titles.create`)}
        </Button>
      </Space>
    ) : null;

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult?.isError}
    >
      <List title={title} headerButtons={[createButton]}>
        <Filter formProps={searchFormProps} />
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

export default ListPage;
