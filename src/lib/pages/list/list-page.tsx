import { useTranslate } from "@refinedev/core";
import { List } from "@refinedev/antd";
import React from "react";
import EntityTable from "@/lib/data-display/table/variant/entity-table/entity-table";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import Filter from "@/lib/data-display/table/blocks/filter/simple-filter";
import { CreateListProps } from "@/lib/pages/types/list-page.type";
import useListPage from "@/lib/pages/list/hooks/use-list-page";
import TableCreateItemTable from "@/lib/data-display/table/blocks/button/table-create-item-table";

function ListPage({
  entityResource,
  columns,
  navigation,
  defaultNavigation = true,
  initialFilter,
}: Readonly<CreateListProps>) {
  const { tableProps, tableQuery, searchFormProps } = useListPage({
    entityResource,
    columns,
    navigation,
    defaultNavigation,
    initialFilter,
  });
  const translate = useTranslate();

  return (
    <List
      title={translate(`${entityResource}.titles.list`)}
      headerButtons={[
        <TableCreateItemTable
          entityResource={entityResource}
          navigation={navigation}
          key="create-item"
        />,
      ]}
    >
      <StateManager
        isLoading={tableQuery?.isLoading}
        isError={tableQuery?.isError}
        data={tableQuery?.data}
      >
        <Filter formProps={searchFormProps} />
        <EntityTable
          tableProps={tableProps}
          entityResource={entityResource}
          columns={columns}
          navigation={navigation}
          defaultNavigation={defaultNavigation}
        />
      </StateManager>
    </List>
  );
}

export default ListPage;
