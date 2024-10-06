import { ListRelationComplexPageProps } from "@/lib/pages/types/list-page.type";
import useTableQuery from "@/lib/pages/list/util/use-table.query";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { List } from "@refinedev/antd";
import RelationTable from "@/lib/data-display/table/variant/relation-table/relation-table";
import { Space } from "antd";
import { camelCase } from "case-anything";
import { SectionEntityType } from "@page/types/section-entity.type";

import TableCreateButton from "@/lib/data-display/table/blocks/button/table-create-button";

export function ListRelationComplexPage({
  parentId,
  entityResource,
  relationResource,
  parentResource,
  columns,
  navigation,
}: Readonly<ListRelationComplexPageProps>) {
  const { tableProps, tableQueryResult } = useTableQuery({
    parentId,
    relationResource,
    parentResource,
  });
  const parentName = camelCase(parentResource);
  const headerButtons = () => (
    <Space>
      <TableCreateButton
        navigation={navigation?.create}
        entityResource={entityResource}
      />
    </Space>
  );

  return (
    <StateManager
      isLoading={tableQueryResult?.isLoading}
      isError={tableQueryResult?.isError}
    >
      <List breadcrumb={false} headerButtons={headerButtons}>
        {(tableQueryResult?.data?.data?.length ?? 0 > 0) ? (
          <RelationTable
            parent={entityResource}
            parentResource={parentResource}
            entityResource={entityResource}
            tableProps={tableProps}
            parentName={parentName as SectionEntityType}
            relationResource={relationResource}
            columns={columns}
            navigation={navigation}
          />
        ) : null}
      </List>
    </StateManager>
  );
}
